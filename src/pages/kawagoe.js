import React from 'react'

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageInfo from '../components/PageInfo';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

const pagemeta = {
    subTitle:`川越市にお住まいの方へ`,
    slug:`kawagoe`
}

export default function kawagoe() {
  return (
    <>
      <Seo
        title={pagemeta.subTitle}
        description="川越市にお住まいの方へ、ペット火葬について愛心ペットセレモニーからのご提案です。"
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
                <div className="headline">
                    <h2>川越市にお住まいの方へ愛心ペットセレモニーからのご提案です</h2>
                </div>{/*.headline-*/}
                <div className="texts clearfix">
                    <div className="text">
                    <p>現在、<strong>川越市</strong>内にはペット専用火葬施設が無く、川越中心地から約１０ｋｍに位置するふじみ野市（大井）にございます愛心ペットセレモニー埼玉が最寄りの施設になるかと思います。
                        <br />※お住まいの地域による。 国道２５４号線沿いに入り口が位置するため、川越市にお住まいの方には交通の便でも利用しやすい場所に位置しています。
                        <br />また、当施設は埼玉県からも届出受理を受けている施設ですので安心してご利用いただけます。</p>
                    <p><strong>ペット火葬</strong>は、小さな小鳥さんから３０ｋｇの大型犬までご対応が可能で、ご家族様でのお立会い火葬もできます。
                        <br />お車が手配できない方や、ご高齢で施設までお越しいただく事が困難な方は、ペットさんのお迎えからお骨のお届けまでお任せいただく事も可能です。
                        <br /><span className="yellowLine">川越市内であれば、ペットさんのご送迎費用（一任火葬の場合）も無料です</span>ので、火葬費用も抑えられるかと思います。</p>
                    <p>愛心ペットセレモニーは、設備投資（火葬炉設備を除く）を抑え料金に繁栄させているため、ペット専用火葬施設の中ではとてもリーズナブルな料金設定となっておりご満足いただけると思います。<br />
                        火葬後のお骨は、骨壷へ納めてのご返骨が中心ですが、ご希望により施設内の共同墓地へのご納骨も承りますので、お客様のご希望のプランにてご選択いただけます。また、お客様のご要望の多いペット仏具等も豊富に取り揃え待合室に展示しております。</p>
                    <p>お立会い火葬は、午前９：００～午後１７：００までとなりますが、現在は不定期ですが夜間２０：００までご対応できる日もございますので、お問い合わせ下さいませ。 お電話でのご予約やお問い合わせは、午前６：００～午後２３：００まで受付けておりますので、予約状況など、お問い合わせください。</p>
                    </div>
                </div>
                <div className="headline">
                    <h2>ペット火葬は大きく分けて３つのプラン</h2>
                </div>{/*.headline-*/}
                <div className="table clearfix">
                    <div className="table-list">
                    <dl className="label">
                        <dt>立会い個別火葬</dt>
                        <dd>ご家族様で火葬の立会いを行っていただけます。<br />火葬後にご返骨いたします。</dd>
                    </dl>
                    <dl className="label">
                        <dt>個別一任火葬</dt>
                        <dd>お迎えからご返骨までをスタッフに一任していただきます。<br />お迎えにあがり、火葬を行った後、再度ご返骨におうかがいします。<br />24時間以内のご返骨と48時間以内のご返骨のプランがございます。</dd>
                    </dl>
                    <dl className="label">
                        <dt>お引き取り個別火葬</dt>
                        <dd>お迎えにあがり火葬いたします。<br />火葬後は共同墓地へご納骨いたします。</dd>
                    </dl>
                    <dl className="label">
                        <dt>お引き取り合同火葬</dt>
                        <dd>お迎えにあがり、仲間のペットさん達と一緒に火葬いたします。<br />火葬後、共同墓地へご納骨いたします。</dd>
                    </dl>
                    </div>
                </div>
                <h3>料金表</h3>
                <table>
                    <caption>斎場火葬料金</caption>
                    <tbody><tr>
                        <td colSpan={2} />
                        <th className="red">立会い火葬<br />（お持込の場合）</th>
                        <th className="red">個別一任火葬<br />「24ｈ返骨」</th>
                        <th className="red">個別一任火葬<br />「48ｈ返骨」</th>
                    </tr>
                    <tr>
                        <th>ハムスター・小鳥・フェレットなど </th>
                        <td className="green">～500g</td>
                        <td>18,000 円<br />税込19,800 円</td>
                        <td>18,000 円<br />税込19,800 円</td>
                        <td>17,000 円<br />税込18,700 円</td>
                    </tr>
                    <tr>
                        <th rowSpan={2}>猫・小型犬・うさぎ　など</th>
                        <td className="green">～3kg</td>
                        <td>23,000 円<br />税込25,300 円</td>
                        <td>23,000 円<br />税込25,300 円</td>
                        <td>20,000 円<br />税込22,000 円</td>
                    </tr>
                    <tr>
                        <td className="green">～5kg</td>
                        <td>25,000 円<br />税込27,500 円</td>
                        <td>25,000 円<br />税込27,500 円</td>
                        <td>22,000 円<br />税込24,200 円</td>
                    </tr>
                    <tr>
                        <th rowSpan={2}>シュナウザー・パグ・中型犬など</th>
                        <td className="green">～7kg</td>
                        <td>27,000 円<br />税込29,700 円</td>
                        <td>27,000 円<br />税込29,700 円</td>
                        <td>24,000 円<br />税込26,400 円</td>
                    </tr>
                    <tr>
                        <td className="green">～10kg</td>
                        <td>29,000 円<br />税込31,900 円</td>
                        <td>29,000 円<br />税込31,900 円</td>
                        <td>26,000 円<br />税込28,600 円</td>
                    </tr>
                    <tr>
                        <th rowSpan={2}>柴犬・ビーグル・コーギーなど</th>
                        <td className="green">～12kg</td>
                        <td>31,000 円<br />税込34,100 円</td>
                        <td>31,000 円<br />税込34,100 円</td>
                        <td>28,000 円<br />税込30,800 円</td>
                    </tr>
                    <tr>
                        <td className="green">～15kg</td>
                        <td>33,000 円<br />税込36,300 円</td>
                        <td>33,000 円<br />税込36,300 円</td>
                        <td>30,000 円<br />税込33,000 円</td>
                    </tr>
                    <tr>
                        <th rowSpan={6}>ボーダーコリー・ゴールデンレトリバーなど</th>
                        <td className="green">～17kg</td>
                        <td>35,000 円<br />税込38,500 円</td>
                        <td>35,000 円<br />税込38,500 円</td>
                        <td>32,000 円<br />税込35,200 円</td>
                    </tr>
                    <tr>
                        <td className="green">～20kg</td>
                        <td>37,000 円<br />税込40,700 円</td>
                        <td>37,000 円<br />税込40,700 円</td>
                        <td>34,000 円<br />税込37,400 円</td>
                    </tr>
                    <tr>
                        <td className="green">～22kg</td>
                        <td>39,000 円<br />税込42,900 円</td>
                        <td>39,000 円<br />税込42,900 円</td>
                        <td>36,000 円<br />税込39,600 円</td>
                    </tr>
                    <tr>
                        <td className="green">～25kg</td>
                        <td>41,000 円<br />税込45,100 円</td>
                        <td>41,000 円<br />税込45,100 円</td>
                        <td>38,000 円<br />税込41,800 円</td>
                    </tr>
                    <tr>
                        <td className="green">～27kg</td>
                        <td>43,000 円<br />税込47,300 円</td>
                        <td>43,000 円<br />税込47,300 円</td>
                        <td>40,000 円<br />税込44,000 円</td>
                    </tr>
                    <tr>
                        <td className="green">～30kg</td>
                        <td>45,000 円<br />税込49,500 円</td>
                        <td>45,000 円<br />税込49,500 円</td>
                        <td>42,000 円<br />税込46,200 円</td>
                    </tr>
                    <tr>
                        <th className="text1">※料金はペットの種類ではなく、ペットの体重で決まります。</th>
                        <th className="text1" colSpan={2}>ペットさんのお迎え（10ｋｍ圏内まで）の場合、火葬料金に3,000円が加算されます。</th>
                        <th className="text1" colSpan={2}>※一任火葬でお持込の方、2千円お引きします 。</th>
                    </tr>
                    </tbody></table>
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
                        <th rowSpan={6}>ボーダーコリー・ゴールデンレトリバーなど</th>
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
                        <td className="green">～27kg</td>
                        <td>39,000 円<br />税込42,900 円</td>
                        <td colSpan={2} />
                    </tr>
                    <tr>
                        <td className="green">～30kg</td>
                        <td>41,000 円<br />税込45,100 円</td>
                        <td colSpan={2} />
                    </tr>
                    <tr>
                        <th className="text1">※料金は、ペットの 種類ではなく、ペットの体重で決まります。</th>
                        <th className="text1" colSpan={4} />
                    </tr>
                    </tbody></table>
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
        "@id":"https://www.aishin2484.jp/kawagoe/#breadcrumblist",
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
            "nextItem":"https://www.aishin2484.jp/kawagoe/#listItem"
          },
          {
            "@type":"ListItem",
            "@id":"https://www.aishin2484.jp/kawagoe/#listItem",
            "position":2,
            "item":{
              "@type":"WebPage",
              "@id":"https://www.aishin2484.jp/kawagoe/",
              "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜川越市にお住まいの方へ",
              "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」の川越市にお住まいの方へ。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
              "url":"https://www.aishin2484.jp/kawagoe/"
            },
            "previousItem":"https://www.aishin2484.jp/#listItem"
          }
        ]
      },
      {
        "@type":"Person",
        "@id":"https://www.aishin2484.jp/kawagoe/#person"
      },
      {
        "@type":"WebPage",
        "@id":"https://www.aishin2484.jp/kawagoe/#webpage",
        "url":"https://www.aishin2484.jp/kawagoe/",
        "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜川越市にお住まいの方へ",
        "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」の川越市にお住まいの方へ。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
        "inLanguage":"ja",
        "isPartOf":{
          "@id":"https://www.aishin2484.jp/kawagoe/#website"
        },
        "breadcrumb":{
          "@id":"https://www.aishin2484.jp/kawagoe/#breadcrumblist"
        },
        "datePublished":"2022-12-19T01:06:53+09:00",
        "dateModified":"2023-01-05T3:00:07+09:00"
      },
      {
        "@type":"WebSite",
        "@id":"https://www.aishin2484.jp/kawagoe/#website",
        "url":"https://www.aishin2484.jp/kawagoe/",
        "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜川越市にお住まいの方へ",
        "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」の川越市にお住まいの方へ。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
        "inLanguage":"ja",
        "publisher":{
          "@id":"https://www.aishin2484.jp/kawagoe/#person"
        }
      }
    ]
  }
  
  export const Head = () => (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  )