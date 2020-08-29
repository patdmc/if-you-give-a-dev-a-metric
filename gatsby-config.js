module.exports = {
  pathPrefix: '/if-you-give-a-dev-a-metric',
  siteMetadata: {
    title: `If You Give a Dev a Metric: A story about Application Observability`,
    description: `Find out what happens when you give a software developer more information about their code`,
    author: `@patdmc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `if-you-give-a-dev-a-metric`,
        short_name: `devmetric`,
        start_url: `/`,
        background_color: `#34ebba`,
        theme_color: `#34ebba`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
