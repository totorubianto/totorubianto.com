import React from 'react';

import favicon from 'static-assets/favicon.png';

export default function HTML({headComponents, body, postBodyComponents}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href={favicon} />
        <meta name="theme-color" content="#00f" />
        <meta name="author" content="Toto Rubianto" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@totorubianto" />
        <meta name="twitter:creator" content="@totorubianto" />
        <meta
          name="twitter:image"
          content="https://totorubianto.uk/static/twitter-card.png"
        />
        <meta name="google-site-verification" content="I32s_sWnc79g4NVXJ0GDKGC2BBozigDgZGnC21LzwqQ" />
        <title>Example Books - high-quality used books for children</title>
        <meta name="description" content="Hello! I’m Toto, a software engineer. I like coding, especially using Javascript. I hope to contribute to developing Javascript code from some small things that I can make. I also like to explore new technology and make some notes about it in order to try to understand it."></meta>
        {headComponents}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{__html: body}} />
        {postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log('Built at ${Date(new Date().getTime())}')`,
          }}
        />
      </body>
    </html>
  );
}
