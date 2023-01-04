import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import PropTypes from "prop-types"

const SeoPage = ({ data, title, description, image, article }) => {
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,    
  } = site.siteMetadata
  const { pathname } = useLocation()

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  const jsonLd = {
    "@context":"https://schema.org",
    "@graph":[
      {
        "@type":"BreadcrumbList",
        '@id': `${seo.url}/#breadcrumblist`,
        "itemListElement":[
          {
            "@type":"ListItem",
            "@id":"https://www.aishin2484.jp/#listItem",
            "position":1,
            "item":{
              "@type":"WebPage",
              "@id":"https://www.aishin2484.jp/",
              "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉",
              "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」にお任せ下さい。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
              "url":"https://www.aishin2484.jp/"
            },
            "nextItem":"https://www.aishin2484.jp/topics/#listItem"
          },
          {
            "@type":"ListItem",
            "@id":"https://www.aishin2484.jp/topics/#listItem",
            "position":2,
            "item":{
              "@type":"WebPage",
              "@id":"https://www.aishin2484.jp/topics/",
              "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜",
              "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のトピックスの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
              "url":"https://www.aishin2484.jp/topics/"
            },
            "nextItem":"https://www.aishin2484.jp/topics/blog/#listItem"
          },
          {
            "@type":"ListItem",
            "@id":"https://www.aishin2484.jp/topics/blog/#listItem",
            "position":3,
            "item":{
              "@type":"WebPage",
              "@id":"https://www.aishin2484.jp/topics/blog/",
              "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜",
              "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のブログの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
              "url":"https://www.aishin2484.jp/topics/blog/"
            },
            "nextItem":"https://www.aishin2484.jp/topics/blog/#listItem"
          },
          {
            "@type":"ListItem",
            "@id":`${seo.url}/#listItem`,
            "position":4,
            "item":{
              "@type":"WebPage",
              "@id":`${seo.url}`,
              "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜",
              "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のブログの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
              "url":`${seo.url}`
            },
            "previousItem":"https://www.aishin2484.jp/#listItem"
          }
        ]
      },
      {
        "@type":"Person",
        "@id":`${seo.url}/#person`
      },
      {
        "@type":"WebPage",
        "@id":`${seo.url}/#webpage`,
        "url":`${seo.url}/`,
        "name":`埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ブログ｜${seo.title}`,
        "description":`埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のブログの記事 - ${seo.title}。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）`,
        "inLanguage":"ja",
        "isPartOf":{
          "@id":`${seo.url}/#website`
        },
        "breadcrumb":{
          "@id": `${seo.url}/#breadcrumblist`
        },
        "datePublished":"2022-12-19T01:06:53+09:00",
        "dateModified":"2023-01-05T3:00:07+09:00"
      },
      {
        "@type":"WebSite",
        "@id":`${seo.url}/#website`,
        "url":`${seo.url}/`,
        "name":`埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ブログ｜${seo.title}`,
        "description":`埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のブログの記事 - ${seo.title}。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）`,
        "inLanguage":"ja",
        "publisher":{
          "@id":`${seo.url}/#person`
        }
      }
    ]
  }

  return (
    <Helmet>
      <html lang="ja" />
      <body id="pagetop" />
      <title>{seo.title}</title>
      <meta name="keywords" content="埼玉,ペット火葬,ペット葬儀,ふじみ野市,火葬場"></meta>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      
      {/*
  <PageMap>
    <DataObject type="thumbnail">
<Attribute name="src" value="https://www.aishin2484.jp/images/ogp.jpg"/>
<Attribute name="width" value="120"/>
<Attribute name="height" value="120"/>
    </DataObject>
  </PageMap>
*/}
      
    </Helmet>
  )
}

export default SeoPage

const query = graphql`
query ($id: String) {
    microcmsTopics(topicsId: {eq: $id}) {
      topicsId
      title
      date(formatString: "YYYY年MM月DD日")
      slug
      body
      category {
        name
        slug
        id
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}