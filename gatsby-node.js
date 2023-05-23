const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')
  // const tagTemplate = path.resolve('./src/templates/tags.js')

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
            tags
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

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

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
  // Extract tag data from query
  // const tags = result.allContentfulBlogPost.nodes.tags

  // Make tag pages
  // tags.forEach(tag => {
  //   createPage({
  //     path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
  //     component: tagTemplate,
  //     context: {
  //       tag: tag.fieldValue,
  //     },
  //   })
  // })
  const tags= await graphql(`
  query {
    allContentfulBlogPost {
      edges {
        node {
          tags
        }
      }
    }
  }
`)

tags.data.allContentfulBlogPost.edges.forEach(edge=> {
  let slugifiedTag= edges.node.tag.toLowerCase().replace("/^\s+$/g", "-");

    createPage({
      path: `/tag/${slugifiedTag}`,
      component: path.resolve('./src/templates/tags.js'), // tagComponent
      context: {
        slug: edge.node.slug,
        tagName: edges.node.tag
      },
    })
  })


}



