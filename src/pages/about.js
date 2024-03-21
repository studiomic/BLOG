import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Intoro from '../components/intoro'
import * as styles from '../styles/about.module.scss'
import IMG from "../asset/img/sakana.png"
import SNS from "../asset/svg/iconmonstr-instagram-11.svg"

export default function about() {
	return (
		<Layout>
			<Intoro />
			<div class="wave">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,64L80,85.3C160,107,320,149,480,144C640,139,800,85,960,58.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/></svg>
			</div>
			<article className={styles.article}>
				<section className={styles.desc}>
					<h1>まくら、<br/>　さくら持ってこい!</h1>
					<p>
						あのあまりに有名な「さくら」さんより二年ほど前に名づけられた昔日のウェブ屋。<br />
						前世紀末に、カラー画面のパーソナルコンピューターがどうしても欲しいと新宿の「さくらや」さんで購入したものの、当時のマシンは万単位のソフトウェアを購入しないと遊び続けることができず、それではキリがないので「ホームページでもつくるか！」と足を踏み入れたのがきっかけ。
					</p>
				</section>
				<section className={styles.profile}>
					<article class="picts">
						<img src={IMG} alt="魚" />
						<dl>
							<dt>SAKURA IIZUKA</dt>
							<dd>1967年3月10日生</dd>
							<dd>魚座・A型・Female</dd>
						</dl>
						<p>
							<a href="https://www.instagram.com/cerisierpurr/" rel="noreferrer" target="_blank" className={styles.sns}><img src={SNS} alt="instagram" /></a>
						</p>
					</article>
				</section>
				<section className={styles.about}>
					<p>
						最近は React のフレームワークの一つである Gatsby.js にハマりにハマっています。とにかく楽しい！<br />
						そして、速いは正義。<br />
						そらもぅ武田の騎馬隊かっ というほど、<ruby>疾<rt>はや</rt>きこと風の如く</ruby>です。（実際は”Blazing fast Site”というらしい）
					</p>
					<p>
						最初に知ったときは、（ Gatsby・・・て、え? あのギャツビー?! ）と少し驚きました。あんな破滅的なラストを迎える主人公の名を? と。
					</p>
					<p>
						でも使うほどに実感するのでした。<br />
						The Great Gatsby！
						彼につく枕詞「ザ・グレート」の方をこそ指した命名かと。
					</p>
					<hr />
					<p>
						邦題の「華麗なるギャツビー」の方が私的には馴染み深いものの、村上春樹さんは翻訳家なのもあって意訳の「華麗なる」が許しがたいらしく・・・なるほど英語に精通していると、やはりギャツビーは東方仗助の云う「グレートだぜ」がふさわしいんだろうな、きっと。<br />と想う今日この頃のジョジョラーです。
					</p>
					<hr />
					<p>
						閑話休題。<br />そんなわけで、このブログ「Style de Cerise」は、ヘッドレスCMS : Contentfulが提供している <a href="https://www.gatsbyjs.com/starters/contentful/starter-gatsby-blog/" rel="noreferrer" target='_blank'>starter-gatsby-blog</a> と静的ジェネレーター : Gatsbyでつくりました。<br />
					</p>
					<p>
						自社製なだけに、Contentfulとの連携はものすごくスムーズでした。<br />
						テーマとしては僅かに改変しましたが、快速への敬意からフッターにContentfulのロゴを残しています。<br />
						modification というより単なるアレンジですね。
					</p>
					<p>
						つくることが目的となっているようなスペースなので、ブログ更新は寡なめ予定ですが、長く使えると良いなーと考えてます。
					</p>
				</section>
				<section className={styles.service}>
					<h2>SERVICE</h2>
					<p>
						WEBサイト制作 ： 企画・設計・制作、ヘッドレスCMSへの移行、 コーディング<br />
						WordPress ： Full Site Editing ブロックテーマへのリニューアル、カスタマイズ、オリジナルテーマ制作<br />
						その他 ： サイト運用・保守、コンサルティング、名刺デザイン
					</p>
					<p className={styles.info}>
						連絡先 ： <span>wabwork(@)studiomic.net</span><span class="picts"><a href="https://www.instagram.com/cerisierpurr/" rel="noreferrer" target="_blank" className={styles.sns}><img src={SNS} alt="instagram" /></a></span><br />
						お問い合わせ、記事についてのご意見・ご質問があればご連絡ください。
					</p>
				</section>
				<section className={styles.design}>
					{/* <h2>DESIGN</h2> */}
					<p>
						Webデザインの仕事は、笑ってしまうほど経験年数はものを云いません。<br />
						日進月歩の技術刷新があり、流行り廃りもあり、携わった数よりも学び方や関わり方の深さ、経験値だけがイキる世界なので、好きで、貪欲でないと、もたないらしいです。<br />
						その意味ではサイクルの目まぐるしいこの業界で長くやってきた、この昔日の人は、どれだけ好きなんだ・・と評価していただくか、あるいは（きっと、それしか出来ることがなかったのね）とこっそり理解していただくのが妥当です。
					</p>
					<p>
						私は設計がいちばん好きなので、ヒヤリングの「聴く耳」がもっとも大切な根幹部分かなと思っています。<br />
						Webサイトは、企業や個人のアイデンティティーを第三者に向けて「客観的に」表現する場なので、その人も知らなかったその人の魅力、本質を映し出す良き媒体でありたいと常に考えています。
					</p>
					<hr />
					<p>
						ある教育者からの発注で「どこにもないものを創ってください」とだけ要望されたデザインをきっかけに、設計者として善きブレイク・ポイントをいただきました。<br />
						それ以降は既存のフレームワークからも離れ、固定観念からも放たれ、自由に考える空恐ろしい責任とともに、シンプルな構造と「ライク・ア・リクルートスーツ」ではないチャーミングな実装を心がけています。
					</p>
				</section>
			</article>
		</Layout>
	)
}

export const Head = () => <Seo title="About" />



