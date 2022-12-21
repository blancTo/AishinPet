import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <>
        <footer>
          <section id="footer" className="green">
            <div className="wrap float-box">
              <div id="address">
                <p className="sitename color1">愛心ペットセレモニー</p>
                <dl>
                  <dt>霊園本部（火葬場）</dt>
                  <dd>〒356-0053　埼玉県ふじみ野市大井837-23</dd>
                </dl>
                <nav>
                  <ul className="float-box">
                    <li><Link className="hover" href="/company-profile">会社概要</Link></li>
                    <li><Link className="hover" href="/access">アクセスMAP</Link></li>
                  </ul>
                </nav>
                <dl>
                  <dt>さいたま市営業所</dt>
                  <dd>〒338-0002　埼玉県さいたま市中央区大字下落合1010</dd>
                </dl>
                <div id="appearance">
                  <StaticImage src="../images/footer/1.jpg" alt="埼玉県ペット火葬場" />
                </div>
              </div>
              <div id="greeting">
                <p>愛心ペットセレモニー埼玉のホームページをご覧頂きありがとうございます。<br />
                  これもお客様と亡くなられたご家族（ペット）にとって大切なご縁となれば嬉しい限りです。<br />
                  私は、愛犬や愛猫と過ごした日々を合わせ、動物に携わる生活を20年以上続けております。<br />
                  仔犬や仔猫の愛おしさ‥<br />
                  無邪気に遊ぶ可愛らしさ‥<br />
                  病気で辛そうにしている顔‥<br />
                  この20年間、私生活と仕事を通じて沢山の動物たちとふれ合い接してきました。<br />
                  しかし、どんなに大切に日々を過ごしても必ずお別れの日が訪れます。<br />
                  これほど辛い日はないでしょう‥<br />
                  しかし、大切なわが子をしっかりと天国へ送り届けてあげなければなりません。</p>
                <p>「心と心をつなぎ、再会を信じ、そして最後の“お別れ”‥」<br />
                  「旅立つ子も、見送る人も、互いに笑顔で手を振り合ってもらいたい‥」</p>
                <p>いつもこのような考えの下、お手伝いさせていただいております。 そして、飼い主さまの悲しみを共有し、少しでも心の支になってあげる。 これが私の役割、又は役目だと考えております。</p>
              </div>
            </div>
          </section>
          <div id="copy"><p className="wrap">copyright &copy; Aishin Pet Ceremony. All Rights Reserved.</p></div>
        </footer>        
    </>
  )
}

export default Footer
