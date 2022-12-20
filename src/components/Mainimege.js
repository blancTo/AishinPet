import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const Mainimege = () => {
  return (
    <>
        <div id="top-bg">
            <section id="first-image" className="wrap">
                <div id="site-catch" className="wrap">
                    <div className="site-h1">
                        <h1 className="h1">ペット火葬・葬儀のことなら<br />愛心ペットセレモニー埼玉へ</h1>
                        <p>私たちにできるお仕事、それは心のこもった供養で<br />愛するペットを天国へと送り届けてあげること。</p>
                    </div>
                    <div className="site-image">
                        <StaticImage src="../images/top/topsp.jpg" alt="" />
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Mainimege
