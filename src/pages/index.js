import React from 'react'
import get from 'lodash/get'
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Intoro from '../components/intoro-top'
import ArticlePreview from '../components/article-preview'
import * as styles from '../styles/top-note.module.scss'
import * as hero from '../styles/hero.module.scss'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const notes = get(this, 'props.data.allMarkdownRemark.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')
    return (
      <Layout location={this.props.location}>
        <Intoro />
        <div class="wavetop">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,64L80,85.3C160,107,320,149,480,144C640,139,800,85,960,58.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/></svg>
        </div>
        <section className={styles.container}>
          <article className={styles.article}>
            <h1 className={styles.title}>Notes</h1>
            {notes.map((edge) => (
            <div key={edge.id} className={styles.top}>
              <h2>
                <Link to={`/notes/${edge.node?.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <dl>
                <dt>{edge.node.frontmatter.date}</dt>
                <dd>{edge.node.frontmatter.description}</dd>
              </dl>
            </div>
          ))}
          </article>
        </section>
<div className="mno">
        <section className={hero.solidimage}>
          <div className={hero.hero}>
          <GatsbyImage className={hero.image} alt={author.name} image={author.heroImage.gatsbyImage} />
            <div className={hero.details}>
              <h1 className={hero.title}>BLOG</h1>
            </div>
          </div>
        </section>
        <ArticlePreview posts={posts} />
</div>
      </Layout>
    )
  }
}

export const Head = ({ data }) => {
  return (
    <Seo
      description={data.site.siteMetadata.description}
    />
  )
}
export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
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
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          html
          timeToRead
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            description
            slug
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
        heroImage: image {
          gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
        }
      }
    }
  }
`
 //BLURRED//TRACED_SVG