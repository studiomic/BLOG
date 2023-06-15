const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Define a template for Blog Post Tag, Notes
  const blogPost = path.resolve('./src/templates/blog-post.js')
  const tagIndex = path.resolve('./src/templates/tags-index.js')
  const notePost = path.resolve('./src/templates/note-post.js')
  
  const result = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              id
              html
              frontmatter {
                title
                description
                date
                slug
              }
            }
          }
        }

        allContentfulBlogPost(sort: { publishDate: DESC }) {
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

  const notes = result.data.allMarkdownRemark.edges
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
      path: `/tags/${tag.contentful_id}/`,
      component: tagIndex,
      context: {
        slug: tag.contentful_id,
        name: tag.name,
      },
    })
  })

  notes.forEach((note) => {
    createPage({
      path: `/notes/${note.node.frontmatter.slug}/`,
      component: notePost,
      context: {
        slug: note.node.frontmatter.slug,
        id: note.node.id,
      },
    })
  })
}
//exports.createPages