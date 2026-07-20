import "../styles/globals.css";
import Script from "next/script";
import { Manrope, Outfit } from "@next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${manrope.variable} ${outfit.variable} font-sans`}>
      <Component {...pageProps} />
      <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" />
      <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" />
    </div>
  );
}

export default MyApp;
