import React from 'react'

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageInfo from '../components/PageInfo';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

const pagemeta = {
    subTitle:`よくあるご質問`,
    slug:`faq`
}

export default function faq() {
  return (
    <>
      <Seo
        title={pagemeta.subTitle}
        description="よくあるご質問。ペット葬儀についてよくある質問をまとめております。"
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
                <h3>Q&amp;A</h3>
                </div>{/*.strapline-*/}
                <div className="question">
                <h4>遺体を引き取りに来る間、何を用意してどう対処すればよいですか？</h4>
                </div>
                <div className="answer">
                <h4>用意しなければいけないものは特にありませんが、タオルを遺体の下に敷き、出来るだけ腐敗を防ぐため、ドライアイスか冷えた保冷剤、氷を袋に入れて、首の周りやお腹の上を冷やしてあげてください。（夏は特に日陰の空調の良いところに安置し、こまめに取り替えてください。） 手足の長いペットの場合、死後硬直（つっぱり）が始まる前に、自然な形で少し曲げていただければ助かります。（お棺や火葬炉に入りやすいようにする為です） 又、特に中、大型犬の場合、ご遺体をご自宅から運ぶ際に口・おしり等から汚物が出るケースがよくありますので、ガーゼ・脱脂綿・ティッシュなどでつめてカバーして頂けると汚れません。</h4>
                </div>
                <div className="question">
                <h4>火葬する際に、一緒に入れられるものは？</h4>
                </div>
                <div className="answer">
                <h4>お花とペットフードのみとさせていただいております。ご了承下さい。 紙類（写真含む）もご遠慮下さい。</h4>
                </div>
                <div className="question">
                <h4>火葬後のお骨は返してもらえますか？骨壷代は別ですか？</h4>
                </div>
                <div className="answer">
                <h4>個別火葬の場合は、単独火葬ですので、ご返骨が基本です。 弊社は骨壷、骨袋代込みの料金です。</h4>
                </div>
                <div className="question">
                <h4>料金の支払方法は？</h4>
                </div>
                <div className="answer">
                <h4>現金又はクレジットカード各種</h4>
                </div>
                <div className="question">
                <h4>キャンセルについて</h4>
                </div>
                <div className="answer">
                <h4>キャンセル料について　ご予約日当日のキャンセルにつきましては、（民法420条1項）に基づきキャンセル料として、ご予約いただいた火葬プラン料金「５０％」の費用が発生しますので、必ずご家族の皆様でご相談の上ご予約をお願い致します。</h4>
                </div>
                <div className="question">
                <h4>自宅までの交通費は？</h4>
                </div>
                <div className="answer">
                <h4>無料サービスエリア内であれば、交通費は発生しません。 それ以外のエリアはサービスエリア詳細ページをご覧ください。</h4>
                </div>
                <div className="question">
                <h4>一任個別火葬と立会個別火葬ではどう違うのですか？</h4>
                </div>
                <div className="answer">
                <h4>一任個別火葬では、お別れをして頂いた後、火葬終了後に弊社スタッフの手でご遺骨を骨壷にお収めしてお返し致します。 立会個別火葬はお別れをして頂いた後、火葬終了後はご家族の方でご収骨をして頂きます。</h4>
                </div>
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
      "@id":"https://www.aishin2484.jp/faq/#breadcrumblist",
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
          "nextItem":"https://www.aishin2484.jp/faq/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://www.aishin2484.jp/faq/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://www.aishin2484.jp/faq/",
            "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜よくあるご質問",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のよくあるご質問。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
            "url":"https://www.aishin2484.jp/faq/"
          },
          "previousItem":"https://www.aishin2484.jp/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://www.aishin2484.jp/faq/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://www.aishin2484.jp/faq/#webpage",
      "url":"https://www.aishin2484.jp/faq/",
      "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜よくあるご質問",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のよくあるご質問。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://www.aishin2484.jp/faq/#website"
      },
      "breadcrumb":{
        "@id":"https://www.aishin2484.jp/faq/#breadcrumblist"
      },
      "datePublished":"2022-12-19T01:06:53+09:00",
      "dateModified":"2023-01-05T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://www.aishin2484.jp/faq/#website",
      "url":"https://www.aishin2484.jp/faq/",
      "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜よくあるご質問",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のよくあるご質問。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://www.aishin2484.jp/faq/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)