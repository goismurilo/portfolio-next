import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="bg-primary-dark w-screen">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Todo: Add Icon Favicon  */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
