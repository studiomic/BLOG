import React from 'react';

const ModeToggle = ({ onMode,onChecked }) => {
	return (
	<span>
		<input
				type="checkbox"
				checked={onChecked}
				onChange={onMode}
				id="switch"
				name="mode"
			/>
		<label htmlFor="modecheck" for="switch"><span>Toggle</span></label>
	</span>
	)
};
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

