import React from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import get from 'lodash/get'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Container from '../components/container'
import * as styles from '../styles/hero.module.scss'
import * as tagstyles from '../styles/tags.module.scss'

class TagsIndex extends React.Component {
  render() {
    const tags = get(this, 'props.data.allContentfulTag.nodes')
    return (
      <Layout location={this.props.location}>
        {/* <Seo title="Blog" /> */}
        <div className={styles.hero}>
          <StaticImage className={styles.image}
          src="../asset/img/sam-albury-oA7MMRxTVzo-unsplash.jpg"
          alt="Hero-image"
          placeholder="BLURRED"
          quality="40"
          />
          <div className={styles.details}>
            <h1 className={styles.title}>TAGS</h1>
          </div>
        </div>
        <Container>
          <div className="center">
            <small className={tagstyles.center}>
              {tags.map(tag => (
                <div key={tag} className={tagstyles.tag}>
                  <Link to={`/tags/${tag.contentful_id}`}>{tag.name}</Link>
                </div>
              ))}
            </small>
          </div>
        </Container>
      </Layout>
    )
  }
}
export const Head = () => <Seo title="Tags" />

export default TagsIndex




export const pageQuery = graphql`
  query TagsIndexQuery {
    allContentfulTag {
      nodes {
        contentful_id
        name
      }
    }
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "YYYY/MM/DD")
        metadata {
          tags {
            contentful_id
            name
          }
        }
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
      }
    }
  }
`
