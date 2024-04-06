import React from 'react'
import Layout from './../components/layout'
import Intoro from './../components/intoro-work'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './../styles/work.module.scss'
// import { Link } from 'gatsby'
// import IMG from "../asset/workimg/BSC.png"

export default function work() {
	return (
		<Layout>
			<Intoro />
			<div className={styles.wrapper}>
				<div className={styles.item1}>
					<section className={styles.figset}>
						<figure id='01'>
							<StaticImage
								src="../asset/workimg/BSC.png"
								alt="Hero-image"
								placeholder="BLURRED"
								quality="100"
							/>
						</figure>
						<figure id='02'>
							<StaticImage
								src="../asset/workimg/PTM.png"
								alt="Hero-image"
								placeholder="BLURRED"
								quality="100"
							/>
						</figure>
						<figure id='03'>
							<StaticImage
								src="../asset/workimg/tarao1.png"
								alt="Hero-image"
								placeholder="BLURRED"
								quality="100"
							/>
						</figure>
						<figure id='04'>
							<StaticImage
								src="../asset/workimg/kyoudo.png"
								alt="Hero-image"
								placeholder="BLURRED"
								quality="100"
							/>
						</figure>
						<figure id='05'>
							<StaticImage
								src="../asset/workimg/takehiko.png"
								alt="Hero-image"
								placeholder="BLURRED"
								quality="100"
							/>
						</figure>
					</section>
				</div>

				<div className={styles.item2}>
					<a href="#01">Button01</a>　/　
					<a href="#02">Button02</a>　/　
					<a href="#03">Button03</a>　/　
					<a href="#04">Button04</a>　/　
					<a href="#05">Button05</a>

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
