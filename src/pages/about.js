import React from 'react'

import Seo from '../components/seo'
import Layout from '../components/layout'
// import Hero from '../components/hero'

import Intoro from '../components/intoro'
import * as styles from '../styles/introduction.module.scss'

export default function contact() {
	return (
		<Layout>
			<Seo title="About" />
			<Intoro />
			<article className={styles.articleStyle}>
				<section className={styles.desc}>
					<h1>まくら、<br/>　さくら持ってこい!</h1>
					<p>
						あのあまりに有名な「さくら」さんより二年ほど前に名づけられた昭和産のウェブ屋。<br />
						前世紀末に、カラー画面のパーソナルコンピューターがどうしても欲しいと新宿の「さくらや」さんで購入したものの、当時のマシンは万単位のソフトウェアを購入しないと遊び続けることができず、それではキリがないので「ホームページでもつくるか！」と足を踏み入れたのがきっかけ。
					</p>
				</section>
				<section className={styles.profile}>
					<dl>
						<dt>SAKURA IIZUKA</dt>
						<dl>1967年3月10日生</dl>
						<dl>魚座・A型・Female</dl>
					</dl>
				</section>
				<section className={styles.about}>
					<p>
						Webデザインの仕事は、笑ってしまうほど経験年数はものを云いません。<br />
						携わった数よりも学び方や関わり方の深さ、経験値だけがイキる世界なので、好きで、貪欲でないと、もたないらしいです。<br />
						その意味ではサイクルの目まぐるしいこの業界で長くやってきた、この昔日の人は、どれだけ好きなんだ・・と評価していただくか、あるいは（これしか出来ることがなかったのね）とこっそり理解していただくのが妥当です。
					</p>
					<p>
						私は設計がいちばん好きなので、ヒヤリングの「聴く耳」がもっとも大切な根幹部分かなと思っています。
					</p>


				</section>
			</article>
			




				<p>1967年3月10日生</p>
				<p>スタジオミックは、Webサイト制作を生業とする Sakurai（億）のブログサイトです。
Web屋として長らく20年越しでフリーランス暮らし
主に日々のつれづれや趣味をかねたWordPressのカスタマイズ、ブログテーマに関する話題が多く、次いでMacとDIYに傾きがちです。
中野区の鍋屋横丁と表参道、新宿三丁目によく出没します。</p>

		</Layout>
	)
}



