import 'styles/globals.css'
import 'styles/tailwind.css'

import { ModalProvider, ToastProvider } from '@apideck/components'

//import { AppProps } from 'next/app'

import { UserContext } from '../../lib/UserContext'

import { useState } from 'react'

import Header from 'components/Header'

import Footer from 'components/Footer'

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ToastProvider>
          <ModalProvider>
            <UserContext.Provider value={[user, setUser]}>
              <Component {...pageProps} />
            </UserContext.Provider>
          </ModalProvider>
        </ToastProvider>
      </main>
      <Footer />
    </div>
  )
}
