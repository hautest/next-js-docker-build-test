import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("app.js");
    console.log("app.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
