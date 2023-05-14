import React from 'react'
// import { GatsbyImage } from 'gatsby-plugin-image'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from '../styles/hero.module.scss'
// import * as styles from './hero.module.css'
// import IMG from "../asset/img/ayumi-kubo-kWgLvl1eDUc-unsplash.jpg"
import IMG from "../asset/img/robynne-hu-HOrhCnQsxnQ-unsplash.jpg"
// import IMG from "../asset/img/logo-wt.png"

{/* <img src={IMG} alt="" /> */}

// const filename = '../asset/img/robynne-hu-HOrhCnQsxnQ-unsplash.jpg';

// import Image from '上記で作成したコンポーネントのパス'

// export default ({ filename }) => {
//   const filename = 'filepath/to/myimage.png'
//   return <Image filename={filename} />
// })



const HeroType = ({ image }) => (
<div className={styles.hero}>

{/* <GatsbyImage className={styles.image} alt={title} image={image} /> */}
<StaticImage className={styles.image} src="image" />
        

    <div className={styles.details}>
      <h1 className={styles.title}>BLOG</h1>
        
        <div className={styles.content}>
          HERO-TYPE
        </div>
    
    
    </div>
  </div>

)

export default HeroType
