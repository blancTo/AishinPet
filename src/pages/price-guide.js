import React from 'react'

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageTop from '../components/PageTop';
import PageInfo from '../components/PageInfo';
import Layout from '../components/Layout';

const pagemeta = {
  subTitle:`料金のご案内 | 埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉`,
  slug:`price-guide`
}

export default function priceGuide() {  
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
        <section id="mark1">
          <h1>愛する家族だからこそ…個別火葬して自宅に帰してあげたい…<br />
            そんな方々とペットのために、低料金にさせていただきました。</h1>
          <p>愛心ペットセレモニーでは、愛する家族（ペット）のために、しっかりとしたご供養をしていただけるよう、低料金に設定させていただいております。また、明朗会計をモットーにしている為、無料サービスエリア内にて営業時間内のご利用であれば、下記の料金以外は一切かかりません。仏具セット（骨壷・骨壷カバー）も料金に含まれております。</p>
          <div>
            <table>
              <caption>斎場火葬料金</caption>
              <tbody><tr>
                  <td colSpan={2} />
                  <th className="red">立会い火葬<br />（お持込の場合）</th>
                  <th className="red">個別一任火葬<br />「48ｈ返骨」</th>
                  <th className="red">個別一任火葬<br />「24ｈ返骨」</th>
                </tr>
                <tr>
                  <th>ハムスター・小鳥・フェレットなど </th>
                  <td className="green">～500g</td>
                  <td>18,000 円<br />税込19,800 円</td>
                  <td>17,000 円<br />税込18,700 円</td>
                  <td>18,000 円<br />税込19,800 円</td>
                </tr>
                <tr>
                  <th rowSpan={2}>猫・小型犬・うさぎ　など</th>
                  <td className="green">～3kg</td>
                  <td>23,000 円<br />税込25,300 円</td>
                  <td>20,000 円<br />税込22,000 円</td>
                  <td>23,000 円<br />税込25,300 円</td>
                </tr>
                <tr>
                  <td className="green">～5kg</td>
                  <td>25,000 円<br />税込27,500 円</td>
                  <td>22,000 円<br />税込24,200 円</td>
                  <td>25,000 円<br />税込27,500 円</td>
                </tr>
                <tr>
                  <th rowSpan={2}>シュナウザー・パグ・中型犬など</th>
                  <td className="green">～7kg</td>
                  <td>27,000 円<br />税込29,700円</td>
                  <td>24,000 円<br />税込26,400 円</td>
                  <td>27,000 円<br />税込29,700 円</td>
                </tr>
                <tr>
                  <td className="green">～10kg</td>
                  <td>29,000 円<br />税込31,900 円</td>
                  <td>26,000 円<br />税込28,600 円</td>
                  <td>29,000 円<br />税込31,900 円</td>
                </tr>
                <tr>
                  <th rowSpan={2}>柴犬・ビーグル・コーギーなど</th>
                  <td className="green">～12kg</td>
                  <td>31,000 円<br />税込34,100 円</td>
                  <td>28,000 円<br />税込30,800 円</td>
                  <td>31,000 円<br />税込34,100 円</td>
                </tr>
                <tr>
                  <td className="green">～15kg</td>
                  <td>33,000 円<br />税込36,300 円</td>
                  <td>30,000 円<br />税込33,000 円</td>
                  <td>33,000 円<br />税込36,300 円</td>
                </tr>
                <tr>
                  <th rowSpan={4}>ボーダーコリー・ゴールデンレトリバーなど</th>
                  <td className="green">～17kg</td>
                  <td>35,000 円<br />税込38,500 円</td>
                  <td>32,000 円<br />税込35,200 円</td>
                  <td>35,000 円<br />税込38,500 円</td>
                </tr>
                <tr>
                  <td className="green">～20kg</td>
                  <td>37,000 円<br />税込40,700 円</td>
                  <td>34,000 円<br />税込37,400 円</td>
                  <td>37,000 円<br />税込40,700 円</td>
                </tr>
                <tr>
                  <td className="green">～22kg</td>
                  <td>39,000 円<br />税込42,900 円</td>
                  <td>36,000 円<br />税込39,600 円</td>
                  <td>39,000 円<br />税込42,900 円</td>
                </tr>
                <tr>
                  <td className="green">～25kg</td>
                  <td>41,000 円<br />税込45,100 円</td>
                  <td>38,000 円<br />税込41,800 円</td>
                  <td>41,000 円<br />税込45,100 円</td>
                </tr>
                <tr>
                  <th className="text1">※料金はペットの種類ではなく、ペットの体重で決まります。</th>
                  <th className="text1" colSpan={2}>ペットさんのお迎え（10ｋｍ圏内まで）の場合、火葬料金に3,000円が加算されます。</th>
                  <th className="text1" colSpan={2}>※一任火葬でお持込の方、2千円お引きします 。</th>
                </tr>
              </tbody></table>
          </div>
          <h3 className="text2">粉骨サービス（ 火葬当日のみ 3,000円 ）にて承ります。</h3>
          <p><a href="/service-area#mark1">&gt;&gt; お迎えサービスエリアと費用はこちら</a></p>
          <ul>
            <li className="text1">※ご予約状況により、お受けできない場合もございます。</li>
            <li className="text1">※ペットの体型によっては火葬をお受けできない場合もございます。標準体型を大幅にオーバーしている場合は、ご予約前に一度ご相談下さい。</li>
            <li>・上記料金には、骨壷・骨壷カバーの料金が含まれております。</li>
          </ul>
          <div>
            <h3 className="text3">キャンセルについて　&lt;&lt; 必ずご確認ください &gt;&gt;</h3>
            <p>キャンセル料について　ご予約日当日のキャンセルにつきましては、（民法420条1項）に基づきキャンセル料として、ご予約いただいた火葬プラン料金「５０％」の費用が発生しますので、必ずご家族の皆様でご相談の上ご予約をお願い致します。</p>
          </div>
        </section>
        <section>
          <div>
            <table>
              <caption>お引取り火葬料金</caption>
              <tbody><tr>
                  <td />
                  <th colSpan={2} className="red">個別火葬（納骨含）</th>
                  <th colSpan={2} className="red">合同火葬（納骨含）</th>
                </tr>
                <tr>
                  <th rowSpan={3}>猫・小型犬・うさぎ など</th>
                  <td className="green">～500g</td>
                  <td>16,000 円<br />税込17,600 円</td>
                  <td className="green">～1kg</td>
                  <td>12,000 円<br />税込13,200 円</td>
                </tr>
                <tr>
                  <td className="green">～3kg</td>
                  <td>19,000 円<br />税込20,900 円</td>
                  <td className="green">～3kg</td>
                  <td>15,000 円<br />税込16,500 円</td>
                </tr>
                <tr>
                  <td className="green">～5kg</td>
                  <td>21,000 円<br />税込23,100 円</td>
                  <td className="green">～5kg</td>
                  <td>17,000 円<br />税込18,700 円</td>
                </tr>
                <tr>
                  <th rowSpan={2}>シュナウザー・パグ・中型犬など</th>
                  <td className="green">～7kg</td>
                  <td>23,000 円<br />税込25,300 円</td>
                  <td colSpan={2} />
                </tr>
                <tr>
                  <td className="green">～10kg</td>
                  <td>25,000 円<br />税込27,500 円</td>
                  <td colSpan={2} />
                </tr>
                <tr>
                  <th rowSpan={2}>柴犬・ビーグル・コーギーなど</th>
                  <td className="green">～12kg</td>
                  <td>27,000 円<br />税込29,700 円</td>
                  <td colSpan={2} />
                </tr>
                <tr>
                  <td className="green">～15kg</td>
                  <td>29,000 円<br />税込31,900 円</td>
                  <td colSpan={2} />
                </tr>
                <tr>
                  <th rowSpan={4}>ボーダーコリー・ゴールデンレトリバーなど</th>
                  <td className="green">～17kg</td>
                  <td>31,000 円<br />税込34,100 円</td>
                  <td colSpan={2} />
                </tr>
                <tr>
                  <td className="green">～20kg</td>
                  <td>33,000 円<br />税込36,300 円</td>
                  <td colSpan={2} />
                </tr>
                <tr>
                  <td className="green">～22kg</td>
                  <td>35,000 円<br />税込38,500 円</td>
                  <td colSpan={2} />
                </tr>
                <tr>
                  <td className="green">～25kg</td>
                  <td>37,000 円<br />税込40,700 円</td>
                  <td colSpan={2} />
                </tr>
                <tr>
                  <th className="text1">※料金は、ペットの 種類ではなく、ペットの体重で決まります。</th>
                  <th className="text1" colSpan={4} />
                </tr>
              </tbody></table>
          </div>
          <div>
            <p><a href="/service-area#mark2">&gt;&gt; お迎えサービスエリアと費用はこちら</a></p>
            <ul>
              <li className="text1">※ペットの体型によっては火葬をお受けできない場合もございます。標準体型を大幅にオーバーしている場合は、ご予約前に一度ご相談下さい。 </li>
            </ul>
          </div>
          <section id="mark2">
            <div className="box bg1">
              <p className="text1"><em>納骨無料</em>（当施設にてお火葬いただいたお客様のみ）</p>
              <p>※お立会い納骨は有料　￥5000-<br />お骨のお引取りサービス　１０キロ圏内のみ　￥5000-</p>
            </div>
          </section>
          <p className="text1">※現在、当施設にて御火葬いただいたお客様のみ御納骨をお受けさせて いただいております。</p>
          <div className="box">
            <h2 className="text1">下記の注意書をお読みになってからお申し込みください</h2>
            <ol>
              <li>無料納骨はお立会いができませんので、予めご了承下さい。お預かり後、納骨いたします。</li>
              <li>斎場での供養は毎日行なっておりますが、合同慰霊蔡などは現在のところ行なっておりません。</li>
              <li>合同納骨の為、一度納骨したご遺骨は、返骨ができません。</li>
              <li>衛生上、火葬したご遺骨以外は、お受けできません。</li>
              <li>個別での納骨は受け付けておりません。</li>
              <li>お参りのお時間は、ＡＭ９：００～ＰＭ５：００までとさせていただきます。</li>
            </ol>
            <p><br /><img src="/images/sub/a01.jpg" alt="斎場イメージ" width="320px" /></p>
          </div>
          <div>
            <h3 className="text3">キャンセルについて　&lt;&lt; 必ずご確認ください &gt;&gt;</h3>
            <p>キャンセル料について　ご予約日当日のキャンセルにつきましては、（民法420条1項）に基づきキャンセル料として、ご予約いただいた火葬プラン料金「５０％」の費用が発生しますので、必ずご家族の皆様でご相談の上ご予約をお願い致します。</p>
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
      "@id":"https://www.aishin2484.jp/price-guide/#breadcrumblist",
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
            "url":"https://www.aishin2484.jp/price-guide/"
          },
          "nextItem":"https://www.aishin2484.jp/price-guide/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://www.aishin2484.jp/price-guide/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://www.aishin2484.jp/price-guide/",
            "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜料金のご案内",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」の料金のご案内。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
            "url":"https://www.aishin2484.jp/price-guide/"
          },
          "previousItem":"https://www.aishin2484.jp/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://www.aishin2484.jp/price-guide/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://www.aishin2484.jp/price-guide/#webpage",
      "url":"https://www.aishin2484.jp/price-guide/",
      "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜料金のご案内",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」の料金のご案内。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://www.aishin2484.jp/price-guide/#website"
      },
      "breadcrumb":{
        "@id":"https://www.aishin2484.jp/price-guide/#breadcrumblist"
      },
      "datePublished":"2022-12-19T01:06:53+09:00",
      "dateModified":"2023-01-05T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://www.aishin2484.jp/price-guide/#website",
      "url":"https://www.aishin2484.jp/price-guide/",
      "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜料金のご案内",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」の料金のご案内。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://www.aishin2484.jp/price-guide/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)
