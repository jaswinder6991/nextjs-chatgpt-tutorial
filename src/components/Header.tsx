import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  return (
    <header className="flex justify-between items-center text-black py-4 px-8 text-left font-bold mt-2 mb-8">
      <Link href="/">
        <h1 className="text-2xl">NutriGenius</h1>
      </Link>
      {isHomePage && (
        <Link href="/login">
          <div className="ml-auto">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </Link>
      )}
    </header>
  )
}

export default Header
