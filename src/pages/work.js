import React from 'react'
import Layout from '../components/layout'
import Intoro from '../components/intoro-work'

// import styles from '../styles/work.module.scss'
import * as styles from '../styles/work.module.scss'
import IMG from "../asset/img/Flow.png"

// import SNS from "../asset/svg/iconmonstr-instagram-11.svg"
// import Seo from '../components/seo'

export default function about() {
	return (
		<Layout>
			{/* <Intoro /> */}
			<div className={styles.wrapper}>
				<div className={styles.item1}>
					WORK.1
				</div>
				<div className={styles.item2}>2</div>
				<div className={styles.item3}></div>
				<div className={styles.item4}>
					

				{/* <img src={IMG} alt="" width={100} /> */}

				</div>
				<div className={styles.item5}></div>
				<div className={styles.item6}>6</div>
				<div className={styles.item7}>7</div>
				
			</div>



				{/* <div className={styles.item6}>6</div>
				<div className={styles.item7}>7</div>
				<div className={styles.item8}>8</div>
				<div className={styles.item9}>9</div> */}











			<article className={styles.article}>
				<section className={styles.about}>
					
					<hr />
					
					
				</section>
				
				
			</article>
		</Layout>
	)
}
export const Head = ({ mode }) => {





	
  return (
    <>
    <body class={mode} />
    </>
  )
}
