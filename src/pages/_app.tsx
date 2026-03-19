import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider as Provider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Provider session={pageProps.session}>
  <Component {...pageProps} />

</Provider>
);
}
