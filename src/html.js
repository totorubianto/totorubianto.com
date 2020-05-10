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
