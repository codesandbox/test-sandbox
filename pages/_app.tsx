import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // oaiwjd
  return <Component {...pageProps} />;
}

export default MyApp;
