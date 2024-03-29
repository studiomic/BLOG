import React from 'react';
import * as styles from '../styles/toggle.module.scss'

const Toggle = ({ checked, onChange }) => (
	<span className={styles.toggleControl}>
		<input
			className={styles.dmcheck}
			type="checkbox"
			checked={checked}
			onChange={onChange}
			id="dmcheck"
			name="DarkModeToggle"
		/>
		<label htmlFor="dmcheck" for="DarkModeToggle"><span>ModeToggle</span></label>
	</span>
);

export default Toggle;
