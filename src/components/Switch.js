import React from 'react'
import { useTheme } from "../hook/useTheme";
import * as styles from '../styles/css/switch.css'


export const Switch = () => {

    const [theme, handleChange] = useTheme('light');

    return (
        <div className="styles.container-switch">
        <span>Change Theme </span>
        <label className="switch">
            <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
            <span className="slider"></span>
        </label>
    </div>
    )
}

export default Switch

