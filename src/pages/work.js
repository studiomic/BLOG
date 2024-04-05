import React from 'react'
import Layout from './../components/layout'
import Intoro from './../components/intoro-work'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './../styles/work.module.scss'

export default function work() {
	return (
		<Layout>
			<Intoro />
			<div className={styles.wrapper}>
				<div className={styles.item1}>
					<h2>WORK</h2>
				</div>
				<div className={styles.item2}>2</div>
				<div className={styles.item3}></div>
				<div className={styles.item4}>
					


				</div>
				<div className={styles.item5}></div>
				<div className={styles.item6}>
					<div className={styles.figset}>
						<figure className={styles.workimg}>
							<StaticImage
								src="../asset/workimg/BSC.png"
								alt="Hero-image"
								placeholder="BLURRED"
								quality="100"
							/>
						</figure>
						<figure className={styles.workimg}>
							<StaticImage
								src="../asset/workimg/PTM.png"
								alt="Hero-image"
								placeholder="BLURRED"
								quality="100"
							/>
						</figure>
						<figure className={styles.workimg}>
							<StaticImage
								src="../asset/workimg/tarao1.png"
								alt="Hero-image"
								placeholder="BLURRED"
								quality="100"
							/>
						</figure>
						<figure className={styles.workimg}>
							<StaticImage
								src="../asset/workimg/kyoudo.png"
								alt="Hero-image"
								placeholder="BLURRED"
								quality="100"
							/>
						</figure>
						<figure className={styles.workimg}>
							<StaticImage
								src="../asset/workimg/takehiko.png"
								alt="Hero-image"
								placeholder="BLURRED"
								quality="100"
							/>
						</figure>
					</div>
				</div>

				<div className={styles.item7}>7</div>
				
			</div>




				{/* <div className={styles.item6}>6</div>
				<div className={styles.item7}>7</div>
				<div className={styles.item8}>8</div>
				<div className={styles.item9}>9</div> */}


		</Layout>
	)
}
