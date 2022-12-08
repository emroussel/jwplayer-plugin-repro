import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    window.jwplayer("myElement").setup({
      playlist: "https://cdn.jwplayer.com/v2/media/VjvowSFi",
      plugins: {
        "plugin.js": {
          sampleFunction: () => {
            console.log("from plugin: hello world");
          },
          name: "Dan Woon Acorn",
        },
      },
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="//content.jwplatform.com/libraries/VQrcBiHh.js" />
      </Head>

      <div id="myElement" />
      <button
        type="button"
        onClick={() => {
          // The new plugin is not part of plugins here
          console.log(window.jwplayer().plugins);
        }}
      >
        Check plugins
      </button>
    </div>
  );
}
