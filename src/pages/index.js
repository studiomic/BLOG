import React from 'react'
import { graphql, Link } from 'gatsby';
import get from 'lodash/get'
import Layout from '../components/layout'
import Intoro from '../components/intoro-top'
import * as styles from '../styles/top-note.module.scss'
import ArticlePreview from '../components/article-preview'

// import Container from '../components/container'
// import * as styles from '../styles/intoro-top.module.scss'
// import { StaticImage } from 'gatsby-plugin-image'
// import Hero from '../components/hero'
// import HeroType from '../components/hero-type'
// import Intoro from '../components/intoro'
// import NoteIndex from '../components/note-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    // const [author] = get(this, 'props.data.allContentfulPerson.nodes')
    const notes = get(this, 'props.data.allMarkdownRemark.nodes')

    return (
      <Layout location={this.props.location}>
        <Intoro />
        <div class="wavetop">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,64L80,85.3C160,107,320,149,480,144C640,139,800,85,960,58.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/></svg>
        </div>

        <section className={styles.container}>
          <article className={styles.article}>
            <h1 className={styles.title}>Notes</h1>
            {notes.map((note) => (
            <div key={note.id}  className={styles.top}>
              <h2>
                <Link to={`/notes/${note.frontmatter.slug}`}>
                  {note.frontmatter.title}
                </Link>
              </h2>
              <dl>
                <dt>{note.frontmatter.date}</dt>
                <dd>{note.frontmatter.description}</dd>
              </dl>
            </div>
          ))}
          </article>
        </section>
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "YYYY/MM/DD")
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
        metadata {
          tags {
            contentful_id
            name
          }
        }
      }
    }
    # allContentfulPerson(
    #   filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    # ) {
    #   nodes {
    #     name
    #     shortBio {
    #       raw
    #     }
    #     title
    #     heroImage: image {
    #       gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
    #     }
    #   }
    # }
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        description
        title
        slug
        book
      }
    }
  }

    
  }
`

// // <Hero
//   image={author.heroImage.gatsbyImage}
//   title={author.name}
//   content={author.shortBio}
// />
//<Container>
//  <h2 className={styles.solotitle}>Blog Posts</h2>
//</Container>