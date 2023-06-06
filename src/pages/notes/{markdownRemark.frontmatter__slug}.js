import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout';
import * as styles from '../../styles/note.module.scss'
import '../../styles/css/dracula-prism.css'
import '../../styles/css/init.css'

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.article}>
          <header>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>{frontmatter.description}</p>
          </header>
          <article className={styles.postBody} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        title
        slug
        description
      }
    }
  }
`;