// pages/login.js
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../lib/UserContext'
import { useRouter } from 'next/router'
import { magic } from '../../lib/magic'

export default function Login() {
  const [user, setUser] = useContext(UserContext)
  const [email, setEmail] = useState('')
  // Create our router
  const router = useRouter()

  // Make sure to add useEffect to your imports at the top
  useEffect(() => {
    // Check for an issuer on our user object. If it exists, route them to the dashboard.
    user?.issuer && router.push('/dietForm')
  }, [user])

  const handleLogin = async (e) => {
    e.preventDefault()

    // Log in using our email with Magic and store the returned DID token in a variable
    try {
      const didToken = await magic.auth.loginWithEmailOTP({
        email
      })

      // Send this token to our validation endpoint
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${didToken}`
        }
      })

      // If successful, update our user state with their metadata and route to the dashboard
      if (res.ok) {
        const userMetadata = await magic.user.getMetadata()
        setUser(userMetadata)
        router.push('/dietForm')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    // <form onSubmit={handleLogin}>
    //   <label htmlFor="email">Email</label>
    //   <input
    //     name="email"
    //     type="email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <button type="submit">Log in</button>
    // </form>
    <div className="flex items-center justify-center mt-20">
      <div className="bg-gray-100 p-8 shadow-md rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Log in
          </button>
        </form>
        <p className="text-xs text-center mt-4">
          Powered by{' '}
          <a
            href="https://magic.link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Magic.link
          </a>
        </p>
      </div>
    </div>
  )
}
