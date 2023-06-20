import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Container from './container'
import * as styles from '../styles/article-preview.module.scss'
import * as tagstyles from '../styles/tags.module.scss'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className={styles.link}>
                <GatsbyImage alt="" image={post.heroImage?.gatsbyImage} />
                <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div>
                {post.description?.raw && renderRichText(post.description)}
              </div>
              <div className={styles.meta}>
                <small>{post.publishDate}</small>
                <small className={tagstyles.tags}>
                  {post.metadata?.tags.map(tag => {
                    return (
                      <div key={tag.contentful_id} className={tagstyles.tag}>
                        {tag.name}
                      </div>
                    )
                  })}
                </small>
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
