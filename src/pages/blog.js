import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import get from 'lodash/get'
import Seo from '../components/seo'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import * as styles from '../styles/hero.module.scss'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    return (
      <Layout location={this.props.location}>
        <div className={styles.hero}>
          <StaticImage className={styles.image}
          src="../asset/img/mitchell-unsplash.webp"
          alt="Hero-image"
          placeholder="BLURRED"
          quality="100"
          />
          <div className={styles.details}>
            <h1 className={styles.title}>BLOG</h1>
            <div className={styles.content}>
              My Domestic Days Stories. 韓国ドラマ好き。
            </div>
          </div>
        </div>
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}
export const Head = () => <Seo title="Blog" />
export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
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
