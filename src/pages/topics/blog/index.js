import React from 'react'
import { Link,graphql } from 'gatsby'

import LayoutTopics from '../../../components/LayoutTopics'
import Seo from '../../../components/Seo';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import BreadCrumbCat from '../../../components/BreadCrumb';
import PageTitle from '../../../components/PageTitle';

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const pagemeta = {
    subTitle:`ブログ｜埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉`,
    slug:`blog`
}

const blog = ({data}) => {
  return (
    <>
        <Seo
          title={pagemeta.subTitle + '｜埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉'}
          description="ブログの記事一覧ページです"
        />
        <Header />

        <Nav />

        {data.allMicrocmsTopics.edges.map(({ node }) => (
          <p id="page-top">
            <AnchorLink offset="0" to={'/topics/' + node.category.slug + '/#pagetop'} title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink>
          </p>
        ))}

            <section id="page-info" className="topics">
              <BreadCrumbCat
              title={pagemeta.subTitle}
              slug="news"
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
                            <span className='cat_list'>{node.category.name}</span>
                            <span class="blobdate">{node.date}</span>
                        </p>
                        <div class="rack">
                            <h1 class="arrange">
                              <Link to={'/topics/' + node.topicsId}>{node.title}</Link>
                            </h1>
                            <p class="preface">
                              <Link to={'/topics/' + node.topicsId}>{node.excerpt}</Link>
                            </p>
                        </div>
                    </article>
                ))}
            </section>
        </LayoutTopics>
    </>
  )
}

export default blog

export const query = graphql`
query {
    allMicrocmsTopics(filter: {category: {slug: {eq: "blog"}}}, limit: 20) {
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
      "@id":"https://www.aishin2484.jp/topics/blog/#breadcrumblist",
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
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のブログの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
            "url":"https://www.aishin2484.jp/blog/"
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
            "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜トピックス｜ブログの最近の記事一覧",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のブログの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
            "url":"https://www.aishin2484.jp/topics/blog/"
          },
          "previousItem":"https://www.aishin2484.jp/topics/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://www.aishin2484.jp/topics/blog/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://www.aishin2484.jp/topics/blog/#webpage",
      "url":"https://www.aishin2484.jp/topics/blog/",
      "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ブログの最近の記事一覧",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のブログの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://www.aishin2484.jp/topics/blog/#website"
      },
      "breadcrumb":{
        "@id":"https://www.aishin2484.jp/topics/blog/#breadcrumblist"
      },
      "datePublished":"2022-12-19T01:06:53+09:00",
      "dateModified":"2023-01-05T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://www.aishin2484.jp/topics/blog/#website",
      "url":"https://www.aishin2484.jp/topics/blog/",
      "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ブログの最近の記事一覧",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のブログの最近の記事一覧。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://www.aishin2484.jp/topics/blog/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)