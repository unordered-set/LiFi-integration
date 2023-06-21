import './css/globals.css'
import './css/vendor.css'
import './css/style.css'
import './css/bootstrap-min.css'

export const metadata = {
  title: 'HareCrypta Exchange | Открытое криптовалютное комьюнити ',
  description: 'HareCrypta Exchange создана на базе Lifi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(94036953, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
            }}
          />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/94036953" style={{ position:'absolute', left:'-9999px' }} alt="" />
          </div>
        </noscript>
        
        {children}
      </body>
    </html>
  )
}
