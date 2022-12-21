import React from 'react'

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const PageTop = (props) => {
  return (
    <>
      <p id="page-top"><AnchorLink offset="0" to={'/' + props.slug + '/#pagetop'} title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>
    </>
  )
}

export default PageTop
