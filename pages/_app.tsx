import "../styles/globals.css";
import type { AppProps } from "next/app";

// etst
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
