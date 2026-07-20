import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#090d14" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
