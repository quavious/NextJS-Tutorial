import '../styles/globals.css'
//Must import global styles in _app.tsx
import "../styles/main.css"
function MyApp({ Component, pageProps }) {
  // Server also Client
  console.log("Hello From _app")
  return <Component {...pageProps} />
}

export default MyApp
