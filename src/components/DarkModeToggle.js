import React from 'react';
// import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';
// import * as mode from '../styles/darkmord.module.scss'

import IMG from "../asset/svg/iconmonstr-weather-2.svg"
import IMG2 from "../asset/svg/moon-solid.svg"
// import IMG3 from "../asset/svg/iconmonstr-star-filled.svg"

const DarkModeToggle = () => {
	const darkMode = useDarkMode(false);

	return (
		<div className="dark-mode-toggle">
			<button type="button" onClick={darkMode.disable}>
				<span><img src={IMG} alt="" />Light</span>
			</button>
			<button type="button" onClick={darkMode.enable}>
				<span><img src={IMG2} alt="" />Dark</span>
			</button>
		</div>
	);
};

export default DarkModeToggle;

// {/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}