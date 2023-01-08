import React from 'react'

import { Link } from "gatsby"

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import BreadCrumb from '../components/BreadCrumb';
import PageTitle from '../components/PageTitle';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

const pagemeta = {
    subTitle:`ページが見つかりません`,
    slug:`notfound`
}

export default function NotFound() {
  return (
    <>
      <Seo
        title={pagemeta.subTitle + ' | 埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉'}
        description="お探しのページは、移動または削除された可能性があります。"
        />
        <Header />
        <Nav />
        <PageTop slug={pagemeta.slug} />
        <section id="page-info" className="notfound">
        <BreadCrumb
        title={pagemeta.subTitle}
        slug="404"
        />
        <PageTitle
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        />
      </section>
        <Layout>

        <h2 className="page_title01 mt0">お探しの記事は見つかりませんでした。</h2>
          <p className="center">愛心ペットセレモニーのWEBサイトをご覧頂きありがとうございます。<br />
          大変申し訳ないのですが、あなたがアクセスしようとしたページは削除されたかURLが変更されています。<br />
          お手数をおかけしますが、以下の方法からもう一度目的のページをお探し下さい。</p>
          <p className="center"><Link to="/" className='bt01'>トップページへ戻る</Link></p>


        </Layout>
    </>
  )
}

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aishin2484.jp/404/#breadcrumblist",
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
          "nextItem":"https://www.aishin2484.jp/404/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://www.aishin2484.jp/404/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://www.aishin2484.jp/404/",
            "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ページが見つかりません",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のページが見つかりません。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
            "url":"https://www.aishin2484.jp/404/"
          },
          "previousItem":"https://www.aishin2484.jp/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://www.aishin2484.jp/404/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://www.aishin2484.jp/404/#webpage",
      "url":"https://www.aishin2484.jp/404/",
      "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ページが見つかりません",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のページが見つかりません。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://www.aishin2484.jp/404/#website"
      },
      "breadcrumb":{
        "@id":"https://www.aishin2484.jp/404/#breadcrumblist"
      },
      "datePublished":"2022-12-19T01:06:53+09:00",
      "dateModified":"2023-01-05T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://www.aishin2484.jp/404/#website",
      "url":"https://www.aishin2484.jp/404/",
      "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ページが見つかりません",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のページが見つかりません。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://www.aishin2484.jp/404/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)