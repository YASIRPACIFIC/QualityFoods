import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core";
import React from "react";
export default class myDocument extends Document {
  render() {
    return (
      <Html lang="env">
        <Head></Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

myDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const orginalRenderPage = ctx.renderPage;
  ctx.renderPage = () => {
    return orginalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  };
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
