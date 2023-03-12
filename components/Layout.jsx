import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout