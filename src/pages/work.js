import React from 'react'
import Layout from './../components/layout'
import Intoro from './../components/intoro-work'
import Loop from './../components/workloop'
import * as styles from './../styles/work.module.scss'

export default function work() {
	return (
		<Layout>
			<Intoro />
			<div className={styles.wrapper}>
				<div className={styles.item1}>
					

				</div>
				<div className={styles.item2}></div>
				<div className={styles.item3}>
					<p>Enjoy Grid Design !</p>
				</div>

				<div className={styles.item4}></div>

				<div className={styles.item5}></div>

				<div className={styles.item6}>
					<Loop />

				</div>

				<div className={styles.item7}></div>

				<div className={styles.item8}>
				<h2>Service</h2>
					<p>Webディレクション・コンサルティング</p>
					<p>Webサイト制作・</p>
				</div>

				<div className={styles.item9}>9</div>
			</div>
		</Layout>
	)
}
