const path = require("path")
exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions; 

  return graphql(
    `
    {
      allMicrocmsTopics {
        edges {
          node {
            topicsId
            category {
              slug
            }
          }
        }
      }
    }
  `
  ).then(result => {

    if(result.errors) {
      throw result.errors
    }

    result.data.allMicrocmsTopics.edges.forEach( edge => {

      createPage({
        path:`/topics/${edge.node.category.slug}/${edge.node.topicsId}`,
        component: path.resolve('./src/templates/topics-post.js'),
        context:{
          id:edge.node.topicsId
        },
        defer:false,
      })

    })
    
  })
}

