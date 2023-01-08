import React from 'react'

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageInfo from '../components/PageInfo';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

const pagemeta = {
    subTitle:`アクセス`,
    slug:`access`
}

export default function access() {
  return (
    <>
        <Seo
        title={pagemeta.subTitle + ' | 埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉'}
        description="アクセス。愛心ペットセレモニー埼玉へのアクセスです。どうぞお気軽にお越しください。"
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
                    <h3>愛心ペットセレモニー埼玉</h3>
                </div>{/*.strapline-*/}
                <div className="texts clearfix">
                    <div className="text">霊園本部　：　〒356-0053　埼玉県ふじみ野市大井837－23</div>
                </div>
                <div className='ggmap'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114514.49317769267!2d139.44390958929452!3d35.8361829999668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018dcd7a97a1993%3A0x231995cd690cf8f7!2z5oSb5b-D44Oa44OD44OI44K744Os44Oi44OL44O85Z-8546J!5e0!3m2!1sja!2sjp!4v1643265061337!5m2!1sja!2sjp" width="100%" height={500} style={{border: 0}} title="アクセスマップ" allowFullScreen loading="lazy" /></div>
                <p><img src="/images/sub/access.jpg" alt="愛心ペットセレモニーの入口" /></p>
            </div>{/*.blog-*/}
        </Layout>
    </>
  )
}

const jsonLd = {
    "@context":"https://schema.org",
    "@graph":[
      {
        "@type":"BreadcrumbList",
        "@id":"https://www.aishin2484.jp/access/#breadcrumblist",
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
            "nextItem":"https://www.aishin2484.jp/access/#listItem"
          },
          {
            "@type":"ListItem",
            "@id":"https://www.aishin2484.jp/access/#listItem",
            "position":2,
            "item":{
              "@type":"WebPage",
              "@id":"https://www.aishin2484.jp/access/",
              "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜アクセス",
              "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のアクセス。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
              "url":"https://www.aishin2484.jp/access/"
            },
            "previousItem":"https://www.aishin2484.jp/#listItem"
          }
        ]
      },
      {
        "@type":"Person",
        "@id":"https://www.aishin2484.jp/access/#person"
      },
      {
        "@type":"WebPage",
        "@id":"https://www.aishin2484.jp/access/#webpage",
        "url":"https://www.aishin2484.jp/access/",
        "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜アクセス",
        "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のアクセス。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
        "inLanguage":"ja",
        "isPartOf":{
          "@id":"https://www.aishin2484.jp/access/#website"
        },
        "breadcrumb":{
          "@id":"https://www.aishin2484.jp/access/#breadcrumblist"
        },
        "datePublished":"2022-12-19T01:06:53+09:00",
        "dateModified":"2023-01-05T3:00:07+09:00"
      },
      {
        "@type":"WebSite",
        "@id":"https://www.aishin2484.jp/access/#website",
        "url":"https://www.aishin2484.jp/access/",
        "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜アクセス",
        "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のアクセス。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
        "inLanguage":"ja",
        "publisher":{
          "@id":"https://www.aishin2484.jp/access/#person"
        }
      }
    ]
  }
  
  export const Head = () => (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  )