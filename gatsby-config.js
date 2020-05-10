module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    author: 'Toto Rubianto',
    title: `Toto Rubianto - Design & Code`,
    siteUrl: 'https://totorubianto.com',
    defaultTitle: 'Toto Rubianto - Design & Code',
    defaultDescription:
      'Toto is a digital product designer in Indonesia, building things at Jakarta. Working somewhere on the boundary between design and code.',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth: 740,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          'gatsby-plugin-sharp',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-41936976-3',
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
