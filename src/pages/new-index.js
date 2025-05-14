import React from 'react'
import Layout from './../components/layout'
import Seo from '../components/seo'
import * as styles from '../styles/pages/index.module.scss'

// import Intoro from './../components/intoro-work'
// import Loop from './../components/workloop'
// import * as styles from './../styles/work.module.scss'

// export default function work() {
class RootIndex extends React.Component {
	render() {
	return (
		<Layout>
				<section className={styles.container}>
					<div className={styles.layoutGrid}>
						<div className={styles.headers}>
							<header>
								<h1>Design Deeply</h1>
								<h2>Web designer.</h2>
								<p>Development 26th</p>
							</header>
							<section>
								<h3>Studio Mic</h3>
								<p>スタジオミック</p>
							</section>
						</div>
						<div className={styles.rowline1}></div>
						<div className={styles.rowline2}></div>
						<div className={styles.rowline3}></div>
						<div className={styles.free5}></div>
						<div className={styles.grid}></div>
						<div className={styles.grid}></div>
						<div className={styles.grid}></div>
					</div>

					<article className={styles.wrapper}>
						<div className={styles.grid}>1</div>
						<div className={styles.grid}>2</div>
						<div className={styles.grid}>3</div>
						<div className={styles.grid}>
							
						</div>
						<div className={styles.grid}>5</div>
						<div className={styles.grid}>6</div>
						<div className={styles.grid}>7</div>
						<div className={styles.grid}>8</div>
						<div className={styles.grid}>9</div>
						<div className={styles.grid}>1</div>
						<div className={styles.grid}>2</div>
						<div className={styles.grid}>3</div>
						<div className={styles.grid}>4</div>
						<div className={styles.grid}>5</div>
						<div className={styles.grid}>6</div>
						

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
}

export const Head = ({ data }) => {
  return (
    <Seo
			title={'Studio Mic - Nakano - '}
      description={'WEB DEGIGN'}
    />
  )
}
export default RootIndex
