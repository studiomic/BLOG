import React from 'react';
// import Toggle from '../hook/modeif';

const ModeToggle = ({mode,onChecked}) => {
	const prefersColorSchemeDark = matchMedia(
		'(prefers-color-scheme: dark)'
	).matches;

	if(prefersColorSchemeDark){
	// if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){
		const mode = 'darkmode';
		const onChecked = 'checked';

	} else {
		const mode = 'lightmode';
		const onChecked = '';

	}
	// return (
		// 	hello!{mode}
		// 	)


		
}
export default ModeToggle;
	
// window.matchMedia('(prefers-color-scheme: dark)').matches
// const darkMode = useDarkMode(initialState, darkModeConfig);
// applyTheme('lightmode');
// applyTheme('darkmode');//dark mode
