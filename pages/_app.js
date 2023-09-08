import '../styles/globals.css'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js' />
      <Script src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js' />
    </>
  )
}

export default MyApp
