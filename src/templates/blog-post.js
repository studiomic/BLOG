import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import readingTime from 'reading-time'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/hero'
import * as styles from '../styles/blog-post.module.scss'
import * as tagstyles from '../styles/tags.module.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    // const plainTextDescription = documentToPlainTextString(
    //   JSON.parse(post.description.raw)
    // )
    const plainTextBody = documentToPlainTextString(JSON.parse(post.body.raw))
    const { minutes: timeToRead } = readingTime(plainTextBody)
    
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImage, description } = node.data.target
        return (
          <GatsbyImage
              image={getImage(gatsbyImage)}
              alt={description}
            />
          )
        },
        [BLOCKS.PARAGRAPH]: (node, children) => {
          if (
            node.content.length === 1 &&
            node.content[0].marks.find((x) => x.type === "code")
          ) {
            return <div>{children}</div>;
          }
          return <p>{children}</p>;
        },
      },
      renderMark: {
        [MARKS.CODE]: text => (
          <SyntaxHighlighter language="jsx" style={dracula} showLineNumbers>
            {text}
          </SyntaxHighlighter>
        ),
      },
    };

    return (
      <Layout location={this.props.location}>
        <Hero
          image={post.heroImage?.gatsbyImage}
          title={post.title}
          content={post.description}
        />
        <div className={styles.container}>
          <span className={styles.meta}>
            <time dateTime={post.rawDate}>{post.publishDate}</time> –{' '}
            {timeToRead} minute read
          </span>
          <div className={styles.article}>
            <article>
              {post.body?.raw && renderRichText(post.body, options)}
            </article>
            <hr />
            <small className={tagstyles.tags}>
            {post.metadata.tags.map(tag => (
                <div key={tag} className={tagstyles.tag}>
                  <Link to={`/tags/${tag.contentful_id}`}>{tag.name}</Link>
                </div>
              ))}
            </small>

            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/blog/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/blog/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}
export default BlogPostTemplate

export const Head = ({ data: { contentfulBlogPost: post } }) => {
  const plainTextDescription = documentToPlainTextString(
    JSON.parse(post.description.raw)
  )

  return (
    <Seo
      title={post.title}
      description={plainTextDescription}
      image={`http:${post.heroImage?.resize.src}`}
      // description={post.description || post.excerpt}
    />
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      author {
        name
      }
      publishDate(formatString: "YYYY/MM/DD")
      rawDate: publishDate
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        raw
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
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`



//<Seo
//  title={post.title}
//  description={plainTextDescription}
//  image={`http:${post.heroImage.resize.src}`}
///>
// import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import Tags from '../components/tags'

