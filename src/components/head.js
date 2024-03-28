import React from 'react'
// import * as styles from '../styles/global.scss'


export const Head = ({ mode }) => {
  const Head = ({mode}) => {
  const prefersColorSchemeDark = matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  return (
    <>
    <body class={mode} />
    </>
  )
}


// export function Head() {



  return (
    <>
      <body class={mode} />
    </>
  )
}
export default Head


// export const Head = ({ data }) => {
//   return (
//     <Seo
//       description={data.site.siteMetadata.description}
//     />
//   )
// }
