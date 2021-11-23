import React from "react";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import theme from "../helpers/ui/theme";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta
            name="keywords"
            content="the food hub, tfh, restaurant, delhi, sarita vihar, veg, non-veg, nonveg, paneer, chicken, tiffin service, rice, bread, biryani, chinese cuisine, south indian food, north indian food"
          />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="The food hub" />
          <meta
            property="og:description"
            content="The Food Hub | Satisfy your cravings by ordering the delicious meal or just order thali's via tiffin service."
          />
          <meta property="og:url" content="https://thefoodhub.netlify.app" />
          <meta property="og:site_name" content="The Food Hub" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
