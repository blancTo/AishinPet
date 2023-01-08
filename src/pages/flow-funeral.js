import React from 'react'

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageInfo from '../components/PageInfo';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

import { Link } from "gatsby"

const pagemeta = {
  subTitle:`ペット葬儀の流れ`,
  slug:`flow-funeral`
}

export default function flowFuneral() {
  return (
    <>
    <Seo
    title={pagemeta.subTitle + ' | 埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉'}
    description="ペット葬儀の流れ。火葬からお遺骨のお返しまでの流れを説明いたします。"
     />
    <Header />
    <Nav />
    <PageTop slug={pagemeta.slug} />
    <PageInfo
      title={pagemeta.subTitle}
      slug={pagemeta.slug}
      />
    <Layout>
    
      <section>
        <h3 className="text2">STEP1</h3>
        <h2>お申込み・日程のお打ち合わせ</h2>
        <div className="box top0 next">
          <img src="/images/tel.png" alt="電話番号：0120-36-2484" width="280px" />
          <p>ほぼ年中無休<br />電話受付：7:00～23:00</p>
          <h4>お電話にてご連絡ください。</h4>
          <p>ご都合の良い日時やプランなどを打ち合わせ致します。※お申し込み状況によりお客様のご希望にお応えできない場合もございますので予めご了承ください。</p>
          <ul>
            <li><Link href="/service-area#mark1">&gt;&gt;対応サービスエリアはこちら</Link></li>
            <li><Link href="/price-guide">&gt;&gt;料金一覧はこちら</Link></li>
            <li><Link href="/guidance-business">&gt;&gt;業務内容はこちら</Link></li>
          </ul>
        </div>
        <h3 className="text2">STEP2</h3>
        <h2>火葬</h2>
        <div className="top0">
          <dl className="step next">
            <dt>個別立会い火葬</dt>
            <dd>一体一体単独で火葬いたします。<br />飼い主様の立会いができます。</dd>
          </dl>
          <dl className="step next">
            <dt>個別一任火葬・お引取り火葬</dt>
            <dd>一体一体単独で火葬いたします。<br />飼い主様の立会いはございません。</dd>
          </dl>
          <div className="both" />
        </div>
        <h3 className="text2">STEP3</h3>
        <h2>お骨上げ</h2>
        <div className="top0 next">
          <dl className="step">
            <dt>個別立会い火葬</dt>
            <dd>ご依頼主様とご一緒にお骨上げを執り行います。</dd>
          </dl>
          <dl className="step">
            <dt>個別一任火葬・お引き取り火葬</dt>
            <dd>弊社に一任、弊社スタッフによりお骨上げを執り行います。</dd>
          </dl>
          <div className="both" />
        </div>
        <h3 className="text2">STEP4</h3>
        <h2>お遺骨のお返し</h2>
        <div className="box top0 next">
          <p>火葬後はお骨を骨壷（無料にてご奉仕）に入れ、飼い主様の元へお返しいたします。
            返骨後のお骨の扱いは飼い主様の考え方により異なりますので、ご相談ください。</p>
          <p className="text1">お引取り火葬の場合 合同慰霊塔へ合祀　※お骨の返骨はございません。</p>
          <p>※次にご案内しております 
            「ホームセレモニー」（オプション）、「メモリアルジュエリー」を、 
            お薦めいたします。 
          </p>
        </div>
        <h3 className="text2">STEP5 <span className="text1">（オプション）</span></h3>
        <h2>ホームセレモニー</h2>
        <div className="box top0 bottom3">
          <p className="text2"><em>ホームセレモニー</em></p>
          <p>愛するわが子といつまでも一緒にいてあげてください。共に暮らしてきたお家でセレモニーを行います。ご遺骨をメモリアルストーン（ホーム墓石）に納骨していだき供養していだきます。メモリアルストーンは、室内用と屋外用（お庭用など）をご用意させていただきましたので、 設置場所や設置条件に合わせたご提案をさせて頂きます。 </p>
          <ul>
            <li><Link href="/guidance-business#mark2">&gt;&gt;ホームセレモニーの詳細はこちら</Link></li>
            <li className="text1">※このサービスはオプションとなります。</li>
          </ul>
          <img src="/images/sub/b01.jpg" alt="ホームセレモニーのイメージ" />
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
      "@id":"https://www.aishin2484.jp/flow-funeral/#breadcrumblist",
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
          "nextItem":"https://www.aishin2484.jp/flow-funeral/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://www.aishin2484.jp/flow-funeral/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://www.aishin2484.jp/flow-funeral/",
            "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ペット葬儀の流れ",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のペット葬儀の流れ。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
            "url":"https://www.aishin2484.jp/flow-funeral/"
          },
          "previousItem":"https://www.aishin2484.jp/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://www.aishin2484.jp/flow-funeral/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://www.aishin2484.jp/flow-funeral/#webpage",
      "url":"https://www.aishin2484.jp/flow-funeral/",
      "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ペット葬儀の流れ",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のペット葬儀の流れ。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://www.aishin2484.jp/flow-funeral/#website"
      },
      "breadcrumb":{
        "@id":"https://www.aishin2484.jp/flow-funeral/#breadcrumblist"
      },
      "datePublished":"2022-12-19T01:06:53+09:00",
      "dateModified":"2023-01-05T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://www.aishin2484.jp/flow-funeral/#website",
      "url":"https://www.aishin2484.jp/flow-funeral/",
      "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ペット葬儀の流れ",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のペット葬儀の流れ。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://www.aishin2484.jp/flow-funeral/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)
