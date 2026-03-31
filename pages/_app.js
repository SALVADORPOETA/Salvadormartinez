import { Toaster } from 'react-hot-toast'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  )
}
