import React from 'react'
import Layout from '../components/layout'
// import Intoro from '../components/intoro-about'
import * as styles from '../styles/about.module.scss'
// import IMG from "../asset/img/sakana.png"
// import SNS from "../asset/svg/iconmonstr-instagram-11.svg"
// import Seo from '../components/seo'

export default function about() {
	return (
		<Layout>
			<article className={styles.article}>
				<section className={styles.about}>
					
					<hr />
					<p>
						閑話休題。<br />そんなわけで、このブログ「Style de Cerise」は、ヘッドレスCMS : Contentfulが提供している <a href="https://www.gatsbyjs.com/starters/contentful/starter-gatsby-blog/" rel="noreferrer" target='_blank'>starter-gatsby-blog</a> と静的ジェネレーター : Gatsbyでつくりました。<br />
					</p>
					
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
