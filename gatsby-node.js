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
            tags
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

{/* <ul>
  {node.category.map(cat => (
    <li className={cat.categorySlug} key={cat.id}>{cat.category}</li>
  ))}
</ul> */}


        // if (posttags.length > 0) {
        //   posttags.forEach(() => {
        //     const tagId = posts.metadata.tags.contentful_id
        //     // const tagVars = posts.metadata.tags.name
        //     createPage({
        //       path: `/tags/${posts.metadata.tags.contentful_id}/`,
        //       component: blogPost,
        //       context: {
        //         slug: tagId,
        //         previousPostSlug,
        //         nextPostSlug,
        //       },
        //     })
        //   })
        // }

        // const posttags = result.data.allContentfulBlogPost.nodes.metadata.tags

        // // const posttags = result.data.allContentfulBlogPost.nodes.metadata.tags
        // posttags.forEach(posttag => {
        //   createPage({
        //     path: `/tags/${posttag.contentful_id}/`,
        //     component: blogPost,
        //     context: {
        //       tag: posttag.name,
        //     },
        //   })
        // })
      
      

