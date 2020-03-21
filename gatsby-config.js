module.exports = {
  siteMetadata: {
    title: `Wasif Jameel`,
    description: `Hi, this is portfolio website for Wasif Jameel. Containing general information about Wasif who is a enthusiast developer.`,
    author: `@chwasifjameel`,
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
        name: `wasif-jameel`,
        short_name: `Wasif`,
        start_url: `/`,
        background_color: `#007bff`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: "#007bff",
        height: "5px",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
