import React from 'react';
// import Toggle from '../hook/modeif';

const ModeToggle = ({mode,onChecked}) => {
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
		<>
		<input type="checkbox" id="switch" name="mode" checked={onChecked} onChange={mode} />
    <label htmlFor="modecheck" for="switch"><span>Toggle</span></label>
		</>
	)
}
export default ModeToggle;









// if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){
// window.matchMedia('(prefers-color-scheme: dark)').matches
// const darkMode = useDarkMode(initialState, darkModeConfig);
// applyTheme('lightmode');
// applyTheme('darkmode');//dark mode

// {/* <button
// 	title="Toggle Theme"
// 	onClick={mode}
// 	className={onChecked}
// ></button>
// <label htmlFor="btn">{mode}</label>
// <p>{mode}</p>
//  */}

