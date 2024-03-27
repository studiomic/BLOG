import * as React from "react"
import * as styles from '../styles/components/modetoggleButton.scss'

const ModeToggleButton = () => (
<div class={styles.box}>
<input className={styles.container_toggle} type="checkbox" id="switch" />
        <label for="switch">Toggle</label>
    </div>
);
  


export default ModeToggleButton