import React from 'react'
import { Link,graphql } from 'gatsby'
import LayoutTopics from '../../components/LayoutTopics';
import Seo from '../../components/Seo';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import BreadCrumb from '../../components/BreadCrumb';
import PageTitle from '../../components/PageTitle';

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const pagemeta = {
    subTitle:`トピックス`,
    slug:`topics`
}

const topics = ({ data }) => {
  return (
    <>
        <Seo
          title={pagemeta.subTitle + ' | 埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉'}
          description="トトピックスの最近の記事一覧"
        />
        <Header />

        <Nav />

        <p id="page-top">
          <AnchorLink offset="0" to={'/topics/#pagetop'} title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink>
        </p>

        <section id="page-info" className="topics">
          <BreadCrumb
          title={pagemeta.subTitle}
          slug="404"
          />
          <PageTitle
          title={pagemeta.subTitle}
          slug={pagemeta.slug}
          />
        </section>

        <LayoutTopics>
            
            <section id="main">
              <h1 id="display-item">{pagemeta.subTitle}の記事一覧</h1>
            
                {data.allMicrocmsTopics.edges.map(({ node }) => (
                  <article class="list">
                    <p class="date">
                        <Link to={node.category.slug}>{node.category.name}</Link>
                        <span class="blobdate">{node.date}</span>
                    </p>
                    <div class="rack">
                      <h1 class="arrange">
                          <a href={'/topics/' + node.category.slug + '/' + node.topicsId}>{node.title}</a>
                      </h1>
                      <p class="preface">
                          <a href={'/topics/' + node.category.slug + '/' + node.topicsId}>
                            {node.excerpt}
                          </a>
                      </p>
                    </div>
                  </article>
                ))}
            </section>
        </LayoutTopics>
    </>
  )
}

export default topics

export const query = graphql`
query {
  allMicrocmsTopics(limit: 30) {
    edges {
      node {
        title
        topicsId
        slug
        date(formatString: "YYYY年MM月DD日")
        category {
          slug
          name
          id
        }
        excerpt
        body
      }
    }
  }
}
`

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aishin2484.jp/topics/#breadcrumblist",
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
            "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜トピックスの最近の記事一覧",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のトピックスの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
            "url":"https://www.aishin2484.jp/topics/"
          },
          "previousItem":"https://www.aishin2484.jp/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://www.aishin2484.jp/topics/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://www.aishin2484.jp/topics/#webpage",
      "url":"https://www.aishin2484.jp/topics/",
      "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜トピックスの最近の記事一覧",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のトピックスの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://www.aishin2484.jp/topics/#website"
      },
      "breadcrumb":{
        "@id":"https://www.aishin2484.jp/topics/#breadcrumblist"
      },
      "datePublished":"2022-12-19T01:06:53+09:00",
      "dateModified":"2023-01-05T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://www.aishin2484.jp/topics/#website",
      "url":"https://www.aishin2484.jp/topics/",
      "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜トピックスの最近の記事一覧",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のトピックスの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://www.aishin2484.jp/topics/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)