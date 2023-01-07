import React from 'react'

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageInfo from '../components/PageInfo';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

const pagemeta = {
    subTitle:`ペットさん送迎　サービスエリア | 埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉`,
    slug:`service-area`
}

export default function serviceArea() {
  return (
    <>
        <Seo
        title={pagemeta.subTitle}
        description="埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」にお任せ下さい。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。"
        />
        <Header />
        <Nav />
        <PageTop slug={pagemeta.slug} />
        <PageInfo
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        />
        <Layout>
            <h1 className="bottom1">「お迎えサービスエリア」「お引取り火葬サービスエリア」。</h1>
            <p className="text1">※エリア外のお客様はご相談下さい。</p>
            <section id="mark1">
                <h2 className="text2">斎場火葬のお迎えサービスエリア</h2>
                <p>送迎サービスエリア</p>
                <div className="box top0">
                    <h6>埼玉県</h6>
                    <p className="text1">※東武東上線「ふじみ野駅」までのお迎え及びお届けサービスは行っております。<br />
                    ※お持込の際、お電話でのご予約が必要となります。</p>
                    <section className="box2">
                    <h1>一任火葬　送迎料金(ペットのみお迎え)…</h1>
                    <h5>無料</h5>
                    <p>三芳町・ふじみ野市・富士見市・朝霞市・新座市・志木市・所沢市・狭山市・川越市</p>
                    </section>
                </div>
            </section>
            <section id="mark2">
                <h2 className="text2">斎場火葬のお引取り火葬サービスエリア</h2>
                <p>お引取り火葬サービスエリア</p>
                <p>お引き取り火葬では大切なペットの最後をお預かりいたします。ペット霊園を併設しておりますので、安心してお任せ下さい。愛するペットを心を込めて供養するお力となるため、埼玉県を中心に無料エリアを設けておりますのでご覧下さい。サービスの内容やエリアについて気になる点などございましたら、お気軽にご相談ください</p>
                <div className="box top0">
                    <h6>東京都</h6>
                    <section className="box2">
                        <h1>無料エリア</h1>
                        <h5>無料</h5>
                        <p>清瀬市</p>
                    </section>
                    <p className="text1">※その他の地域は、1,000円～最大5,000円の交通費が別途加算されます。 お問い合わせ下さい。</p>
                </div>
                <div className="box top0">
                    <h6>埼玉県</h6>
                    <section className="box2">
                        <h1>無料エリア</h1>
                        <h5>無料</h5>
                        <p>三芳町・ふじみ野市・富士見市・川越市・和光市・朝霞市・新座市・志木市・所沢市・狭山市・さいたま市・入間市</p>
                    </section>
                    <p className="text1">※その他の地域は、1,000円～最大5,000円の交通費が別途加算されます。 お問い合わせ下さい。</p>
                </div>
            </section>
        </Layout>      
    </>
  )
}

const jsonLd = {
    "@context":"https://schema.org",
    "@graph":[
      {
        "@type":"BreadcrumbList",
        "@id":"https://www.aishin2484.jp/service-area/#breadcrumblist",
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
            "nextItem":"https://www.aishin2484.jp/service-area/#listItem"
          },
          {
            "@type":"ListItem",
            "@id":"https://www.aishin2484.jp/service-area/#listItem",
            "position":2,
            "item":{
              "@type":"WebPage",
              "@id":"https://www.aishin2484.jp/service-area/",
              "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ペットさん送迎　サービスエリア",
              "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のペットさん送迎　サービスエリア。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
              "url":"https://www.aishin2484.jp/service-area/"
            },
            "previousItem":"https://www.aishin2484.jp/#listItem"
          }
        ]
      },
      {
        "@type":"Person",
        "@id":"https://www.aishin2484.jp/service-area/#person"
      },
      {
        "@type":"WebPage",
        "@id":"https://www.aishin2484.jp/service-area/#webpage",
        "url":"https://www.aishin2484.jp/service-area/",
        "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ペットさん送迎　サービスエリア",
        "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のペットさん送迎　サービスエリア。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
        "inLanguage":"ja",
        "isPartOf":{
          "@id":"https://www.aishin2484.jp/service-area/#website"
        },
        "breadcrumb":{
          "@id":"https://www.aishin2484.jp/service-area/#breadcrumblist"
        },
        "datePublished":"2022-12-19T01:06:53+09:00",
        "dateModified":"2023-01-05T3:00:07+09:00"
      },
      {
        "@type":"WebSite",
        "@id":"https://www.aishin2484.jp/service-area/#website",
        "url":"https://www.aishin2484.jp/service-area/",
        "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ペットさん送迎　サービスエリア",
        "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のペットさん送迎　サービスエリア。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
        "inLanguage":"ja",
        "publisher":{
          "@id":"https://www.aishin2484.jp/service-area/#person"
        }
      }
    ]
  }
  
  export const Head = () => (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  )