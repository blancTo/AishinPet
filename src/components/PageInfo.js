import React from 'react'
import BreadCrumb from './BreadCrumb'
import PageTitle from './PageTitle'
const PageInfo = (props) => {
  return (
    <>
      <section id="page-info" className={props.slug}>
        <BreadCrumb
        title={props.title}
        slug={props.slug}
        />
        <PageTitle
        title={props.title}
        slug={props.slug}
        />
      </section>
    </>
  )
}

export default PageInfo
