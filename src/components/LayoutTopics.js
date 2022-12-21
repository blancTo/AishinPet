import React from 'react'
import PropTypes from "prop-types"

import Sidebar from './Sidebar';
import Footer from './Footer';

const LayoutTopics = ({ children }) => {
  return (
    <>
      <div id="container">
            <section id="submain">
                {children}
            </section>
            <Sidebar />
        </div>
        <Footer />
    </>
  )
}

LayoutTopics.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LayoutTopics
