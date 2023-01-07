import React from 'react'

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageInfo from '../components/PageInfo';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

const pagemeta = {
    subTitle:`ドライアイス店のご紹介 | 埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉`,
    slug:`dryice`
}

export default function dryice() {
  return (
    <>
        <Seo
        title={pagemeta.subTitle}
        description="ドライアイス店のご紹介"
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
                <h3 className="text2">ドライアイスを購入できるお店のご紹介</h3>
                <p>大切なご家族（ペット）が亡くなり、まだ一緒にいたいといった場合や、火葬まで少しお時間が開く場合には、ご遺体が腐敗しないようドライアイスで保冷する必要があります。氷や保冷剤は保冷力が弱く保冷時間も短いため、ご遺体の腐敗を防ぎ綺麗な状態で保存するためには、ドライアイスでの保冷が必須となります。</p>
                <p>ドライアイスの必要量は、ペットさんの体重や大きさにより異なります。目安としましては、小型犬や猫で3～4㎏　中型犬で5～6㎏大型犬で8～10㎏ほど必要となります。ちょっとぽっちゃり体系のペットさんの場合は、上下にドライアイスを当てていただくようになるので、1～2㎏程度多めの購入をお勧めします。</p> 
                <div className="box top0">
                <div className="box3 first">
                    <h6>川越市・所沢市エリア</h6>
                    <section className="box2">
                    <h1>ネコの手サービスさん</h1>
                    <ul>
                        <li>〒350-1137<br />埼玉県川越市砂新田1丁目12－15</li>
                        <li>営業時間：11：00～17：00</li>
                        <li>※要TEL入れ　時間外に購入できる時もある。</li>
                        <li>定休日：毎月始めの1日</li>
                        <li>販売単価：約2㎏単位　＠1,100‐（税込み）</li>
                        <li>駐車場：有（２台）</li>
                    </ul>
                    <div className="gmap">
                        <div className="gmap-inner">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.259841245554!2d139.48304097032306!3d35.89165126231431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018db09d41f11a9%3A0xa2881053133aa910!2z44ON44Kz44Gu5omL44O744K144O844OT44K5!5e0!3m2!1sja!2sjp!4v1657086821031!5m2!1sja!2sjp" width="100%" height="auto" title="ネコの手サービスさんアクセスマップ" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                        <p><a href="https://goo.gl/maps/8kamMV2jPJAs6grt5" target="_blank" rel="noopener noreferrer">&gt;&gt;Goodle Mapで見る</a></p>
                    </div>{/*gmap*/}
                    </section>
                    <section className="box2">
                    <h1>小谷野商店さん</h1>
                    <ul>
                        <li>〒359-1123<br />埼玉県所沢市日吉町17－12</li>
                        <li>営業時間：8：00～18：00</li>
                        <li>定休日：日曜日（営業している日も有り　要問合せ）</li>
                        <li>販売単価：1kg単位　￥440－（税込み）</li>
                        <li>駐車場：無し（店舗前一時駐車可）</li>
                    </ul>
                    <div className="gmap">
                        <div className="gmap-inner">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9207.5247754909!2d139.46018906243202!3d35.78514417661419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018dd8a69a56d19%3A0xae4d9b8a8ff5e85b!2z77yI5pyJ77yJ5bCP6LC36YeO5ZWG5bqX!5e0!3m2!1sja!2sjp!4v1657088337581!5m2!1sja!2sjp" width="100%" height="auto" title="小谷野商店さんアクセスマップ" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                        <p><a href="https://goo.gl/maps/YAFZeixmyQjZ3chj6" target="_blank" rel="noopener noreferrer">&gt;&gt;Goodle Mapで見る</a></p>
                    </div>{/*gmap*/}
                    </section>
                </div>
                <div className="box3">
                    <h6>ふじみ野市・新座市・富士見市・朝霞市・志木市エリア</h6>
                    <section className="box2">
                    <h1>平塚商事さん</h1>
                    <ul>
                        <li>〒352‐0011<br />埼玉県新座市野火止6丁目19－6 </li>
                        <li>営業時間：8：00～16：00頃まで</li>
                        <li>定休日：無休</li>
                        <li>販売単価：1kg単位　＠440‐（税込み）</li>
                        <li>駐車場：有　３～4台スペース有 </li>
                    </ul>
                    <div className="gmap">
                        <div className="gmap-inner">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9209.721538734828!2d139.55087472159306!3d35.8115455076586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e8345ced4f5f%3A0x9ee84d8cfd16f0fd!2z77yI5qCq77yJ5bmz5aGa5ZWG5LqL!5e0!3m2!1sja!2sjp!4v1657088747674!5m2!1sja!2sjp" width="100%" height="auto" title="平塚商事さんアクセスマップ" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                        <p><a href="https://goo.gl/maps/Q5A1xxmCCfSr84VQ7" target="_blank" rel="noopener noreferrer">&gt;&gt;Goodle Mapで見る</a></p>
                    </div>{/*gmap*/}
                    </section>
                </div>
                <div className="box3">
                    <h6>さいたま市エリア</h6>
                    <section className="box2">
                    <h1>浅川商店さん</h1>
                    <ul>
                        <li>〒330‐0062<br />埼玉県さいたま市浦和区仲町4丁目5－10</li>
                        <li>営業時間：7：00～15：00　月～金</li>
                        <li>　　　　　7：00～12：00　土・祝</li>
                        <li>定休日：日曜日（原則）</li>
                        <li>販売単価：1kg単位　＠400‐（税込み）</li>
                        <li>駐車場：有（1台）その他、店舗前も一時的に駐車可</li>
                    </ul>
                    <div className="gmap">
                        <div className="gmap-inner">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7753.378808303108!2d139.6413726067915!3d35.8578583785164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c1d5d177e7d5%3A0xb7769b52d601ad17!2z5rWF5bed5ZWG5bqX!5e0!3m2!1sja!2sjp!4v1657088659432!5m2!1sja!2sjp" width="100%" height="auto" title="浅川商店さんアクセスマップ" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                        <p><a href="https://goo.gl/maps/fVM8owKxuSWwJNeV7" target="_blank" rel="noopener noreferrer">&gt;&gt;Goodle Mapで見る</a></p>
                    </div>{/*gmap*/}
                    </section>
                </div>
                <div className="box3">
                    <p>ご案内させていただいたドライアイス屋さんが遠方の方の場合、人間の葬儀屋さんや、サーティーワンアイス店などでも小売りしてくれる店舗もございますので、お近くの店舗にお問い合わせください。</p>
                    <p>ただし、葬儀屋さんやアイスクリーム屋さんには、大量の在庫が無い場合がありますので、その場合、ご自宅にある氷や保冷剤などを活用し、合わせてご使用いただければ数日間は大丈夫です。</p>
                </div>
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
        "@id":"https://www.aishin2484.jp/dryice/#breadcrumblist",
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
            "nextItem":"https://www.aishin2484.jp/dryice/#listItem"
          },
          {
            "@type":"ListItem",
            "@id":"https://www.aishin2484.jp/dryice/#listItem",
            "position":2,
            "item":{
              "@type":"WebPage",
              "@id":"https://www.aishin2484.jp/dryice/",
              "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ドライアイス店のご紹介",
              "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のドライアイス店のご紹介。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
              "url":"https://www.aishin2484.jp/dryice/"
            },
            "previousItem":"https://www.aishin2484.jp/#listItem"
          }
        ]
      },
      {
        "@type":"Person",
        "@id":"https://www.aishin2484.jp/dryice/#person"
      },
      {
        "@type":"WebPage",
        "@id":"https://www.aishin2484.jp/dryice/#webpage",
        "url":"https://www.aishin2484.jp/dryice/",
        "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ドライアイス店のご紹介",
        "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のドライアイス店のご紹介。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
        "inLanguage":"ja",
        "isPartOf":{
          "@id":"https://www.aishin2484.jp/dryice/#website"
        },
        "breadcrumb":{
          "@id":"https://www.aishin2484.jp/dryice/#breadcrumblist"
        },
        "datePublished":"2022-12-19T01:06:53+09:00",
        "dateModified":"2023-01-05T3:00:07+09:00"
      },
      {
        "@type":"WebSite",
        "@id":"https://www.aishin2484.jp/dryice/#website",
        "url":"https://www.aishin2484.jp/dryice/",
        "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ドライアイス店のご紹介",
        "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のドライアイス店のご紹介。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
        "inLanguage":"ja",
        "publisher":{
          "@id":"https://www.aishin2484.jp/dryice/#person"
        }
      }
    ]
  }
  
  export const Head = () => (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  )