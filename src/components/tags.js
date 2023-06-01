import React from 'react'
import * as tagstyles from '../styles/tags.module.scss'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    // const Tagsdata = tags. 


  <small className={tagstyles.tags}>
    {tags.map(tag => (
      <div key={tag.contentful_id} className={tagstyles.tag}>
        {tag.name}
      </div>
    ))}
  </small>
  )
export default Tags



// {/* <Link className={styles.link} to={`/tags/${kebabCase(tag)}/`}>
// </Link> */}<Tags tags={post.metadata.tags} />
// </Link> */}<Tags tags={post.metadata} />

// </Link> */}<Tags tags={post.metadata} />


