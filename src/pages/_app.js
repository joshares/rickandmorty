import Providers from "@/components/Providers";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="" />
        <meta name="description" content="Ricky and morty characters website" />
        <link rel="icon" href="/ricky.png" />
      </Head>
      <Component {...pageProps} />
    </Providers>
  );
}
