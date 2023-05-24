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
  // const articlesByTag = {} //mine

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





// const posts = result.data.allContentfulBlogPost.edges;
//   const tags = posts.reduce((tags, edge) => {
//     const edgeTags = get(edge, 'node.frontmatter.tags');
//     return edgeTags ? tags.concat(edge.node.frontmatter.tags) : tags;
//   }, []);

//   const tagTemplate = path.resolve(`./src/components/templates/Tags/index.js`);
//   [...new Set(tags)].forEach(tag => {
//     createPage({
//       path: `/tags/${kebabCase(tag)}/`,
//       component: tagTemplate,
//       context: {
//         tag,
//       },
//     });
//   });


// タグに紐付く記事のオブジェクトを作成..mine
// edge.node.metadata.tags.forEach((tag) => {
//   if (tag.contentful_id in articlesByTag) {
//     articlesByTag[tag.contentful_id].contents.push(edge.node)
//   } else {
//     articlesByTag[tag.contentful_id] = {
//       name: tag.name,
//       contents: [edge.node]
//     }
//   }
// })


// タグページの生成
// Object.keys(articlesByTag).forEach((tagId) => {
//   createPage({
//     path: `/tags/${tagId}`,
//     component: path.resolve("./src/templates/tags.js"),
//     context: {
//       name: articlesByTag[tagId].name,
//       contents: articlesByTag[tagId].contents,
//     }
//   })
// })








  // const tags = result.data.allContentfulBlogPost.metadata.nodes;
  // const articlesByTag = result.data.allContentfulBlogPost.nodes.metadata.tags;
  // tags.forEach(tag => {
  //   createPage({
  //     path: `tags/${tag.node.slug}/`,
  //     component: tagTemplate,
  //     context: {
  //       slug: tag.node.slug
  //     },
  //   })
  // })



  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

