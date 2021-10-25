import type { AppProps } from "next/app";
import { Navbar } from "../commons/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}
export default MyApp;
