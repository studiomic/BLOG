import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout';
import * as styles from '../../styles/note.module.scss'

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.article}>
      <h2>{frontmatter.title}</h2>
      <div>{frontmatter.date}</div>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
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
      }
    }
  }
`;