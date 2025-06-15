const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNode, createNodeField } = actions
    if (node && node.internal && node.internal.type === 'MarkdownRemark') {
    const parent = getNode(node.parent)

    // CONFIG:`gatsby-source-filesystem`,options:name / sourceInstanceName
    // createNodeField({
    //   node,
    //   name: `collection`,
    //   value: parent.sourceInstanceName,
    // })
    createNodeField({
      node,
      name: `base`,
      value: parent.base,
    })
  }
}
// exports.onCreateNode

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const notePost = path.resolve('./src/templates/note-post.js')
  const noteList = path.resolve('./src/templates/index.js')
  
  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: {frontmatter: {date: DESC}}
        filter: {fileAbsolutePath: {regex: "/src/pages/notes/"}}
        ) {
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
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Posts`,
      result.errors
    )
    return
  }

  const notes = result.data.allMarkdownRemark.edges

  if (notes.length > 0) {
    notes.forEach((note, index) => {
      const previousNotetSlug = index === 0 ? null : notes[index - 1].node.frontmatter.slug
      const previousNotetTitle = index === 0 ? null : notes[index - 1].node.frontmatter.title
      const nextNoteSlug = index === notes.length - 1 ? null : notes[index + 1].node.frontmatter.slug
      const nextNoteTitle = index === notes.length - 1 ? null : notes[index + 1].node.frontmatter.title

      createPage({
        path: `/notes/${note.node.frontmatter.slug}/`,
        component: notePost,
        context: {
          slug: note.node.frontmatter.slug,
          previous:previousNotetSlug,
          next:nextNoteSlug,
          previousTitle:previousNotetTitle,
          nextTitle:nextNoteTitle,
          id: note.node.id,
        },
      })
    })
  
    const notePerPage = 10

    if (notes.length > notePerPage) {
      const numPages = Math.ceil(notes.length / notePerPage)
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/` : `/${i + 1}`,
          component: noteList,
          context: {
            limit: notePerPage,
            skip: i * notePerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })
    }
  }
}
//exports.createPages
