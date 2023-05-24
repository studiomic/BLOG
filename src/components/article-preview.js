import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Container from './container'
import Tags from './tags'
// import Tags from './tags2'
// import Tagsmeta from '../../zhtml/tags-meta'

import * as styles from '../styles/article-preview.module.scss'
// import * as styles from './article-preview.module.css'

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
                <GatsbyImage alt="" image={post.heroImage.gatsbyImage} />
                <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div>
                {post.description?.raw && renderRichText(post.description)}
              </div>
              <div className={styles.meta}>
                <small className="meta">{post.publishDate}</small>
                <Tags tags={post.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview


// {/* <Taglink tags={post.metadata.tags} /> */}

//               {/* {tags.map((post) => {
//                 $num = {post.metadata.tags.name}
//                               if ($num > 0) {}

//               } */}
// {/* <Tagsmeta tags={post.metadata.tags} /> */}

// {/* 
// <br />
// {post.metadata.tags[0].name} */}
