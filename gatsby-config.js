require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `Singlefin Surf & Stay Taghazout`,
    description: `Singlefin is a surf hotel located in Taghazout, Morocco.`,
    author: `Singlefin`,
  },
  plugins: [
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `22225142971`,
      },
    },
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qlhp1q6elgxs`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fav.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-crisp-chat",
    //   options: {
    //     websiteId: "3f96f73e-9f2d-40ac-81d8-12ba7e9462b4",
    //     enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
    //     defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
    //     enableImprovedAccessibility: false, // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
