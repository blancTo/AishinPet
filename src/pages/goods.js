import React from 'react'

import Seo from '../components/Seo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PageInfo from '../components/PageInfo';
import PageTop from '../components/PageTop';
import Layout from '../components/Layout';

const pagemeta = {
    subTitle:`商品のご案内 `,
    slug:`goods`
}

export default function goods() {
  return (
    <>
      <Seo
        title={pagemeta.subTitle + ' | 埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉'}
        description="商品のご案内。分骨カプセルのキーホルダーやネックレス、お位牌などペットメモリアルグッズをご案内いたします。"
        />
        <Header />
        <Nav />
        <PageTop slug={pagemeta.slug} />
        <PageInfo
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        />
        <Layout>
            <section id="goods">
                
                <p className="text">ペットメモリアルグッズのご紹介。</p>

                <section className="goods-rack">
                <dl className="goods">
                    <dd className="goods-img">
                    <img src="/images/goods/17.jpg" alt="メモリアル骨壷カバーフルプリント" />
                    </dd>
                    <dt className="goods-title">メモリアル骨壷カバー<br />フルプリント</dt>
                    <dd className="goods-2">サイズ：3寸・3.5寸・4寸・5寸</dd>
                    <dd className="goods-3">¥ 6,600〜9,900<span>（税込み）</span><br /><span>※ 送料別途</span></dd>
                    <dd className="goods-4">世界でたったひとつのうちの子だけのデザイン骨壷カバー。お写真とお名前、日付、メッセージを入れられます。</dd>
                </dl>
                <dl className="goods">
                    <dd className="goods-img">
                    <img src="/images/goods/21.jpg" alt="メモリアル骨壷カバーワンポイント" />
                    </dd>
                    <dt className="goods-title">メモリアル骨壷カバー<br />ワンポイント</dt>
                    <dd className="goods-2">サイズ：1.5寸・2寸・2.5寸・3寸・3.5寸・4寸・5寸・6寸・7寸</dd>
                    <dd className="goods-3">¥ 3,080〜6,600<span>（税込み）</span><br /><span>※ 送料別途</span></dd>
                    <dd className="goods-4">「世界でたったひとつのうちの子だけのデザイン骨壷カバー。お写真とお名前、日付、メッセージを入れられます。※1.5寸〜2.5寸サイズは日付・メッセーは入りません。</dd>
                </dl>
                <dl className="goods break">
                    <dd className="goods-img">
                    <img src="/images/goods/18.jpg" alt="たまころん" />
                    </dd>
                    <dt className="goods-title">たまころん</dt>
                    <dd className="goods-2">幅約３cm×高さ 約4cm 重量：64g</dd>
                    <dd className="goods-3">¥ 3,300<span>（税込み）</span></dd>
                    <dd className="goods-4">かわいいたまご型の丈夫なステンレス製 分骨用ミニ骨壺。遺骨アクセサリや遺骨ペンダントなどと同じようにいつもどこにでも一緒にお出かけできます。<br />セット内容：骨壺本体（綿入り）・ベロア調巾着袋（約80×100ｍｍ）</dd>
                </dl>
                </section>{/*.goods-rack*/}
                <section className="goods-rack">
                <dl className="goods">
                    <dd className="goods-img">
                    <img src="/images/goods/19.jpg" alt="メモリアルアクリル写真立て" />
                    </dd>
                    <dt className="goods-title">メモリアルアクリル写真立て</dt>
                    <dd className="goods-2">9cm × 12cm 縦型もあります</dd>
                    <dd className="goods-3">¥ 4,400<span>（税込み）</span><br /><span>※ 送料別途</span></dd>
                    <dd className="goods-4">L版の写真立てサイズ。オリジナルデザインとお名前、日付、メッセージを組み合わせて、世界に一つだけの写真立てを作ります。</dd>
                </dl>
                <dl className="goods">
                    <dd className="goods-img">
                    <img src="/images/goods/22.jpg" alt="メモリアルクッション" />
                    </dd>
                    <dt className="goods-title">メモリアルクッション</dt>
                    <dd className="goods-2">S：最長20cm×12cm 　M：最長34cm×20cm　L：最長50cm×30cm</dd>
                    <dd className="goods-3">¥ 7,480〜11,000<span>（税込み）</span><br /><span>※ 送料別途</span></dd>
                    <dd className="goods-4">お手持ちの写真で作る「世界でたったひとつのうちの子のメモリアルクッション」。サイズはSMLがあり、背面にはお名前、日付、メッセージが入れられるデザインをお選びいただけます。</dd>
                </dl>
                <dl className="goods break">
                    <dd className="goods-img">
                    <img src="/images/goods/20.jpg" alt="メモリアルクッション キーホルダー" />
                    </dd>
                    <dt className="goods-title">メモリアルクッション キーホルダー</dt>
                    <dd className="goods-2">最長12cm × 7cm <br />※クッションのオプション</dd>
                    <dd className="goods-3">¥ 2,800<span>（税込み）</span><br /><span>※ 送料別途</span></dd>
                    <dd className="goods-4">メモリアルクッションと同時注文であれば1点から、キーホルダーのみのご注文は3点以上から承れます。背面はデザイン柄のみとなります。</dd>
                </dl>
                </section>{/*.goods-rack*/}
                <section className="goods-rack">
                <dl className="goods">
                    <dd className="goods-img">
                    <img src="/images/goods/14.jpg" alt="おてがみキットA" />
                    </dd>
                    <dt className="goods-title">おてがみキットA</dt>
                    <dd className="goods-2">・虹の橋ゆうびん館のお話・ゆうびん館のスタッフ紹介・手紙の書き方・メッセージカード・返信用封筒（120円切手付）</dd>
                    <dd className="goods-3">¥ 2,500<span>（税込み）</span></dd>
                    <dd className="goods-4">「虹の橋のたもと」にいる大好きな我が子に手紙を書いてみませんか？２～３週間後に我が子から「写真入り葉書」が届きます。</dd>
                </dl>
                <dl className="goods">
                    <dd className="goods-img">
                    <img src="/images/goods/15.jpg" alt="おてがみキットB" />
                    </dd>
                    <dt className="goods-title">おてがみキットB</dt>
                    <dd className="goods-2">・虹の橋ゆうびん館のお話・ゆうびん館のスタッフ紹介・手紙の書き方・メッセージカード・返信用封筒（120円切手付）</dd>
                    <dd className="goods-3">¥ 3,500<span>（税込み）</span></dd>
                    <dd className="goods-4">「虹の橋のたもと」にいる大好きな我が子にお手紙を書いてみませんか？２～３週間後、我が子から「写真入りオリジナルカード」が届きます。</dd>
                </dl>
                <dl className="goods break">
                    <dd className="goods-img">
                    <img src="/images/goods/1.jpg" alt="分骨カプセルキーホルダー" />
                    </dd>
                    <dt className="goods-title">分骨カプセルキーホルダー（小）</dt>
                    <dd className="goods-2">直径９㎜　長さ２５㎜<br />（小鳥さん・ハムスターさん・ウサギさん・小型犬・猫さん向け）</dd>
                    <dd className="goods-3">¥ 1,100<span>（税込み）</span></dd>
                    <dd className="goods-4">小さな遺骨をお納めいただくカプセルです。<br />カプセルの大きさやカラーバリエーションも豊富で、小型犬や猫さんはもちろん、大型犬の遺骨も納められる大きさのカプセルもありとても人気の商品です。</dd>
                </dl>
                </section>{/*.goods-rack*/}
                <section className="goods-rack">
                <dl className="goods">
                    <dd className="goods-img">
                    <img src="/images/goods/2.jpg" alt="分骨カプセルネックレス" />
                    </dd>
                    <dt className="goods-title">分骨カプセルネックレス（小）</dt>
                    <dd className="goods-2">直径９㎜　長さ２５㎜</dd>
                    <dd className="goods-3">¥ 1,100<span>（税込み）</span></dd>
                    <dd className="goods-4">小さな遺骨をお納めいただくカプセルです。<br />カプセルの大きさやカラーバリエーションも豊富で、小型犬や猫さんはもちろん、大型犬の遺骨も納められる大きさのカプセルもありとても人気の商品です。</dd>
                </dl>
                <dl className="goods">
                    <dd className="goods-img">
                    <img src="/images/goods/noImg.jpg" alt="分骨カプセルキーホルダー" />
                    </dd>
                    <dt className="goods-title">分骨カプセルキーホルダー（大）</dt>
                    <dd className="goods-2">直径１５㎜　長さ３５㎜</dd>
                    <dd className="goods-3">¥ 1,100<span>（税込み）</span></dd>
                    <dd className="goods-4">小さな遺骨をお納めいただくカプセルです。<br />カプセルの大きさやカラーバリエーションも豊富で、小型犬や猫さんはもちろん、大型犬の遺骨も納められる大きさのカプセルもありとても人気の商品です。</dd>
                </dl>
                <dl className="goods break">
                    <dd className="goods-img">
                    <img src="/images/goods/4.jpg" alt="分骨カラーカプセル５色" />
                    </dd>
                    <dt className="goods-title">分骨カラーカプセル５色</dt>
                    <dd className="goods-2">直径１２㎜　長さ４５㎜</dd>
                    <dd className="goods-3">¥ 1,500<span>（税込み）</span></dd>
                    <dd className="goods-4">小さな遺骨をお納めいただくカプセルです。<br />カプセルの大きさやカラーバリエーションも豊富で、小型犬や猫さんはもちろん、大型犬の遺骨も納められる大きさのカプセルもありとても人気の商品です。</dd>
                </dl>
                </section>{/*.goods-rack*/}
                <section className="goods-rack">
                <dl className="goods">
                    <dd className="goods-img">
                    <img src="/images/goods/5.jpg" alt="メモリアルカラーキーホルダー樽型３色" />
                    </dd>
                    <dt className="goods-title">メモリアルカラーキーホルダー樽型３色</dt>
                    <dd className="goods-2">直径１５㎜　長さ３３㎜</dd>
                    <dd className="goods-3">¥ 2,200<span>（税込み）</span></dd>
                    <dd className="goods-4">小さな遺骨をお納めいただくカプセルです。<br />カプセルの大きさやカラーバリエーションも豊富で、小型犬や猫さんはもちろん、大型犬の遺骨も納められる大きさのカプセルもありとても人気の商品です。</dd>
                </dl>
                <dl className="goods">
                    <dd className="goods-img">
                    <img src="/images/goods/noImg.jpg" alt="メモリアルカラーキーホルダー樽型台座２色" />
                    </dd>
                    <dt className="goods-title">メモリアルカラーキーホルダー樽型台座２色（ホワイト・ピンク）</dt>
                    <dd className="goods-2">直径５０㎜　高さ２５㎜</dd>
                    <dd className="goods-3">¥ 2,700<span>（税込み）</span></dd>
                    <dd className="goods-4">小さな遺骨をお納めいただくカプセルです。<br />カプセルの大きさやカラーバリエーションも豊富で、小型犬や猫さんはもちろん、大型犬の遺骨も納められる大きさのカプセルもありとても人気の商品です。</dd>
                </dl>
                <dl className="goods break">
                    <dd className="goods-img">
                    <img src="/images/goods/7.jpg" alt="アクリル位牌（A）３色" />
                    </dd>
                    <dt className="goods-title">アクリル位牌（A）３色（ホワイト・ピンク・ブラック）</dt>
                    <dd className="goods-2">高さ１０５㎜　台座幅６０㎜<br />※制作期間約２週間</dd>
                    <dd className="goods-3">¥ 11,000<span>（税込み）</span></dd>
                    <dd className="goods-4">ペットさん用の可愛らしいお位牌です。<br />オーダー制作のため、ペットさんのお名前や命日、飼い主様のお名前などが刻印できます。<br />カラーバリエーションも豊富なので性別やペットさんのイメージカラーに合わせて制作ができます。</dd>
                </dl>
                </section>{/*.goods-rack*/}
                <section className="goods-rack">
                <dl className="goods">
                    <dd className="goods-img">
                    <img src="/images/goods/8.jpg" alt="黒位牌" />
                    </dd>
                    <dt className="goods-title">黒位牌</dt>
                    <dd className="goods-2">高さ１２５㎜　台座幅６５㎜</dd>
                    <dd className="goods-3">¥ 8,800<span>（税込み）</span></dd>
                    <dd className="goods-4">ペットさん用の可愛らしいお位牌です。<br />オーダー制作のため、ペットさんのお名前や命日、飼い主様のお名前などが刻印できます。<br />カラーバリエーションも豊富なので性別やペットさんのイメージカラーに合わせて制作ができます。</dd>
                </dl>
                <dl className="goods">
                    <dd className="goods-img">
                    <img src="/images/goods/9.jpg" alt="法名カプセル（お位牌）" />
                    </dd>
                    <dt className="goods-title">法名カプセル（お位牌）</dt>
                    <dd className="goods-2">高さ９０㎜　台座幅４０㎜<br />※手書き用のお位牌です。</dd>
                    <dd className="goods-3">¥ 1,500<span>（税込み）</span></dd>
                    <dd className="goods-4">ペットさん用の可愛らしいお位牌です。<br />オーダー制作のため、ペットさんのお名前や命日、飼い主様のお名前などが刻印できます。<br />カラーバリエーションも豊富なので性別やペットさんのイメージカラーに合わせて制作ができます。<br />※⑨番のお位牌は、お客様ご自身でお書きいただくお位牌ですのでその日にお持ち帰りいただけます。</dd>
                </dl>
                <dl className="goods break">
                    <dd className="goods-img">
                    <img src="/images/goods/10.jpg" alt="おりん一式" />
                    </dd>
                    <dt className="goods-title">おりん一式</dt>
                    <dd className="goods-2">２，３寸</dd>
                    <dd className="goods-3">¥ 1,500<span>（税込み）</span></dd>
                    <dd className="goods-4">ペットさん用の小さな「おりん」です。<br />毎日のご供養にご利用ください。</dd>
                </dl>
                </section>{/*.goods-rack*/}
                <section className="goods-rack">
                <dl className="goods">
                    <dd className="goods-img">
                    <img src="/images/goods/11.jpg" alt="ご供養セット４点セット（忘れな草）" />
                    </dd>
                    <dt className="goods-title">ご供養セット４点セット（忘れな草）</dt>
                    <dd className="goods-2">「香炉・水のみ・花立て・ローソクたて」<br />※ローソクたてのない３点セット￥３，２４０－もございます。</dd>
                    <dd className="goods-3">¥ 3,740<span>（税込み）</span></dd>
                    <dd className="goods-4">愛するペットさんをご供養していただくためのセットです。<br />模様には忘れな草が施され、「私をいつまでも忘れないでね…」という花言葉があそうです。<br />我が子を想う気持ちは永遠のものです…。</dd>
                </dl>
                <dl className="goods">
                    <dd className="goods-img">
                    <img src="/images/goods/12.jpg" alt="体毛入れ　３色（水玉）" />
                    </dd>
                    <dt className="goods-title">体毛入れ　３色（水玉）</dt>
                    <dd className="goods-2">「オレンジ・ピンク・ブルー」　<br />※その他、犬猫柄もございます。</dd>
                    <dd className="goods-3">¥ 1,100<span>（税込み）</span></dd>
                    <dd className="goods-4">ペットさんの毛髪を形見として保管いただくポートレートです。<br />遺骨を納骨される方などで、手元に形見を残しておきたい方にお勧めです。<br />折りたたんだり立て掛けてご使用いただけます。<br />※ペット火葬場にてペット火葬・葬儀前に、体毛をお切りする事もできます。</dd>
                </dl>
                <dl className="goods break">
                    <dd className="goods-img">
                    <img src="/images/goods/13.jpg" alt="メモリアルプレート" />
                    </dd>
                    <dt className="goods-title">メモリアルプレート　縦１５０㎜　横１００㎜</dt>
                    <dd className="goods-2">種類及びカラーバリエーション多数</dd>
                    <dd className="goods-3">¥ 11,000<span>（税込み）</span></dd>
                    <dd className="goods-4">レーザー彫刻（特殊加工）にてオリジナルのメモリアルプレートが制作できます。<br />数種類のデザイン見本もございますが、オリジナル制作も可能です。<br />プレートのカラーも選べて愛犬・愛猫さんのイメージに合ったプレート制作ができます。<br />その他、マイペットさん（犬・猫・うさぎなど）の顔入りストラップなども制作できますので、是非展示サンプルをご覧になって下さい。</dd>
                </dl>
                </section>{/*.goods-rack*/}
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
        "@id":"https://www.aishin2484.jp/goods/#breadcrumblist",
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
            "nextItem":"https://www.aishin2484.jp/goods/#listItem"
          },
          {
            "@type":"ListItem",
            "@id":"https://www.aishin2484.jp/goods/#listItem",
            "position":2,
            "item":{
              "@type":"WebPage",
              "@id":"https://www.aishin2484.jp/goods/",
              "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜商品のご案内",
              "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」の商品のご案内。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
              "url":"https://www.aishin2484.jp/goods/"
            },
            "previousItem":"https://www.aishin2484.jp/#listItem"
          }
        ]
      },
      {
        "@type":"Person",
        "@id":"https://www.aishin2484.jp/goods/#person"
      },
      {
        "@type":"WebPage",
        "@id":"https://www.aishin2484.jp/goods/#webpage",
        "url":"https://www.aishin2484.jp/goods/",
        "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜商品のご案内",
        "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」の商品のご案内。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
        "inLanguage":"ja",
        "isPartOf":{
          "@id":"https://www.aishin2484.jp/goods/#website"
        },
        "breadcrumb":{
          "@id":"https://www.aishin2484.jp/goods/#breadcrumblist"
        },
        "datePublished":"2022-12-19T01:06:53+09:00",
        "dateModified":"2023-01-05T3:00:07+09:00"
      },
      {
        "@type":"WebSite",
        "@id":"https://www.aishin2484.jp/goods/#website",
        "url":"https://www.aishin2484.jp/goods/",
        "name":"埼玉のペット火葬（川越市、所沢市、さいたま市） | 愛心ペットセレモ二ー埼玉｜商品のご案内",
        "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」の商品のご案内。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
        "inLanguage":"ja",
        "publisher":{
          "@id":"https://www.aishin2484.jp/goods/#person"
        }
      }
    ]
  }
  
  export const Head = () => (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  )