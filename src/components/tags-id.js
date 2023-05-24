import React from 'react'
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import * as styles from '../styles/tags.module.scss'

// const Tags = ({ tag }) => (
//   <Link className={styles.link} to={`/tags/${kebabCase(tag)}/`}>
//     <li className={styles.tag}>{tag}</li>
//   </Link>
// );


const animals = post.metadata.tags;

const Example = () => {
  const list = animals.map((animal) => <li key={animal}>{animal}</li>);
  return (
    <>
      <h3>配列</h3>
      <ul>{list}</ul>
    </>
  );
};

export default Example;


  // const IDTags = ({ tags }) =>
  //   tags?.length > 0 && (
  //     {tags.map((tag) => (
  //       <div key={tag} className={styles.tag}>
  //       <Link className={styles.link} to={`/tags/{tag.contentful_id}/`}>
  //       {tag.name}
  //     </Link>
  //       </div>
  //     ))}
  //   )


    // if (tag.contentful_id in articlesByTag) {
    //   articlesByTag[tag.contentful_id].contents.push(edge.node)
    // } else {
    //   articlesByTag[tag.contentful_id] = {
    //     name: tag.name,
    //     contents: [edge.node]
    //   }
    // }
    




// const IDTags = ({ tags }) =>
//   tags?.length > 0 && (
//     <small className={styles.tags}>
//       {tags.map((tag) => (
//         <div key={tag} className={styles.tag}>
//           {tag}
//         </div>
//       ))}
//     </small>
//   )

// export default Tags
