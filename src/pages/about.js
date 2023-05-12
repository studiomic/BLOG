import React from 'react'

import Seo from '../components/seo'
import Layout from '../components/layout'
// import Hero from '../components/hero'

import Intoro from '../components/intoro'
// import Hero from '../components/hero'
import * as styles from '../styles/about.module.scss'
import IMG from "../asset/img/sakana.png"

export default function about() {
	return (
		<Layout>
			<Seo title="About" />
			<Intoro />
			<div className={styles.wave}></div>
			<article className={styles.article}>
				<section className={styles.desc}>
					<h1>まくら、<br/>　さくら持ってこい!</h1>
					<p>
						あのあまりに有名な「さくら」さんより二年ほど前に名づけられた昔日の人、ウェブ屋。<br />
						前世紀末に、カラー画面のパーソナルコンピューターがどうしても欲しいと新宿の「さくらや」さんで購入したものの、当時のマシンは万単位のソフトウェアを購入しないと遊び続けることができず、それではキリがないので「ホームページでもつくるか！」と足を踏み入れたのがきっかけ。
					</p>
				</section>
				<section className={styles.profile}>
					<article>
						<img src={IMG} alt="" />
						<dl>
							<dt>SAKURA IIZUKA</dt>
							<dd>1967年3月10日生</dd>
							<dd>魚座・A型・Female</dd>
						</dl>
					</article>
				</section>
				<section className={styles.about}>
					<p>
						最近は React のフレームワークの一つである Gatsby.js にハマりにハマっています。とにかく楽しい！<br />
						そして、速いは正義。<br />
						そらもぅ武田の騎馬隊かっ というほど速いので、<ruby>疾<rt>はや</rt>きこと風の如く</ruby>です。
					</p>
					<p>
						最初に知ったときは、（ Gatsby・・・て、え? あのギャツビー?! ）と少し驚きましたよね。あんな破滅的なラストを迎える主人公の名を? と。
					</p>
					<p>
						でも使うほどに実感するのでした。<br />
						The Great Gatsby！
						彼につく枕詞「ザ・グレート」の方をこそ指した命名かと。
					</p>
					<hr />
					<p>
						邦題の「華麗なるギャツビー」の方が私的には好きなんですが、村上春樹さんは翻訳家なのもあって意訳の「華麗なる」が許しがたいらしく・・・なるほど英語に精通していると、やはりギャツビーは東方仗助の云う「グレートだぜ」がふさわしいんだろうな、きっと。<br />と想う今日この頃のジョジョラーです。
					</p>
					<hr />
					<p>
						閑話休題。<br />そんなわけで、このブログ「Style de Cerise」は、ヘッドレスCMS : Contentfulが提供している <a href="https://www.gatsbyjs.com/starters/contentful/starter-gatsby-blog/" target='_blank'>starter-gatsby-blog</a> と静的ジェネレーター : Gatsbyでつくりました。<br />
					</p>
					<p>
						自社製なだけに、Contentfulとの連携はものすごくスムーズでした。<br />
						テーマとしては僅かに改変しましたが、快速への敬意からフッターContentfulのロゴを残しています。<br />
						modification というより単なるアレンジですね。
					</p>
					<p>
						つくることが目的となっているようなスペースなので、ブログ更新は寡なめ予定ですが、長く使えると良いなーと考えてます。
					</p>
				</section>
				<section className={styles.history}>
			<h2>HISTRY</h2>

<p>
を理解していると、

プログラム言語の名でパスカルを美しいと感じて以来の感動かも。


Webデザインの仕事は、笑ってしまうほど経験年数はものを云いません。<br />
携わった数よりも学び方や関わり方の深さ、経験値だけがイキる世界なので、好きで、貪欲でないと、もたないらしいです。<br />
その意味ではサイクルの目まぐるしいこの業界で長くやってきた、この昔日の人は、どれだけ好きなんだ・・と評価していただくか、あるいは（これしか出来ることがなかったのね）とこっそり理解していただくのが妥当です。
私は設計がいちばん好きなので、ヒヤリングの「聴く耳」がもっとも大切な根幹部分かなと思っています。
</p>

				</section>

			</article>


		</Layout>
	)
}



