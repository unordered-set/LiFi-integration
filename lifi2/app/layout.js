import './css/vendor.css'
import './css/bootstrap-min.css'
import './css/style.css'
import './css/rootcss.css'
import './css/globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HareCrypta Exchange | Открытое криптовалютное комьюнити ',
  description: 'HareCrypta Exchange создана на базе Lifi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-rsssl="1" class="home page-template page-template-page-templates page-template-template-onepage page-template-page-templatestemplate-onepage-php page page-id-395 translatepress-ru_RU wpb-js-composer js-comp-ver-6.9.0 vc_responsive elementor-default elementor-kit-4 elementor-page elementor-page-395 ico-dark icos-theme-ver-1.4.8 wordpress-version-6.0.5 &quot; data-spy=&quot;scroll&quot; data-target=&quot;#mainnav&quot; data-offset=&quot;80 no-touch loaded" data-offset="97.1406">
        {children}
      </body>
    </html>
  )
}
