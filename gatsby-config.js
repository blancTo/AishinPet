/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "愛心ペットセレモ二ー埼玉",
    description: "埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」にお任せ下さい。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
    image: "/images/ogp.jpg",
    url: "https://www.aishin2484.jp/",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 75, //デフォルトは50
        },
      },
    },
    
    {
      resolve: `gatsby-transformer-remark`,
      options: {        
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },

    {
      resolve: `gatsby-plugin-sass`,
      options: {
        outputStyle: 'compressed', // nested, expanded, compact, compressed,
      },
    },

    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.API_KEY,
        serviceId: 'aishin2484',
        apis: [
          {
            endpoint: 'topics',
          },
          {
            endpoint: "category",
          },
          {
            endpoint: 'notice',
          },
        ],
      },
    },

    `gatsby-plugin-react-helmet`,    
    
  ],
}
