import DietForm from 'components/DietForm'
import React, { useState } from 'react'
import Pricing from './pricing'
import Profile from './profile'
import Tracker from './tracker'

const AdminPanel: React.FC = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState('Profile')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const renderContent = () => {
    switch (currentMenuItem) {
      case 'Profile':
        return <Profile />
      case 'Tracker':
        return <Tracker />
      case 'Diet Chart':
        return <DietForm />
      case 'Pricing':
        return <Pricing />
      default:
        return null
    }
  }

  return (
    <div className="flex">
      <div className="hidden sm:block w-1/5 border-t border-r border-gray-200 h-screen">
        <nav className="mt-5 p-4">
          <ul className="px-2 space-y-6">
            <li>
              <button
                className={`${
                  currentMenuItem === 'Profile'
                    ? 'text-blue-500 font-bold text-xl'
                    : 'font-bold text-xl'
                }`}
                onClick={() => {
                  setCurrentMenuItem('Profile')
                  setIsMenuOpen(false)
                }}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                className={`${
                  currentMenuItem === 'Diet Chart'
                    ? 'text-blue-500 font-bold text-xl'
                    : 'font-bold text-xl'
                }`}
                onClick={() => {
                  setCurrentMenuItem('Diet Chart')
                  setIsMenuOpen(false)
                }}
              >
                Diet Chart
              </button>
            </li>
            <li>
              <button
                className={`${
                  currentMenuItem === 'Tracker'
                    ? 'text-blue-500 font-bold text-xl'
                    : 'font-bold text-xl'
                }`}
                onClick={() => {
                  setCurrentMenuItem('Tracker')
                  setIsMenuOpen(false)
                }}
              >
                Tracker
              </button>
            </li>
            <li>
              <button
                className={`${
                  currentMenuItem === 'Pricing'
                    ? 'text-blue-500 font-bold text-xl'
                    : 'font-bold text-xl'
                }`}
                onClick={() => {
                  setCurrentMenuItem('Pricing')
                  setIsMenuOpen(false)
                }}
              >
                Pricing
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full sm:w-4/5 border-t border-gray-200 bg-white h-screen">
        <div className="p-4">
          <div className="sm:hidden">
            <button
              className="text-3xl absolute top-0 right-0 mt-6 mr-4"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
            {isMenuOpen && (
              <div className="fixed border border-gray-200 rounded p-4 mr-2 right-0 bg-white">
                <nav className="mt-5 p-4">
                  <ul className="px-2 space-y-6">
                    <li>
                      <button
                        className={`${
                          currentMenuItem === 'Profile'
                            ? 'text-blue-500 font-bold text-xl'
                            : 'font-bold text-xl'
                        }`}
                        onClick={() => {
                          setCurrentMenuItem('Profile')
                          setIsMenuOpen(false)
                        }}
                      >
                        Profile
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${
                          currentMenuItem === 'Diet Chart'
                            ? 'text-blue-500 font-bold text-xl'
                            : 'font-bold text-xl'
                        }`}
                        onClick={() => {
                          setCurrentMenuItem('Diet Chart')
                          setIsMenuOpen(false)
                        }}
                      >
                        Diet Chart
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${
                          currentMenuItem === 'Tracker'
                            ? 'text-blue-500 font-bold text-xl'
                            : 'font-bold text-xl'
                        }`}
                        onClick={() => {
                          setCurrentMenuItem('Tracker')
                          setIsMenuOpen(false)
                        }}
                      >
                        Tracker
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${
                          currentMenuItem === 'Pricing'
                            ? 'text-blue-500 font-bold text-xl'
                            : 'font-bold text-xl'
                        }`}
                        onClick={() => {
                          setCurrentMenuItem('Pricing')
                          setIsMenuOpen(false)
                        }}
                      >
                        Pricing
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>

        <div className="w-full sm:w-4/5 border-gray-200 bg-white h-screen">
          <div className="p-4">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
