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
    title: "埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉",
    description: "埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」にお任せ下さい。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
    image: "/images/ogp.jpg",
    url: "https://www.aishin2484.jp/",
    siteUrl: "https://www.aishin2484.jp/",
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

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.aishin2484.jp/`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.aishin2484.jp`,
        sitemap: `https://www.aishin2484.jp/sitemap-0.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,    
    
  ],
}
