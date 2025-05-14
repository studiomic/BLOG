import React from 'react'
import Layout from './../components/layout'
import * as styles from '../styles/pages/index.module.scss'

// import Intoro from './../components/intoro-work'
// import Loop from './../components/workloop'
// import * as styles from './../styles/work.module.scss'

export default function work() {
	return (
		<Layout>
				<section className={styles.container}>
					<div className={styles.layoutGrid}>
						<div className={styles.headers}>
							<header>
								<h1>Design Deeply</h1>
								<h2>Web designer.</h2>
								<p>Development 26th</p>
								<h3>Sakura Iizuka</h3>
								<p>スタジオミック</p>
								<h4>StudioMic</h4>
							</header>
						</div>
						<div className={styles.rowline1}></div>
						<div className={styles.rowline2}></div>
						<div className={styles.rowline3}></div>

						<div className={styles.free5}>5</div>
						<div className={styles.grid}>6</div>
						<div className={styles.grid}>7</div>
						<div className={styles.grid}>8</div>

						
						
			</div>



					
					
					<article className={styles.wrapper}>
						

					</article>
				</section>




			{/* <Intoro /> */}
			{/* <div className={styles.wrapper}>
				<div className={styles.item1}>
					

				</div>
				
			</div> */}
		</Layout>
	)
}
