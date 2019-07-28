module.exports = {
  siteMetadata: {
    title: `Phoebe Hong`,
    description: `phoebehong.com`,
    author: `@phoebejhhong`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          { resolve: `gatsby-remark-prismjs` },
          { resolve: `gatsby-remark-external-links` },
          { resolve: `gatsby-remark-images`, options: { maxWidth: 500 } },
          { resolve: `gatsby-remark-copy-linked-files` },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
