import React from 'react'
import { Link,graphql } from 'gatsby'

import LayoutTopics from '../../../components/LayoutTopics'
import Seo from '../../../components/Seo';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import BreadCrumbCat from '../../../components/BreadCrumb';
import PageTitle from '../../../components/PageTitle';

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const pagemeta = {
    subTitle:`ブログ`,
    slug:`blog`
}

const blog = ({data}) => {
  return (
    <>
        <Header />

        <Nav />

        {data.allMicrocmsTopics.edges.map(({ node }) => (
          <p id="page-top">
            <AnchorLink offset="0" to={'/topics/' + node.category.slug + '/#pagetop'} title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink>
          </p>
        ))}

            <section id="page-info" className="topics">
              <BreadCrumbCat
              title={pagemeta.subTitle}
              slug="news"
              />
              <PageTitle
              title={pagemeta.subTitle}
              slug={pagemeta.slug}
              />
            </section>
        <LayoutTopics>
            <Seo
            title={pagemeta.subTitle}
            description="ブログの記事一覧ページです"
            />
            <section id="main">
              <h1 id="display-item">{pagemeta.subTitle}の記事一覧</h1>
            
                {data.allMicrocmsTopics.edges.map(({ node }) => (
                    <article class="list">
                        <p class="date">
                            <span className='cat_list'>{node.category.name}</span>
                            <span class="blobdate">{node.date}</span>
                        </p>
                        <div class="rack">
                            <h1 class="arrange">
                                <a href={'/topics/' + node.topicsId}>{node.title}</a>
                            </h1>
                            <p class="preface">
                                <a href={'/topics/' + node.topicsId}>
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

export default blog

export const query = graphql`
query {
    allMicrocmsTopics(filter: {category: {slug: {eq: "blog"}}}, limit: 20) {
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