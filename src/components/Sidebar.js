import React from 'react'

const Sidebar = () => {
  return (
    <>
      <aside id="side">
        <ul>
          <li><a className="hover" href="/price-guide">
              <img src="/images/side/2.png" alt="料金のご案内" /></a></li>
          <li><a className="hover" href="/faq">
              <img src="/images/side/3.png" alt="よくある質問" /></a></li>
          <li><a className="hover" href="/goods">
              <img src="/images/side/4.jpg" alt="ペットとの思い出を形にする、メモリアルグッズのご紹介" /></a></li>
          <li><a className="hover" href="http://ptns.jp/jewelry/index.html" target="_blank" rel="noopener noreferrer">
              <img src="/images/side/6.jpg" alt="ペットの遺骨を永遠の形見としてお持ちいただくオンリーワンジュエリー" /></a></li>
          <li><a className="hover" href="https://www.nijinohashi-yuubinkan.com/" target="_blank" rel="noopener noreferrer">
              <img src="/images/side/7.jpg" alt="大好きなあの子とお手紙交換「虹の橋ゆうびん館」" /></a></li>
          <li><a className="hover" href="/dryice">
              <img src="/images/side/8.jpg" alt="ドライアイス店のご紹介" /></a></li>
          <li><a className="hover" href="/topics">
              <img src="/images/side/5.png" alt="トピックス" /></a></li>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
