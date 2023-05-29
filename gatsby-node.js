const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')
  const tagIndex = path.resolve('./src/templates/tags-index.js')
  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
            tags
            metadata {
              tags {
                contentful_id
                name
              }
            }
          }
        }
        allContentfulTag {
          nodes {
            contentful_id
            name
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
  const tags = result.data.allContentfulTag.nodes
  
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
          article: post,
        },
      })
    })
  }
  
  tags.forEach((tag) => {
    createPage({
      path: `tags/${tag.contentful_id}/`,
      component: tagIndex,
      context: {
        slug: tag.contentful_id,
        name: tag.name,
      },
    })
  })

}
//exports.createPages


// const articlesByTag = {}
// const Tags = posts[index].metadata.tags

 // タグページの生成
  // Object.keys(articlesByTag).forEach((tagId) => {
  //   createPage({
  //     path: `/tags/${tagId}`,
  //     component: tagIndex,
  //     context: {
  //       name: articlesByTag[tagId].name,
  //       contents: articlesByTag[tagId].contents,
  //     }
  //   })
  // })

  // result.data.allContentfulBlogPost.nodes.metadata.tags.forEach(edge => {
  //   createPage({
  //   path: `/blog/${edge.node.slug}`,
  //   component: blogPostTemplate,
  //   context: {
  //     title: edge.node.title,
  //   },
  //   })
  // })
  // createPage({
  //   path: `/tags/${tags}/`,
  //   component: blogPost,
  //   context: {
  //     tags,
  //   },
  // })
// filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
// filter: { tags: { elemMatch: { slug: { in: $slug } } } }


    // タグに紐付く記事のオブジェクトを作成
      // Tags.forEach((tag) => {
      //   post.metadata.tags.forEach((tag) => {
      // if (tag.contentful_id in articlesByTag) {
      //   articlesByTag[tag.contentful_id].contents.push(post)
      // } else {
      //   articlesByTag[tag.contentful_id] = {
      //   name: tag.name,
      //   contents: [post]
      //   }		
      // }
      // })
