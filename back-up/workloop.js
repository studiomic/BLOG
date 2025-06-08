import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './../styles/components/workloop.module.scss'

const Loopworks = () => (
	<section className={styles.figset}>
		<details>
			<summary><figure>
				<StaticImage
					src="../asset/workimg/BSC.png"
					alt="ベイサイドクリニック"
					placeholder="BLURRED"
					quality="100"
				/>
			</figure></summary>
			<aside>
				<p>Client : 医療法人ベイサイドクリニック</p>
				<p>Design/Coding : StudioMic/Sakura.i</p>
				<p>URL : <a href="https://bs-clinic.or.jp/" target="_blank" rel="noopener noreferrer">bs-clinic.or.jp</a></p>
			</aside>
		</details>

		<details>
			<summary><figure>
				<StaticImage
					src="../asset/workimg/PTM.png"
					alt="PTM"
					placeholder="BLURRED"
					quality="100"
				/>
			</figure></summary>
			<aside>
				<p>Client : ピーティーエム株式会社</p>
				<p>Design/Coding : StudioMic/Sakura.i</p>
				<p>URL : <a href="https://www.ptm-co.jp/" target="_blank" rel="noopener noreferrer">ptm-co.jp</a></p>
			</aside>
		</details>

		<details>
			<summary><figure>
				<StaticImage
					src="../asset/workimg/tarao1.png"
					alt="寺尾幼稚園"
					placeholder="BLURRED"
					quality="100"
				/>
			</figure></summary>
			<aside>
				<p>Client : 学校法人亀井学園 寺尾幼稚園</p>
				<p>Design/Coding : StudioMic/Sakura.i</p>
				<p>URL : <a href="https://terao.ed.jp/" target="_blank" rel="noopener noreferrer">terao.ed.jp</a></p>
			</aside>
		</details>

		<details>
			<summary><figure>
				<StaticImage
					src="../asset/workimg/kyoudo.png"
					alt="Kyoudou"
					placeholder="BLURRED"
					quality="100"
				/>
			</figure></summary>
			<aside>
				<p>Client : 株式会社 共同</p>
				<p>Design/Coding : StudioMic/Sakura.i</p>
				<p>URL : <a href="https://kyoudou-group.jp/" target="_blank" rel="noopener noreferrer">kyoudou-group.jp</a></p>
			</aside>
		</details>

		<details>
			<summary><figure>
				<StaticImage
					src="../asset/workimg/takehiko.png"
					alt="関工芸"
					placeholder="BLURRED"
					quality="100"
				/>
			</figure></summary>
			<aside>
				<p>Brand : TAKEHIKO - 武比古</p>
				<p>Client : 関工芸株式会社</p>
				<p>Design/Coding : StudioMic/Sakura.i</p>
				<p>URL : <a href="https://www.takehiko.co.jp/" target="_blank" rel="noopener noreferrer">takehiko.co.jp</a></p>
			</aside>
		</details>
	</section>
)
export default Loopworks
