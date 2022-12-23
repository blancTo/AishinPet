import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import PropTypes from "prop-types"

const SEO = ({ title, description, image, article }) => {
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

export default SEO

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
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