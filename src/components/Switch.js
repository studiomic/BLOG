import React from 'react'
import { useTheme } from "../hook/useTheme";
import * as styles from '../styles/switch.module.scss'
// import * as styles from '../styles/toggle.module.scss'


export const Switch = () => {

    // const [theme, handleChange] = useTheme('light');

    return (
        <div className={styles.containerSwitch}>
        <span>Change Theme </span>
        <label className={}}styles.switch">
            <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
            <span className="styles.slider"></span>
        </label>
    </div>
    )
}

export default Switch

