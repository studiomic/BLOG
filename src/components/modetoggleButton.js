import * as React from "react"
import * as styles from '../styles/components/modetoggleButton.scss'

const ModeToggleButton = () => (
  <div className="box">
    <input className={styles.toggle} type="checkbox" id="switch" name="mode" />
    <label htmlFor="modecheck" for="switch"><span>Toggle</span></label>
  </div>
);
  


export default ModeToggleButton


{/* <div className="container-switch">
  <span>Change Theme </span>
  <label className="switch">
    <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
    <span className="slider"></span>
  </label>
</div> */}