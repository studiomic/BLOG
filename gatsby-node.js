const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
            metadata {
              tags {
                contentful_id
                name
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulBlogPost.nodes
  const articlesByTag = {}

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug





      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }

}
//exports.createPages

    // posts.metadata.tags.forEach((tag) => {
    //   if (tag.contentful_id in articlesByTag) {
    //     articlesByTag[tag.contentful_id].contents.push(edge.nodes)
    //   } else {
    //     articlesByTag[tag.contentful_id] = {
    //       name: tag.name,
    //       contents: [edge.nodes]
    //     }
    //   }
    // })

  // Object.keys(articlesByTag).forEach((tagId) => {
  //   createPage({
  //     path: `/tags/${tagId}`,
  //     component: path.resolve("./src/templates/tag-index.js"),
  //     context: {
  //       name: articlesByTag[tagId].name,
  //       contents: articlesByTag[tagId].contents,
  //     }
  //   })
  // })




// filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
