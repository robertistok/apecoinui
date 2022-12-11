import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>ApeCoin UI</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=0.5" />

      <meta name="description" content="ApeCoin UI is an alternative UI for ApeCoin." />
      <meta
        property="og:title"
        content="ApeCoin UI - An alternative interface for ApeCoin, staking and more..."
      />
      <meta property="og:site_name" content="ApeCoin UI" />
      <meta property="og:url" content="https://apecoinui.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://apecoinui.com/opengraph.png" />
      <meta name="twitter:site" content="@ApeCollector" />
      <meta name="twitter:title" content="ApeCoin UI" />
      <meta
        name="twitter:description"
        content="ApeCoin UI - An alternative interface for ApeCoin, staking and more..."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content="https://apecoinui.com/opengraph.png" />
      <link rel="icon" href="./teeth.png" />
    </>
  );
}
