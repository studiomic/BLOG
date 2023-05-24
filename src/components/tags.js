import React from 'react'
import * as styles from '../styles/tags.module.scss'
// import { Link } from 'gatsby';
// import kebabCase from 'lodash/kebabCase';

//<Tags tags={post.tags} />

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <small className={styles.tags}>
      {tags.map((tag) => (
        <div key={tag} className={styles.tag}>
            {tag}
        </div>
      ))}
    </small>
  )

export default Tags

// {/* <Link className={styles.link} to={`/tags/${kebabCase(tag)}/`}>
// </Link> */}



