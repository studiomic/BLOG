import React from 'react'

const mode = () => {
	const theme =() =>  {
    // Gatsbyのbuildエラー対策
    if (typeof window !== undefined) {
      document.documentElement.classList.toggle("dark")
    }
  }
  return (
		<body class={mode} />
	);
}
export default mode


// export const Head = ({ data }) => {
//   return (
//     <Seo
//       description={data.site.siteMetadata.description}
//     />
//   )
// }
