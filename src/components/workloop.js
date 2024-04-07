import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './../styles/components/workloop.module.scss'

const Loopworks = () => (
	<section className={styles.figset}>
		<article>
			<figure id='01'>
				<StaticImage
					src="../asset/workimg/BSC.png"
					alt="ベイサイドクリニック"
					className=""
					placeholder="BLURRED"
					quality="100"
					loading="lazy"
				/>
			</figure>
			<figcaption>
				<p>ベイサイドクリニック</p>
			</figcaption>
		</article>
		<article>
			<figure id='02'>
				<StaticImage
					src="../asset/workimg/PTM.png"
					alt="PTM"
					placeholder="BLURRED"
					quality="100"
				/>
			</figure>
			<figcaption>
				<p>PTM</p>
			</figcaption>
		</article>
		<article>
		<figure id='03'>
			<StaticImage
				src="../asset/workimg/tarao1.png"
				alt="寺尾幼稚園"
				placeholder="BLURRED"
				quality="100"
			/>
		</figure>
		<figcaption>
				<p>XXX</p>
		</figcaption>
		</article>
		<article>
		<figure id='04'>
			<StaticImage
				src="../asset/workimg/kyoudo.png"
				alt="Kyoudou"
				placeholder="BLURRED"
				quality="100"
			/>
		</figure>
		<figcaption>
				<p>XXX</p>
		</figcaption>
		</article>
		<article>
		<figure id='05'>
			<StaticImage
				src="../asset/workimg/takehiko.png"
				alt="関工芸"
				placeholder="BLURRED"
				quality="100"
			/>
		</figure>
		<figcaption className={styles.reveal}>
				<p>XXX</p>
		</figcaption>
		</article>
	</section>
)

export default Loopworks
