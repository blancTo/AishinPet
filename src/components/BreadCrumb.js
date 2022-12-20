import React from 'react'

const BreadCrumb = (props) => {    
    const siteurl = "https://www.aishin2484.jp/";
  return (
    <>
        <div id="breadcrumb">
            <ul itemscope itemtype="https://schema.org/BreadcrumbList">
                <li className='breadcrumb__item' itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <a href={siteurl} itemprop="item">
                        <span itemprop="name">ホーム</span>
                    </a>
                    <meta itemprop="position" content="1" />
                </li>                    
                <li>
                    <a href={ siteurl + props.slug + '/'} itemprop="item">
                        <span>{props.title}</span>
                    </a>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
    </>
  )
}

export default BreadCrumb
