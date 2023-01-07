import React from 'react'

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageInfo from '../components/PageInfo';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

const pagemeta = {
    subTitle:`お問い合わせ｜埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉`,
    slug:`contactus`
}

export default function contactus() {
  return (
    <>
      <Seo
        title={pagemeta.subTitle}
        description="お問い合わせページです。ご不明な点がありましたら、ご遠慮なくご相談ください。"
        />
        <Header />
        <Nav />
        <PageTop slug={pagemeta.slug} />
        <PageInfo
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        />
        <Layout>
            <div className="blog">
                <div className="strapline">
                    <h3>お問い合せフォーム</h3>
                </div>
                <div className="texts clearfix">
                    <div className="text">                
                        <span className="red">現在フォームを停止しております。<br />
                        お急ぎの方は、お電話にてお問い合せ下さい。<br /><br />
                        フリーダイヤル <a href="tel:0120-36-2484">0120-36-2484</a>（受付 6:00～23:00）<br />
                        携帯の場合は TEL <a href="tel:049-292-0047">049-292-0047</a></span>
                    </div>
                </div>
            </div>
        </Layout>
    </>
  )
}

const jsonLd = {
    "@context":"https://schema.org",
    "@graph":[
      {
        "@type":"BreadcrumbList",
        "@id":"https://www.aishin2484.jp/contactus/#breadcrumblist",
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
            "nextItem":"https://www.aishin2484.jp/contactus/#listItem"
          },
          {
            "@type":"ListItem",
            "@id":"https://www.aishin2484.jp/contactus/#listItem",
            "position":2,
            "item":{
              "@type":"WebPage",
              "@id":"https://www.aishin2484.jp/contactus/",
              "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜お問い合わせ",
              "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のお問い合わせ。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
              "url":"https://www.aishin2484.jp/contactus/"
            },
            "previousItem":"https://www.aishin2484.jp/#listItem"
          }
        ]
      },
      {
        "@type":"Person",
        "@id":"https://www.aishin2484.jp/contactus/#person"
      },
      {
        "@type":"WebPage",
        "@id":"https://www.aishin2484.jp/contactus/#webpage",
        "url":"https://www.aishin2484.jp/contactus/",
        "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜お問い合わせ",
        "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のお問い合わせ。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
        "inLanguage":"ja",
        "isPartOf":{
          "@id":"https://www.aishin2484.jp/contactus/#website"
        },
        "breadcrumb":{
          "@id":"https://www.aishin2484.jp/contactus/#breadcrumblist"
        },
        "datePublished":"2022-12-19T01:06:53+09:00",
        "dateModified":"2023-01-05T3:00:07+09:00"
      },
      {
        "@type":"WebSite",
        "@id":"https://www.aishin2484.jp/contactus/#website",
        "url":"https://www.aishin2484.jp/contactus/",
        "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜お問い合わせ",
        "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のお問い合わせ。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
        "inLanguage":"ja",
        "publisher":{
          "@id":"https://www.aishin2484.jp/contactus/#person"
        }
      }
    ]
  }
  
  export const Head = () => (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  )
