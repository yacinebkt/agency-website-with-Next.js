import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollOpserve from '../utils/scroll-observer'
import SizeOpserve from '../utils/size-observer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SizeOpserve>
      <ScrollOpserve>
        <Component {...pageProps} />
      </ScrollOpserve>
    </SizeOpserve>
    
  )
  //  <Component {...pageProps} />
}

export default MyApp
