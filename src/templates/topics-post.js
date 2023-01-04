import * as React from "react"
import { Link,graphql } from "gatsby"

import Seo from "../components/Seo"

import Header from "../components/Header"
import Nav from "../components/Nav"
import Layout from "../components/Layout"
import PageTitle from '../components/PageTitle';

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const siteurl = "https://www.aishin2484.jp";

const TopicsPost = ({data}) => {
  return (
    <>
    <Seo title={data.microcmsTopics.title} />
        <Header />
        <Nav />
        <p id="page-top"><AnchorLink offset="0" to={'/topics/' + data.microcmsTopics.category.slug + '/' + data.microcmsTopics.topicsId + '/#pagetop'} title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <section id="page-info" className="topics">
        <div id="breadcrumb">
            <ul itemscope itemtype="https://schema.org/BreadcrumbList">
                <li className='breadcrumb__item' itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <a href={siteurl} itemprop="item">
                        <span itemprop="name">ホーム</span>
                    </a>
                    <meta itemprop="position" content="1" />
                </li>                    
                <li>
                    <a href={ siteurl + '/topics/'} itemprop="item">
                        <span>トピックス</span>
                    </a>
                    <meta itemprop="position" content="2" />
                </li>
                <li>
                <a href={ siteurl + '/topics/' + data.microcmsTopics.category.slug + '/'} itemprop="item">
                        <span>{data.microcmsTopics.category.name}</span>
                    </a>
                    <meta itemprop="position" content="3" />
                </li>
                <li>
                <a href={ siteurl + '/topics/' + data.microcmsTopics.category.slug + '/' + data.microcmsTopics.topicsId } itemprop="item">
                        <span>{data.microcmsTopics.title}</span>
                    </a>
                    <meta itemprop="position" content="4" />
                </li>
            </ul>
        </div>
          <PageTitle
          title={data.microcmsTopics.category.name}
          slug={data.microcmsTopics.category.slug}
          />
        </section>
        <Layout>
            

            <section id="main">
                <h1 id="display-item2">
                    <span className="date">{data.microcmsTopics.date}</span>
                    {data.microcmsTopics.title}
                </h1>
                
                <div id="book">
                  <div id="book-inside">
                    <div id="book-wrap">
                      <div
                      dangerouslySetInnerHTML={{
                        __html: `${data.microcmsTopics.body}`,
                      }}
                      />
                    </div>
                  </div>
                </div>
                <p className="center"><Link to={'/topics/' + data.microcmsTopics.category.slug + "/"} className="bt01">一覧へ戻る</Link></p>
            </section>
        
        </Layout>
    </>
  )
}

export default TopicsPost

export const query = graphql`
query ($id: String) {
    microcmsTopics(topicsId: {eq: $id}) {
      topicsId
      title
      date(formatString: "YYYY年MM月DD日")
      slug
      body
      category {
        name
        slug
        id
      }
    }
  }
`