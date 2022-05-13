import '../styles/globals.css'
import { QuioscoProvider } from '../context/QuioscoProvider'

function MyApp({ Component, pageProps }) {
  return (
    <QuioscoProvider></QuioscoProvider>
  )
}

export default MyApp
