import React from 'react'
import Layout from './../components/layout'
import Intoro from './../components/intoro-work'
import { StaticImage } from 'gatsby-plugin-image'
// import { Link } from 'gatsby'
import * as styles from './../styles/work.module.scss'

export default function work() {
	return (
		<Layout>
			<Intoro />
			<div className={styles.wrapper}>
				<div className={styles.item1}>
					<h2>WORK</h2>
					<p>1</p>
				</div>
				<div className={styles.item2}>
					
				</div>
				<div className={styles.item3}>
					<p>33333</p>
				</div>
				<div className={styles.item4}>
					<p>4444</p>
					


				</div>
				<div className={styles.item5}>
					<p>555</p>
				</div>

				<div className={styles.item6}>
				<div className={styles.figset} data-component="carousel">
					
						<figure className={styles.workimg} id='carousel_01'>
							<StaticImage
								src="../asset/workimg/BSC.png"
								alt="Hero-image"
								placeholder="BLURRED"
								quality="100"
							/>
						</figure>
						<figure className={styles.workimg} id='carousel_02'>
							<StaticImage
								src="../asset/workimg/PTM.png"
								alt="Hero-image"
								placeholder="BLURRED"
								quality="100"
							/>
						</figure>
						<figure className={styles.workimg} id='carousel_03'>
							<StaticImage
								src="../asset/workimg/tarao1.png"
								alt="Hero-image"
								placeholder="BLURRED"
								quality="100"
							/>
						</figure>
						<figure className={styles.workimg} id='carousel_04'>
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


				<div className={styles.item7}>
					<p>777</p>


		


				</div>
				<div className={styles.item8}>
					

					<p>item888</p>

				</div>

				<div className={styles.item9}>
					<p>999</p>

				</div>
				<div className={styles.item10}>
				<p>101010</p>
				</div>
				
			</div>
		</Layout>
	)
}
