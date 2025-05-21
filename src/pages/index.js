import React from 'react'
import get from 'lodash/get'
import { graphql, Link } from 'gatsby';
import Layout from './../components/layout'
import Seo from './../components/seo'
import * as styles from '../styles/pages/index.module.scss'
// import Intoro from './../components/intoro-index'
// import Loop from './../components/workloop'
// import * as styles from './../styles/work.module.scss'
// export default function work() {

class RootIndex extends React.Component {
	render() {
		const notes = get(this, 'props.data.allMarkdownRemark.edges')
	return (
		<Layout>
				<section className={styles.container}>
					<div className={styles.layoutGrid}>
						<article className={styles.headers}>
							<header>
								<h1>Design Deeply</h1>
								<h2>Web designer.</h2>
								<p>Development 26th</p>
							</header>
							<section>
								<h3>©Studio Mic</h3>
								<p>スタジオミック</p>
							</section>
						</article>
						<div className={styles.rowline1}></div>
						<div className={styles.rowline2}></div>
						<div className={styles.rowline3}></div>
						{/* <div className={styles.free5}></div> */}
					</div>

					<article className={styles.about}>
						<details>
							<summary>
								<span></span>
								<h2>Blog et Gatsby Pages de Cerise</h2>
							</summary>
							<div>
								<p>
									<span className={styles.rows1}>このブログ的な「Stylo de Cerise」は、長年Web屋を営むわたくし桜が、私的な記録ノートとして運営しているドメスティックなWebサイトです。</span><br />
									<span className={styles.rows2}>Webデザイナーのサガで、たまに新しいワイヤーフレームを試したくなると、このサイトの外観がしばしば変化します。</span>
								</p>
								<p>
									<span className={styles.rows3}>屋台としては、React のフレームワークの一つである Gatsby.js でつくっています。</span><br />
									<span className={styles.rows4}>CGIのインタラクティブ大好きから始まったWeb屋稼業の、たぶん最後にはまった好きなオモチャが <b>The Great Gatsby！</b> だったかと。</span>
								</p>
								<p>
									<span className={styles.rows5}>好きなら「1銭にもならないことに血道を上げるタイプ」「買うより高いDIY」</span><br />
									<span className={styles.rows6}>この2つが主なる私の悪口（主観）ですが、急ぎ50枚のWebページをつくるとかに、Gatsbyはマジで便利で速くて楽しい三拍子。</span>
								</p>
								<p>
									<span className={styles.rows7}>と、手段が目的と化した「Stylo de Cerise」ですが、コンテンツは文才もなく努力家でもなく目も当てられないのを、徐々にJOJOに改善できたらと想う、今日この頃のジョジョラーです。</span>
								</p>
							</div>
						</details>
					</article>

					<div className={styles.wrapper}>
						<div className={styles.notepost}>
							<h1 className={styles.title}>Notes</h1>
								{notes.map((edge) => (
								<div key={edge.id} className={styles.postloop}>
									<h2>
										<Link to={`/notes/${edge.node?.frontmatter.slug}`}>
											{edge.node.frontmatter.title}
										</Link>
									</h2>
									<dl>
										<dt>{edge.node.frontmatter.date}</dt>
										<dd>{edge.node.frontmatter.description}</dd>
									</dl>
								</div>
							))}
						</div>

						<div className={styles.lamp} loading="lazy"></div>
						<div className={styles.bggrid} loading="lazy">
							<h2>Designing with CSS Grid</h2>
						</div>

						{/* <div className={styles.grid}>1</div>
						<div className={styles.grid}>2</div>
						<div className={styles.grid}>3</div> */}

						{/* <div className={styles.grid}>4</div>
						<div className={styles.grid}>5</div> */}

						{/* <div className={styles.grid}>6</div>
						<div className={styles.grid}>7</div>
						<div className={styles.grid}>8</div> */}
					</div>
				</section>
		</Layout>
	)
	}
}

export const Head = () => {
  return (
    <Seo
			title={'Studio Mic - Nakano - '}
      description={'WEB DEGIGN'}
    />
  )
}
export default RootIndex

// export const Head = ({ data }) => {
//   return (
//     <Seo
//       description={data.site.siteMetadata.description}
//     />
//   )
// }


export const pageQuery = graphql`
query IndexQuery {
	site {
		siteMetadata {
			title
			description
		}
	}
	allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
		edges {
			node {
				html
				timeToRead
				frontmatter {
					title
					date(formatString: "YYYY/MM/DD")
					description
					slug
				}
			}
		}
	}	
}	
`

