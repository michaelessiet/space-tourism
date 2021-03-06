import Document, { Html, Head, Main, NextScript } from "next/document";
import { imagePaths } from "../components/imagepaths";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href={imagePaths.favicon} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className=" text-accent">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
