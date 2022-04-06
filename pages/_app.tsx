import { AppProps } from "next/app";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
