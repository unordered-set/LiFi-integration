import './css/bootstrap-min.css'
import './css/vendor.css'
import './css/style.css'
import './css/globals.css'


export const metadata = {
  title: 'HareCrypta Exchange | Открытое криптовалютное комьюнити ',
  description: 'HareCrypta Exchange создана на базе Lifi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
