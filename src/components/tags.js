import React from 'react'
import * as tagstyles from '../styles/tags.module.scss'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
  <small className={tagstyles.tags}>
    {tags.map(tag => (
      <div key={tag} className={tagstyles.tag}>
        {tag}
      </div>
    ))}
  </small>
  )
export default Tags

// {/* <Link className={styles.link} to={`/tags/${kebabCase(tag)}/`}>
// </Link> */}



