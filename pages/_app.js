import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../helpers/ui/theme";

import "../styles/globals.css";

import { GlobalProvider } from "../context/GlobalState";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default MyApp;
