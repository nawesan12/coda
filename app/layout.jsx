import '@styles/globals.css'
import { UserProvider } from '../context/context'
import Aside from '@components/Aside'
import Footer from '@components/Footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Coda</title>
      </head>
      <body>
        <div className="coda">
          <UserProvider>
            <Aside />
            {children}
            <Footer />
          </UserProvider>
        </div>
      </body>
    </html>
  )
}
