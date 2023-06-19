import React from 'react';

const Toggle = ({ checked, onChange }) => (
	<span className="toggle-control">
		<input
			className="dmcheck"
			type="checkbox"
			checked={checked}
			onChange={onChange}
			id="dmcheck"
			name="DarkModeToggle"
		/>
		<label htmlFor="dmcheck" for="DarkModeToggle"></label>
	</span>
);

export default Toggle;
