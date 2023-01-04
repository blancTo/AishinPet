import React from 'react'

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageInfo from '../components/PageInfo';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

const pagemeta = {
    subTitle:`狭山市にお住まいの方へ`,
    slug:`sayama`
}

export default function sayama() {
  return (
    <>
      <Seo
        title={pagemeta.subTitle}
        description="狭山市にお住まいの方へ、ペット火葬について愛心ペットセレモニーからのご提案です。"
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
            <h2>狭山市にお住まいの方へ愛心ペットセレモニーからのご提案です</h2>
            </div>{/*.headline-*/}
            <div className="texts clearfix">
            <div className="text text__city">
            <p><strong>狭山市</strong>内にお住まいの方で、ペットさんの「個別立会い火葬」をご希望され、お探し方へご案内申し上げます。</p>
            <p>ペット火葬には、出張型（移動火葬車）と、施設で執り行う固定炉火葬とございます。
            <br />出張火葬タイプは、施設設備費がかからない事や、車に火葬炉を設置するため、安価で軽量化した火葬炉を使用しているため、火葬料金が固定炉火葬施設と比べて割安で利用できます。
            <br />また、出張で来てくれるため、利便性も良いです。
            <br />しかし、このようなメリットもあれば、当然デメリットもございます。
            <br />火葬車といえども、当然、条例は順守しなければならないのですが、大半は狭山市以外の業者となり、届け出などしていない業者多いのは事実です。
            <br />もし、近隣トラブルが発生し、無届だった場合、業者のみならず、依頼者側の責任問題にも発展してしまいますので、届け出をされているか、業者への確認と、ご自宅の駐車場などで火葬する場合は、火葬前に、近隣への周知も必要となります。
            <br />また、公道や河川敷、公共の駐車場などでのペット火葬は禁止されているので、マンションにお住まいの方が依頼するのはハードルが高いと考えます。
            <br />この事をしっかりしておかないと、安心して火葬を行うことができません。</p>
            <p>固定炉施設に関しましては、設備投資や、土地の確保など、多額の投資を必要とするため、やはり利用料は高く設定されています。
            <br />しかし、固定炉施設は、行政への届け出は必ず必須となり、火葬炉の「ばい煙定期測定」（年2回）が義務づけられている事や、定期的に施設の調査などもあります。
            <br />行政からの監視が厳しい分、安心安全にご利用いただくことができ、ご近所の目を気にすることもありません。</p>
            <p>どちらも、メリット、デメリットはありますので、後は、飼い主様のご判断となりますが、移動火葬車に関しましては、他市町村、または、県外からの出張依頼が可能なので、選ぶのが困難なほど業者の数がありますが、固定炉火葬をご希望となりますと、狭山市内には僅か１件しかございません。</p>
            <p>そこで、当施設「愛心ペットセレモニー埼玉」は、狭山市からのアクセスが良く、概ね、３０分～１時間以内でお越しいただける施設となりますので、こちらのサイトを通じ、ご案内させていただきます。</p>
            <p>当施設は、東武東上線「ふじみ野駅～鶴瀬駅」間の中間に位置し、国道２５６号線を下り三芳町～ふじみ野市へ入った直ぐ側に位置し、狭山市内からもアクセス良い場所です。
            <br />お車を所有していない方でも、小さなペットさんであって、電車移動が可能な方であれば、ふじみ野駅までのご送迎（３人まで）も行っております。</p>
            <p><strong>ペット葬儀</strong>は、飼い主様とお亡くなりになられたペットさんとの最後の大切なお別れの儀式（集大成）です。
            <br />出張型でのペット火葬や代行業者など、近隣トラブルや金銭トラブルなどのリスクを避けるためにも、確りと許可を取った安心安全なペット火葬施設での葬儀をご提案させていただきます。</p>
            <p>愛心ペットセレモニー埼玉は、小規模でシンプルな施設な分、低価格にて「お立会い火葬」をご利用いただけるように価格設定しております。
            <br />遺骨のお持ち帰りを希望されない方には、ペット専用共同墓地へのご納骨もできますし、一度ご自宅に連れて帰り、後日ご納骨することも可能ですので、お客様のご要望に合わせたプランでご火葬をお選びいただけます。
            <br />また、お車の手配が困難な方や、ご高齢で施設までお越しいただけない方には、ペットさんのご送迎サービス（一任火葬のみ）も行っていますのでお気軽にお申し付け下さい。<span className="yellowLine">狭山市内にお住まいであれば、交通費も無料（一任火葬の場合）</span>となっていますので、ご利用いただきやすいかと思います。</p>
            <p>火葬できるペットさんは、小さな小鳥さんから大型犬（２５ｋｇ）までご火葬が可能です。また、ワンちゃん・猫ちゃん以外にも、ウサギさんや小動物、小鳥さんなどの火葬も可能ですので、ぜひご利用下さいませ。
            <br />また、ご不明な点は何なりとご相談下さいませ。</p>
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
            {/*#main-*/}

        </Layout>
    </>
  )
}

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.aishin2484.jp/sayama/#breadcrumblist",
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
          "nextItem":"https://www.aishin2484.jp/sayama/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://www.aishin2484.jp/sayama/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://www.aishin2484.jp/sayama/",
            "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜狭山市にお住まいの方へ",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」の狭山市にお住まいの方へ。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
            "url":"https://www.aishin2484.jp/sayama/"
          },
          "previousItem":"https://www.aishin2484.jp/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://www.aishin2484.jp/sayama/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://www.aishin2484.jp/sayama/#webpage",
      "url":"https://www.aishin2484.jp/sayama/",
      "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜狭山市にお住まいの方へ",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」の狭山市にお住まいの方へ。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://www.aishin2484.jp/sayama/#website"
      },
      "breadcrumb":{
        "@id":"https://www.aishin2484.jp/sayama/#breadcrumblist"
      },
      "datePublished":"2022-12-19T01:06:53+09:00",
      "dateModified":"2023-01-05T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://www.aishin2484.jp/sayama/#website",
      "url":"https://www.aishin2484.jp/sayama/",
      "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜狭山市にお住まいの方へ",
      "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」の狭山市にお住まいの方へ。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://www.aishin2484.jp/sayama/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)