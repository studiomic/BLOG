import React from 'react'
import Layout from '../components/layout'
import Intoro from '../components/intoro-work'
import * as styles from '../styles/about.module.scss'
// import IMG from "../asset/img/sakana.png"
// import SNS from "../asset/svg/iconmonstr-instagram-11.svg"
// import Seo from '../components/seo'

export default function about() {
	return (
		<Layout>
			<Intoro />
			{/* <div class="wave">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,64L80,85.3C160,107,320,149,480,144C640,139,800,85,960,58.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/></svg>
			</div> */}


			<article className={styles.article}>
				<section className={styles.about}>
					
					<hr />
					
					
				</section>
				
				
			</article>
		</Layout>
	)
}
export const Head = ({ mode }) => {





	
  return (
    <>
    <body class={mode} />
    </>
  )
}
