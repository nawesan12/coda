import './globals.css'
import Aside from '@components/Aside'
import Footer from '@components/Footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <head/>
      <body>
        <div className="coda">
          <Aside />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
