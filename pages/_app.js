import '../styles/globals.css'

//pure program mein agar kahi bhi css likhein to use yha link krna hi h

import '../pages/signup/signup.css'
import '../pages/login/login.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../components/Feed.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
