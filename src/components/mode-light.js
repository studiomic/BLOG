import React from 'react'

const Light = () => {
  const prefersColorSchemeDark = matchMedia(
		'(prefers-color-scheme: dark)'
	).matches;

	if(prefersColorSchemeDark){
		mode = 'darkmode';
		onChecked = 'checked';
	} else {
		mode = 'lightmode';
		onChecked = '';
	}
  return (
		<body class={mode} />
	);
}
export default Light


// export const Head = ({ data }) => {
//   return (
//     <Seo
//       description={data.site.siteMetadata.description}
//     />
//   )
// }
