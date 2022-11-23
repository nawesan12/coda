import '@styles/globals.css'
import { UserProvider } from '../context/context'
import Aside from '@components/Aside'
import Footer from '@components/Footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Aside />
        {children}
        <Footer />
      </body>
    </html>
  )
}
