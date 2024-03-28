import React from 'react';

const IFmodeToggle = ({ checked, onChange }) => (
	<span>
		<input
			type="checkbox"
			checked={checked}
			onChange={onChange}
			name="DarkModeToggle"
		/>
		<label htmlFor="dmcheck" for="DarkModeToggle"><span>ModeToggle</span></label>
	</span>
);

export default IFmodeToggle;
