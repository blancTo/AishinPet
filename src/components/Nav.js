import React from 'react'
import { Link } from "gatsby"

const Nav = () => {
  return (
    <>
      
      <section id="navi">      
            
            <nav>
              <p id="sp-menu" className="sp"><label className="open" for="pop-up"><img src="/images/nav/menu.png" width={100} alt="メニュー開閉ボタン" /></label></p>
              <input type="checkbox" id="pop-up" />
              <div className="overlay">
              <div class="window">
              <ul className="float-box">
                <li><Link className="hover" href="/price-guide">
                    <span><img src="/images/nav/1.png" alt="埼玉のペット葬儀・火葬「愛心ペットセレモニー」の料金のご案内" /></span>料金のご案内</Link>
                </li>
                <li><Link className="hover" href="/flow-funeral">
                    <span><img src="/images/nav/22.png" alt="埼玉のペット葬儀・火葬「愛心ペットセレモニー」の葬儀の流れ" /></span>葬儀の流れ</Link>
                </li>
                <li><Link className="hover" href="/guidance-business">
                    <span><img src="/images/nav/3.png" alt="埼玉のペット葬儀・火葬「愛心ペットセレモニー」の業務のご案内" /></span>業務のご案内</Link>
                </li>
                <li><Link className="hover" href="/service-area">
                    <span><img src="/images/nav/4.png" alt="埼玉のペット葬儀・火葬「愛心ペットセレモニー」のサービスエリア" /></span>サービスエリア</Link>
                </li>
                <li><Link className="hover" href="/goods">
                    <span><img src="/images/nav/7.png" alt="埼玉のペット葬儀・火葬「愛心ペットセレモニー」の商品のご案内" /></span>商品のご案内</Link>
                </li>
                <li><Link className="hover" href="/faq">
                    <span><img src="/images/nav/6.png" alt="よくあるご質問" /></span>よくあるご質問</Link>
                </li>
                <li><Link className="hover" href="/access">
                    <span><img src="/images/nav/55.png" alt="埼玉のペット葬儀・火葬「愛心ペットセレモニー」のアクセス情報" /></span>アクセス</Link>
                </li>
                <li className="sp" id="close">
                    <img src="/images/nav/0.png" width={30} alt="メニュー開閉ボタン" /><label className="close" for="pop-up">閉じる</label>
                </li>                
              </ul>
              
              </div>
              </div>
            </nav>
            
      </section>

    </>
  )
}

export default Nav
