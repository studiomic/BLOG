import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout';
import * as styles from '../../styles/note.module.scss'

// import '../../styles/css/dracula-prism-old.css'
// import 'prismjs/themes/prism-tomorrow.css';
// import 'prismjs/themes/prism-tomorrow.css';
import '../../styles/css/dracula-prism.css'
import '../../styles/css/init.css'


// import Prism from "prism";
// import "css/dracula-prism.css";


// import 'prismjs/themes/prism-tomorrow.css';
// import 'prismjs/themes/dracula-prism-old.css';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';


export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.article}>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div className={styles.postBody} dangerouslySetInnerHTML={{ __html: html }} />
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