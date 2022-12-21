import React from 'react'
import { Link,graphql } from 'gatsby'
import LayoutTopics from '../../components/LayoutTopics';
import Seo from '../../components/Seo';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import BreadCrumb from '../../components/BreadCrumb';
import PageTitle from '../../components/PageTitle';
import PageTop from '../../components/PageTop';

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const pagemeta = {
    subTitle:`トピックス`,
    slug:`topics`
}

const topics = ({ data }) => {
  return (
    <>
        <Header />

        <Nav />

        <p id="page-top">
          <AnchorLink offset="0" to={'/topics/#pagetop'} title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink>
        </p>

        <section id="page-info" className="topics">
          <BreadCrumb
          title={pagemeta.subTitle}
          slug="404"
          />
          <PageTitle
          title={pagemeta.subTitle}
          slug={pagemeta.slug}
          />
        </section>

        <LayoutTopics>
            <Seo
            title={pagemeta.subTitle}
            description="トピックスの最近の記事一覧"
            />
            <section id="main">
              <h1 id="display-item">{pagemeta.subTitle}の記事一覧</h1>
            
                {data.allMicrocmsTopics.edges.map(({ node }) => (
                  <article class="list">
                    <p class="date">
                        <Link to={node.category.slug}>{node.category.name}</Link>
                        <span class="blobdate">{node.date}</span>
                    </p>
                    <div class="rack">
                      <h1 class="arrange">
                          <a href={'/topics/' + node.category.slug + '/' + node.topicsId}>{node.title}</a>
                      </h1>
                      <p class="preface">
                          <a href={'/topics/' + node.category.slug + '/' + node.topicsId}>
                            {node.excerpt}
                          </a>
                      </p>
                    </div>
                  </article>
                ))}
            </section>
        </LayoutTopics>
    </>
  )
}

export default topics

export const query = graphql`
query {
  allMicrocmsTopics(limit: 30) {
    edges {
      node {
        title
        topicsId
        slug
        date(formatString: "YYYY年MM月DD日")
        category {
          slug
          name
          id
        }
        excerpt
        body
      }
    }
  }
}
`
