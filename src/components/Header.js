import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { useContext } from 'react'
// import { UserContext } from '../../lib/UserContext'
//import { magic } from '../../lib/magic'

const Header = () => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  // const [user, setUser] = useContext(UserContext);

  // const logout = () => {
  //   // Call Magic's logout method, reset the user state, and route to the login page
  //   magic.user.logout().then(() => {
  //     setUser({ user: null });
  //     router.push('/');
  //   });
  // };

  return (
    <header className="flex justify-between items-center text-black py-4 px-8 text-left font-bold mt-2">
      <Link href="/">
        <h1 className="text-2xl ml-6">NutriGenius</h1>
      </Link>
      {isHomePage ? (
        <Link href="/login">
          <div className="ml-auto">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-6 rounded">
              Login
            </button>
          </div>
        </Link>
      ) : (
        <div className="ml-auto">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-6 rounded">
            Logout
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
