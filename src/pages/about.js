import React from 'react'

import Seo from '../components/seo'
import Layout from '../components/layout'
// import Hero from '../components/hero'

import Intoro from '../components/intoro'
// import Hero from '../components/hero'
import * as styles from '../styles/about.module.scss'
import IMG from "../asset/img/sakana.png"
import IMG2 from "../asset/svg/caret-down-svgrepo-com.svg"

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
						最初に知ったときは、（ Gatsby・・・て、え? あのギャツビー?! ）と少し驚きました。あんな破滅的なラストを迎える主人公の名を? と。
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
				<section className={styles.details}>
					<details>
						<summary>
							<div><img src={IMG2} alt="caret-down" /></div>
							<div>SERVICE</div>
						</summary>
						<p>
							WEBサイト制作 ： 企画・設計・制作、ヘッドレスCMSへの移行、 コーディング<br />
							WordPress ： Full Site Editing ブロックテーマへのリニューアル、カスタマイズ、オリジナルテーマ制作<br />
							その他 ： サイト運用・保守、コンサルティング、名刺デザイン
						</p>
					</details>
					<details>
						<summary>
							<div><img src={IMG2} alt="caret-down" /></div>
							<div>DESIGN</div>
						</summary>
						<p>
							Webデザインの仕事は、笑ってしまうほど経験年数はものを云いません。<br />
							日進月歩の技術刷新もあり、流行り廃りもあり、携わった数よりも学び方や関わり方の深さ、経験値だけがイキる世界なので、好きで、貪欲でないと、もたないらしいです。<br />
							その意味ではサイクルの目まぐるしいこの業界で長くやってきた、この昔日の人は、どれだけ好きなんだ・・と評価していただくか、あるいは（きっと、それしか出来ることがなかったのね）とこっそり理解していただくのが妥当です。
						</p>
						<p>
							私は設計がいちばん好きなので、ヒヤリングの「聴く耳」がもっとも大切な根幹部分かなと思っています。<br />
							Webサイトは、企業や個人のアイデンティティーを第三者に向けて「客観的に」表現する場なので、その人も知らなかったその人の魅力、本質を映し出す良き媒体でありたいと常に感じます。
						</p>
						<hr />
						<p>
							ある教育者からの発注で「どこにもないものを創ってください」とだけ要望されたデザインをきっかけに、設計者として善きブレイク・ポイントをいただきました。<br />
							それ以降は既存のフレームワークからも離れ、固定観念からも放たれ、自由に考える空恐ろしい責任とともに、シンプルな構造と「ライク・ア・リクルートスーツ」ではないチャーミングな実装を心がけています。
						</p>
					</details>
					<details>
						<summary>
							<div><img src={IMG2} alt="caret-down" /></div>
							<div>HISTORY</div>
						</summary>
						<p>
							子どもの頃の夢は、スーパーのレジ担当になりたい。<br />
							当時本格的なキーパンチャーは見えない場所でお仕事していて、玩具のタイプライターを買って遊ぶ傍ら、モンチッチのブランコをDIYして「材料費だけ出してくれたら作るよ。」などと友達に営業かけたりしました。<br />
						</p>
						<p>
							現職では営業したこともないフリーランスのくせに。モンチッチが偉大。<br />
							といった昭和産の話はどうでもよくて。Keyを打つことで紙に印字ではなく「形あるものを創れる」なにそれ最高！な時代がいずれ来ました。
						</p>
						<p>
							私は運がいいのだろうと思います。<br />
							プロがまだインラインでStyleを書いてた時に（いやでもこれからはカスケーディングスタイルシートを使えってIBMが・・・）と最初から楽な道を選び、それにしても、もぅつくづくCSS書くの面倒だよねーと思い始めた頃にはSASSが来る。これからもきっとそうです。この業界で下り坂はまだ見ていない。
						</p>
						<p>
							おもしろいほど空が高い。
						</p>
						<hr />
						<p>
							制作会社で働く若い人が「覚えることが多すぎて大変」というのは（想像に難くなぃぃ・・）な辛さの気もしますが。長いスパンで見れば悪い方向へは向かっていかない、そういう業界は稀有なんじゃないかな、と時々考えて、静かに満足します。
						</p>
						<p>
							studiomic.net というドメインは駆け出しの頃に運営していたサイト名から屋号として長く使っていたもので、今も屋号を変えたわけじゃないものの、誰も屋号では呼ばず「さくらさん」で20年も仕事をしてきて、© 以外はもういいや。となりました。
						</p>
						<p>
							Stylo de Cerise というブログ名は「さくらペン」みたいな名前にしたかった名残りで、病気療養のせいで2年ほど休んでいたある日、家族の部屋へ「ノートと鉛筆をください」と頼みに行ったのが復活の日、と後から気づいたためです。
						</p>
						<p>
							デザインに必要なのは紙とペン。
						</p>
						<p>
							そこからは「わしのマシンを取りに別宅に行きたいんぢゃ」と怒涛の再会を果たして今日にいたる。
						</p>
					</details>
					</section>
			</article>
		</Layout>
	)
}



