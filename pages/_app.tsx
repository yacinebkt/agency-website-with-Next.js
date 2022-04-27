import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollOpserve from '../utils/scroll-observer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollOpserve>
      <Component {...pageProps} />
    </ScrollOpserve>
  )
  //  <Component {...pageProps} />
}

export default MyApp
