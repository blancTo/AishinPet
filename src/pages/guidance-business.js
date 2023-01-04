import React from 'react'

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageInfo from '../components/PageInfo';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

import { Link } from "gatsby"

const pagemeta = {
    subTitle:`ペット火葬・葬儀に関する業務のご案内`,
    slug:`guidance-business`
}

export default function guidanceBusiness() {    
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
            <h1 className="bottom2">斎場火葬</h1>
            <h3 className="text2">ご家族の皆さんで立会いが可能です。（待合室完備）</h3>
            <p><Link href="/service-area#mark1">&gt;&gt;対応サービスエリアはこちら </Link></p>
            <div className="box top0">
                <p className="top0"><img src="/images/sub/c01.jpg" alt="ペット火葬場" /></p>
                <p>当施設（ペット火葬場）は、固定炉でのペット火葬を執り行っております。 猫ちゃん及び、小型犬～大型犬までお立会い火葬ができます。出張火葬車などは、住宅地での火葬が困難で、近隣住人とのトラブルの原因にもなります。お立会い火葬をご希望の場合、安心安全な施設でのご利用をおすすめ致します。</p>
                <p>当施設では、待合室を完備し、ご近所の目を気にすることなく、安心してご家族で火葬の立会いができます。過剰な設備投資を控え、皆様に安心してご利用いただけるよう、低価格に設定させていただきました。また、待合室にはペット用仏具やアクセサリーなども豊富に展示しております。</p>
                <p><img src="/images/sub/c02.jpg" alt="ペット斎場施設" /></p>
                <p>また待合室では「虹の橋のたもと」にいる大好きな我が子に想いを綴ることができるお手紙キットをご用意しています。 ２～３週間後に我が子から「写真入りオリジナルメッセージ」が届きます。（当施設にて販売しております）<br /><Link href="https://www.nijinohashi-yuubinkan.com/" target="_blank">&gt;&gt; 虹の橋ゆうびん館</Link></p>
                <p><img src="/images/sub/c06.jpg" alt="虹の橋ゆうびん館を待合室に設置" /></p>
                <section className="box2">
                <h1>立会い火葬</h1>
                <p>お電話にてご予約後、斎場までお車でお越しいただき（又はペットさんのお迎え）ご家族立会いのもと火葬いたします。（待合室完備）</p>
                <p className="text1">※電車でご来園されるお客様は、ふじみ野駅 (東武東上線)で下車ください。駅までお迎えに上がります。また、お迎えにて来園されたお客様は、ふじみ野駅までお送り致します。</p>
                </section>
                <section className="box2">
                <h1>一任火葬</h1>
                <p>お電話にてご予約後、斎場までお車でお越しいただき、斎場の方でお亡くなりなられたペットお預かりいたします。</p>
                <p>その後、斎場スタッフが責任をもって、個別火葬いたします。お持込された2日後以降に再度来園していただき、ご遺骨をお持ち帰りいただきます。</p>
                </section>
                <section className="box2">
                <h1>お引取り火葬</h1>
                <p>お電話にてご予約後、ご自宅までお迎えに上がります。 </p>
                <p>斎場にて火葬いたします。</p>
                <p>火葬終了後、慰霊塔へ納骨いたします。 （※ご遺骨の返骨はございません）</p>
                <p><Link href="/service-area#mark2">&gt;&gt;お引取り対応サービスエリア　</Link></p>
                </section>
                <section className="box2">
                <h1>お迎えサービス</h1>
                <p>諸事情によりお持込ができないお客様のためにお迎えサービス（有料）も行なっております。</p>
                <p><Link href="/service-area#mark1">&gt;&gt;対応サービスエリアはこちら</Link></p>
                </section>
                <div className="pickup">
                <h4>ペット火葬後のご返骨のメリット</h4>
                <p>
                    飼い主様からのお問い合わせで、火葬後の遺骨は皆さんどのようにされているのですか？と良くご質問をいただきます。<br />
                    火葬後の遺骨は、ペット霊園へのご納骨、納骨堂へ一時的に納め供養する（有料）、ご自宅の庭へ埋葬する、粉骨してから散骨（海上散骨や山林散骨など）、家族の墓地へ一緒に納める（墓地により規定あり）などがあげられます。<br />
                    しかし、大半のお客様がどのようにされるか決めかねているのが現状なのです。<br />
                    ペット霊園や散骨など、一度納めてしまうと手元に戻すことができないため、一度ご自宅へ連れて帰ってあげて、どのように遺骨を納め供養してあげれば良いかご家族の皆様でご相談されることをお勧めしております。<br /><br />
                    また、愛心ペットセレモニーでは、当施設にてご火葬いただいたお客様につきましては、いつでも期限なしでペット慰霊碑へのご納骨を受け付けておりますので、ご安心いただけます。
                </p>
                <p><Link href="/goods"><img src="/images/sub/c05.png" alt="ペットメモリアルグッズ" /></Link></p>
                <p>いつまでも一緒にいたいという気持ちをサポートするためのメモリアルグッズもご用意しております。<br />
                    <Link href="/goods">&gt;&gt;メモリアルグッズのご紹介はこちら</Link></p>
                </div>
            </div>
            </section>
            <section id="mark2">
            <h1 className="bottom2">ホームセレモニー</h1>
            <h3 className="text2">火葬後のご遺骨はどうなさっていますか？</h3>
            <p>愛心ペットセレモニーでは「自宅向けペット墓石」での供養をご提案しております。</p>
            <p><Link href="http://ptns.jp/index.html" target="_blank">&gt;&gt;ペット墓石の「パルテノン」ホームページ</Link></p>
            <div className="box top0">
                <p>ペットの供養には、人それぞれの考え方とスタイルがございます。どのような容での供養であれ、心が伝わるものであれば、愛する仔は笑顔で天国へ旅立てるのではないでしょうか？</p>
                <p>何か物足りない‥　ちゃんと成仏できているのか心配‥　あの仔寂しがってないかな～‥　私のメッセージ伝わっているかな～？</p>
                <p>などなど心配事や不安は、考えればきりがないことですが、これは飼い主の皆さまが寺院などの一般的なセレモニー形式を、供養と位置づけしているからではないでしょうか？もちろんこれも供養に変わりはありませんが‥　　寺院での供養は、お経代や管理費など、沢山お金がかかります。さて、お金をかけなければ成仏できないのでしょうか？お寺で供養して本当に想いがあの仔に伝わるのでしょうか？</p>
                <p>供養のしかたは、家族ごとに違っていてよいと思います。ご家族で話し合い、家族みんなで愛するあの仔のために、かたちや形式に囚われない供養をしてあげてはいかがでしょうか。きっと、心からのメッセージがあの仔に伝わり、笑顔で天国へと旅立てることでしょう。そして、あの仔からも、”ありがとう”の笑顔が送られてくることでしょう。</p>
                <p className="text2">私（代表：安西守）自身が、ホームセレモニーで、このような自宅向けペット墓石を造ったことから広く皆さまにご紹介しております。</p>
                <p><img src="/images/sub/b01.jpg" alt="ペットセレモニー" /></p>
                <p><Link href="http://ptns.jp/index.html" target="_blank"><img src="/images/sub/c03.jpg" alt="ペットセレモニー" /></Link></p>
            </div>
            </section>
            <section id="mark4">
            <h1 className="bottom2">粉骨サービス</h1>
            <h3 className="text2">海や山…　または自宅の庭へ散骨してあげたい…<br />そんな方々へのサービスです。</h3>
            <p>愛心ペットセレモニーでは粉骨サービスも承っております。</p>
            <div className="box top0">
                <h4>粉骨に関する考え方は、ペットも人間と同様にそれぞれの考え方や思想があると思います。</h4>
                <p className="text2">ご家族でよくご相談の上、お申し込みください。</p>
                <h5>粉骨のすすめ</h5>
                <ol>
                <li>粉骨後はパウダー状になり、容積は5分の１程度になります。</li>
                <li>海上（岸から10キロ以上離れた場所）へ散骨ができる。</li>
                <li>山やゆかりの地へ散骨ができる。※地主の許可が必要です。</li>
                <li>コンパクトに保管できる。</li>
                <li>骨壷以外の容器でも保管ができる。</li>
                </ol>
                <h6>粉骨料 ¥6,300（税込み）</h6>
            </div>
            </section>
            <section>
            <h1 className="bottom2">メモリアルジュエリー</h1>
            <h3 className="text2">あなたの深い悲しみは…　あなたが彼らを心から愛した証です</h3>
            <p>大切なパートナーの永遠の形見としてお持ちいただくオンリーワンジュエリー。 </p>
            <p style={{color: '#f07020', fontWeight: 'bold'}}>※ メモリアルジュエリーの制作を、しばらく間お休みいたします。 </p>
            <div className="box top0">
                <p>私たちがお届けするメモリアルジュエリー『ルヴォワール』は、 大切なパートナーの“お遺骨”を樹脂で特殊加工し、永遠の形見としてお持ちいただくオンリーワンジュエリー。</p>
                <p>当社専属契約のクラフトマンが、1点1点心を込めて、丁寧に仕上げます。</p>
                <p><img src="/images/sub/b02.jpg" alt="メモリアルジュエリー" /></p>
                <p><Link href="http://ptns.jp/jewelry/index.html" target="_blank"><img src="/images/sub/c04.jpg" alt="ペットメモリアルジュエリー" /></Link></p>
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
        "@id":"https://www.aishin2484.jp/guidance-business/#breadcrumblist",
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
            "nextItem":"https://www.aishin2484.jp/guidance-business/#listItem"
          },
          {
            "@type":"ListItem",
            "@id":"https://www.aishin2484.jp/guidance-business/#listItem",
            "position":2,
            "item":{
              "@type":"WebPage",
              "@id":"https://www.aishin2484.jp/guidance-business/",
              "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ペット火葬・葬儀に関する業務のご案内",
              "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のペット火葬・葬儀に関する業務のご案内。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
              "url":"https://www.aishin2484.jp/guidance-business/"
            },
            "previousItem":"https://www.aishin2484.jp/#listItem"
          }
        ]
      },
      {
        "@type":"Person",
        "@id":"https://www.aishin2484.jp/guidance-business/#person"
      },
      {
        "@type":"WebPage",
        "@id":"https://www.aishin2484.jp/guidance-business/#webpage",
        "url":"https://www.aishin2484.jp/guidance-business/",
        "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ペット火葬・葬儀に関する業務のご案内",
        "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のペット火葬・葬儀に関する業務のご案内。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
        "inLanguage":"ja",
        "isPartOf":{
          "@id":"https://www.aishin2484.jp/guidance-business/#website"
        },
        "breadcrumb":{
          "@id":"https://www.aishin2484.jp/guidance-business/#breadcrumblist"
        },
        "datePublished":"2022-12-19T01:06:53+09:00",
        "dateModified":"2023-01-05T3:00:07+09:00"
      },
      {
        "@type":"WebSite",
        "@id":"https://www.aishin2484.jp/guidance-business/#website",
        "url":"https://www.aishin2484.jp/guidance-business/",
        "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜ペット火葬・葬儀に関する業務のご案内",
        "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」のペット火葬・葬儀に関する業務のご案内。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
        "inLanguage":"ja",
        "publisher":{
          "@id":"https://www.aishin2484.jp/guidance-business/#person"
        }
      }
    ]
  }
  
  export const Head = () => (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  )
