import React from 'react'
import Layout from './../components/layout'
import Intoro from './../components/intoro-work'
// import { StaticImage } from 'gatsby-plugin-image'
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
					<p>2</p>
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
					<p>666</p>

					<div className={styles.markers}>
						{/* <button as="a" href="#carousel_01">Photo.1</button> */}
						
						{/* <button onClick="location.href='#carousel_01'" />
						<label htmlFor="carousel_01" for="carousel_01">Photo.1</label> */}
					</div>

				</div>


				<div className={styles.item7}>
					<p>777</p>


		


				</div>
				<div className={styles.item8}>
					<p>888</p>

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
