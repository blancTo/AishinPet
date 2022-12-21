import React from 'react'
import { graphql } from "gatsby"

const notice = ({data}) => {
  return (
    <>
    
      <div>{data.microcmsNotice.txt}</div>
     
    </>
  )
}

export default notice

export const query = graphql`
query ($id: String) {  
    microcmsNotice(noticeId: {eq: $id}) {
      txt
    }
  }
`