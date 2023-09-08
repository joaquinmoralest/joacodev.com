import '../styles/globals.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import Script from 'next/script';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmDBxm2yvMpN_ixWDwWH1UtPtlteoSl_o",
  authDomain: "portfolio-2459f.firebaseapp.com",
  projectId: "portfolio-2459f",
  storageBucket: "portfolio-2459f.appspot.com",
  messagingSenderId: "358118433307",
  appId: "1:358118433307:web:f60d5bca2094e891af0ebe",
  measurementId: "G-YNDCFTRXKG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// export const analytics = getAnalytics(app)
export const db = getFirestore(app)

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
