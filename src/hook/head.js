import React from 'react'
// import * as styles from '../styles/global.scss'

// class NotesPostTemplate extends React.Component {
	

const Head = ({ mode,onChecked }) => {
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

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
}, [theme])

  return (
		<body class={mode} />
		);
}
export default Head


// export const Head = ({ data }) => {
//   return (
//     <Seo
//       description={data.site.siteMetadata.description}
//     />
//   )
// }