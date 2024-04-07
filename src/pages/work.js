import React from 'react'
import Layout from './../components/layout'
import Intoro from './../components/intoro-work'
import Loop from './../components/workloop'

// import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './../styles/work.module.scss'
// import { Link } from 'gatsby'
// import IMG from "../asset/workimg/BSC.png"

export default function work() {
	return (
		<Layout>
			<Intoro />
			<div className={styles.wrapper}>
				<div className={styles.item1}>
					<Loop />
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
					<p>6</p>
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
			</div>
		</Layout>
	)
}
