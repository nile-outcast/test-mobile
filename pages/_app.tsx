import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import Page from "../components/Page";
import "../styles/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Test Mobile</title>
    </Head>
    <Page>
      <Component {...pageProps} />
    </Page>
  </>;
}
