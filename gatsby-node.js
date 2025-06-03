const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const notePost = path.resolve('./src/templates/note-post.js')
  
  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
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
  }
}
//exports.createPages
