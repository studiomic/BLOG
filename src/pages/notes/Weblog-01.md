---
title: "Mac mini M2をトリプリモニター環境に"
date: "2025-05-20 10:00:00"
slug: 'triple-monitor'
# description: "LGウルトラワイド34とPHILIPS27インチに大満足"
description: "Silicon Motion - macOS instantView"
featuredImage: "asset/InstantView.avif"
tag: 'Mac mini M2,モニター,Anker,トリプルディスプレイ'
---


hpの27インチモニターを使い始めた頃から、メインモニターは大きければ大きいほど使いやすいと痛感していて、かれこれ3年経ち、34インチのウルトラワイドモニターを新調した。

<span style="display: block;margin-bottom: 2em;"></span>


Mac mini M2は外部モニターが2台接続可能な仕様だが、メインの1台は基本なければ困る必須品なので、追加モニターはプラス1台可という感覚。<br>
3台目のモニター（2台目のサブモニター）は**DisplayLink**（USB経由で映像データを伝送し、ディスプレイに表示するための技術）を使うのは知っていたので、<a href="https://dtplife.com/?p=787" target="_blank" rel="noopener noreferrer">こちらの記事</a>を参考に、モニター新調と同時にAnkerのUSB-Cハブも購入。

<span style="display: block;margin-bottom: 2em;"></span>

<img src="asset/IMG_8745.avif" loading="lazy" alt="">

<span style="display: block;margin-bottom: 2em;"></span>


案外すんなり、快適な環境が整ったが、実のところDisplayLinkで動いているのか、macOS instantViewで観ているのか、その差が確信できない。

いずれにしろ録画機能（画面収録API）を利用し、仮想ディスプレイを外部（3台目）モニターに共有（ミラーリング）しているのはわかるのだが。

<hr>

とりあえず私の環境では、**DisplayLink Manager**単体では最後まで外部モニターを認識せず、<br>
Ankerハブの説明書通り、**Silicon Motion**の<s>ドライバ</s>（アプリ）をインストール後、**macOS instantView**で外部モニターが認識されているのをconnectし（繋ぎ）、快適にNetflixなんぞ鑑賞しているときに、ふと。

これって、DisplayLink使ってないんじゃね？　となって

DisplayLink Manager を**Quit**しても、画面は消えず動画を見続けていた。
<span style="display: block;margin-bottom: 3em;"></span>


うん、これ使ってないよね。DisplayLink。たぶん。

違いをAI様にご説明願う。
<span style="display: block;margin-bottom: 3em;"></span>



## DisplayLinkとは

DisplayLinkは、USB経由で映像データを伝送し、ディスプレイに表示するための技術です。これにより、PCのグラフィックボードの出力制限を超えて、より多くのディスプレイを接続することが可能になります。主に、Apple Silicon Macにおける外部ディスプレイの制限を突破するために利用されています。
<span style="display: block;margin-bottom: 3em;"></span>

## macOS instantViewとは

macOSでの「InstantView」とは、外部ディスプレイにMacの画面を素早くミラーリングする技術のことです。特にSilicon Motionのドッキングステーションで採用されており、ディスプレイのドライバをインストールせずに画面を共有できます。

<hr>

結局、DisplayLinkを利用してのトリプルモニターは成功せず、InstantViewで成立したようだが、自信がないので、アクティビティモニタをチェックしたり、システム設定：プライバシーとセキュリティ：アクセシビリティでDisplayLinkの常駐をオフにして再起動してみる。

やはり問題なく動画の続きが再開したので、**macOS instantView**で利用できている。
<span style="display: block;margin-bottom: 5em;"></span>

案外すんなり、と書いたものの。
Ankerハブの説明書が名刺くらいの折り畳み極小サイズで、辛うじて「siliconmotion.com」でドライバをインストールせよ、は読めるのだが。<br>

肝心な**Silicon Motion**の
<a href="https://www.siliconmotion.com/jp/support/download" target="_blank" rel="noopener noreferrer">ダウンロードセンター</a>が非常にわかりにくくて。<br>
他サイトからダウンロードして解決した。
<span style="display: block;margin-bottom: 4em;"></span>


Plugable社の
<a href="https://ja.plugable.com/pages/siliconmotion" target="_blank" rel="noopener noreferrer">**Silicon Motion ドライバとソフトウェア**</a>から、プラットフォーム「macOS 15、14、13、12」を選択。
このときはドライバをダウンロードしているつもりでいたが、今ちゃんと見ると
 《Silicon Motion **InstantView** v3.22 R02》と、ソフトウェア名が書いてありました。<br>

<span style="display: block;margin-bottom: 1em;"></span>

Windows用が《Silicon Motion **driver** v2.22 R02》とあるので、OSによってサポート方法が違うっぽい。<br>
さらに説明を見ると、フルで画像のついた懇切な
<a href="https://kb.plugable.com/question/1255476" target="_blank" rel="noopener noreferrer">InstantView アプリケーションを導入する手順</a>というページまでありました。親切。
<span style="display: block;margin-bottom: 4em;"></span>


# instantView 使い方

導入はDisplayLinkと同じく、インストール後にシステム設定から：プライバシーとセキュリティ：アクセシビリティで画面収録を許可し、Macのメニューバーに新しい常駐アイコンがあるのをクリックすると<br>
画像のようなポップアップが開きます↓

<img src="asset/InstantView.avif" loading="lazy" width="100%" alt="">
はじめて開いたときは《CONNECT》で接続を促されるので、ボタンを押下する。<br>
と、3台目のモニターに新しくデスクトップが表示され、作業ができるようになる。

<span style="display: block;margin-bottom: 2em;"></span>

<img src="asset/InstantView2.avif" loading="lazy" width="100%" alt="">

画像の左端のアイコンをクリックして開く、**instantView**中のミニ画面。
これが3台目のモニターにミラーリングされ大写しになっている。<br>
すぐ右隣のアイコンが、新しく追加となったinstantView常駐アイコン。


<span style="display: block;margin-bottom: 2em;"></span>
ほんの気まぐれに「共有を停止」を押してみると、再生中のドラマが画面停止したまま、マウスポインタが3台目のモニターへ移っていけなくなりました。おもしろ。<br>
音声は続くので、ドラマや映画のように時間軸のあるものは、画面を映さないまま進んでいく模様。
<span style="display: block;margin-bottom: 2em;"></span>

《DISCONNECT》で音声もきちんと終了し、再《CONNECT》したら、ドラマは声の続きから再生された。
<span style="display: block;margin-bottom: 4em;"></span>

## instantView 使い心地
<span style="display: block;margin-bottom: 3em;"></span>
技術的には、Mac同士の《画面共有》に非常に似ていて、まさに他所にあるものを映しているのだけど、AI様のおっしゃる
「Macの画面を素早くミラーリングする技術」の**素早さ**が画面共有とは雲泥の差。1台目、2台目のモニターとまったく遅延なく動きます。

メインモニターのように複数アプリやフォルダーを開き、複数のデスクトップをパンパンにしてたら、多少は重さを感じるのかも知れませんが。
サブモニターって、素早く見られればいいものだしな。

あえて難点を挙げると、スリープからのお目覚めがやや遅いかなと思ったが、キーボードショートカットで何度か試すと、メインモニターの次に、表示されていた。

あとは、ホットコーナーを多用する人だと、モニターの台数分「四隅」は遠くなるので、配置によって工夫はいる。<br>
うちは横並びでなく、下に2台、上に1台の三角形を描くので、ポインタの移動は慣れると円を描いて小範囲で済む。

<span style="display: block;margin-bottom: 3em;"></span>

Mac同士の《画面共有》がピンと来ない人にとってはiPadの画面をプロジェクターに映して、プロジェクターの中で操作できるようなものだろうか。<br>

iPad画面をMacに共有した場合と同じ、かな。

<span style="display: block;margin-bottom: 3em;"></span>


## 動画配信が描画されない問題

よく聞くNetflixやAmazon PrimeVideoが表示されない問題。

結論から先に書くと、Chromブラウザの設定：システムで「グラフィックアクセラレーションが使用可能な場合は使用する」をオフにしていたため、最初から問題なく観られました。
あえてONにすると、暗転・音声だけになります。

<span style="display: block;margin-bottom: 2em;"></span>

Plugable社 でも<a href="https://kb.plugable.com/ja_JP/docking-stations-and-video/do-silicon-motion-graphics-adapters-and-docking-stations-work-on-macos" target="_blank" rel="noopener noreferrer">Silicon Motion 技術使用製品と macOS のサポートについて</a>
ページに、制限事項として

HDCP 対応：すべての Mac システム / macOS 環境で「なし」　となっていて
<blockquote>
USB グラフィック変換製品経由で接続されたモニターでは、HDCP 保護されたコンテンツ（Blu-ray、Netflix、Amazon Prime ビデオなど）は表示できません。これは、Windows でも macOS でも同じです。</blockquote>

とあるが。<br>
観られるようにするための対応が、どうもケースバイケースのような気もして、これまた確信が持てない。
<span style="display: block;margin-bottom: 2em;"></span>

- ブラウザの「グラフィックアクセラレーション」だけが邪魔になるケース
- Silicon Motion 使用製品を抜くことで、従来のモニターで観るケース

2番目は拡張モニターした意味がなく感じるが、それはともかく・・・<br>
もしかしたら。Silicon Motion 使用製品のケーブルか、本体によって症状が違う？？ という謎が残った。<br>
それが次項の余談。
<span style="display: block;margin-bottom: 4em;"></span>


## モニターを壊した

せっかく新しいモニターを購入したというに、設置作業のあれこれの中で、従来あったhpの27インチモニターの液晶を割ってしまった。<br>
アームから外して寝かせていた場所で、つい忘れて膝で背面を踏んだんですけど。<br>
で、取り付ける段になって（あれ？画面湾曲してね？）（あれ、もしかして踏んだわ）<br>
取り付け後、電源が入って派手なひび割れがハッキリ発覚する。

<span style="display: block;margin-bottom: 2em;"></span>
でもこの状況、液晶が割れたiPhoneを使っている人と同じで、動くは動く。<br>
動作確認はできる。<br>
その時点で、ハブに3台目モニターを刺すと、直付のモニター2台でも動画配信は全滅でした。

<span style="display: block;margin-bottom: 2em;"></span>
故に、ブラウザの「グラフィックアクセラレーション」だけが邪魔になるケースなら、別ブラウザで使いわけよー。とか<br>
「Silicon Motion 使用製品を抜くことで、従来のモニターで観るケース」なら、最悪、Mac miniは2台のデュアルモニターのまま、可愛いPRiNCETONのモニターをiMacに繋ぐ手もあるな、と考えてPHILIPSのモニターを速攻で購入した。

<article>
	<a href="https://amzn.to/3YSugRT" target="_blank" rel="noopener noreferrer">
		<img src="https://m.media-amazon.com/images/I/61i9tBqCFhL._AC_SL1000_.jpg" loading="lazy" alt="PHILIPS モニター" style="max-width:400px;margin: 0 auto;"/>
		<h3>PHILIPS モニターディスプレイ 271E1D/11 (27インチ/IPS Technology/FHD/5年保証/HDMI/D-Sub/DVI-D/フレームレス)</h3>
	</a>
</article>

<span style="display: block;margin-bottom: 2em;"></span>
つまり **最初から問題なく観られました** と書いたのは、PHILIPS製の新品の方で、hp製では、3台全滅いたしていた。<br>
もちろんその間ブラウザの設定など変えていない。<br>

動くといっても、途中でシュンとスリープモードに落ちていくような半壊状態だったので、確実なことは何も言えないのだが、明らかに反応が違ったので、ケーブルが違う？規格が違う？差がわからねぇ！と首を捻ってしまった謎。<br>
今冷静に考え直して、唯一の差は壊したhp製は音声出力がなかった。そこなんですかねぇ・・・。わからない。

<span style="display: block;margin-bottom: 2em;"></span>

本人はVESAがあるかないかだけ気にして購入したPHILIPS製のモニター。写真写りが悪すぎて、実際に届いた筺体はカッコよくて痺れてしまった。マットな黒。<br>
ベゼルも薄くて、そこかしこの面取りが絶妙。背面のカーブや厚みも良し。使わない脚まで格好良くて、なんなの。って感じで、完全にドジによる散財という「後悔」だったはずが、気分があがってしまう顛末となった。

<span style="display: block;margin-bottom: 3em;"></span>


<img src="asset/IMG_8798.avif" loading="lazy" width="100%" alt="">


昼間に撮った写真。

<img src="asset/IMG_8793.avif" loading="lazy" width="100%" alt="">

真夜中のスモールすぎるオフィス。

<span style="display: block;margin-bottom: 4em;"></span>


## 今回、購入したもの

<article>
	<a href="https://amzn.to/43p0zsX" target="_blank" rel="noopener noreferrer">
		<img src="https://m.media-amazon.com/images/I/61OUg2scRpL._AC_SL1500_.jpg" loading="lazy" alt="LG ウルトラワイドモニター" style="max-width:400px;margin: 0 auto;"/>
		<h3>
			LG ウルトラワイドモニター 平面 UltraWide Monitor 34WQ500-B 34インチ/2560×1080/100Hz/MBR 1ms/IPS/sRGB 99%/DisplayHDR 400/アンチグレア/HDMI/DisplayPort/VRR(FreeSync)/3年安心・無輝点保証/34WP550B 34WP500B 後継機
		</h3>
	</a>
</article>

MacのSplit Viewが活かせそうな良きサイズ感。「割れたら終わりのモニターに高い金は出さない」とか豪語しながら選んでて、まさか本当に割ることなかろう・・・のオチがついた2台新調したうちのメインディスプレイ。<br>
作り付け本棚の横幅いっぱいに鎮座して圧巻。
VS Codeが使いやすい。<br>
まずデンゼル・ワシントンが映ったときに（OK、綺麗だ）と思えました。<br>
Mac mini M2のHDMIポートに接続してます。Thunderboltは、元々のPRiNCETON製モニターを繋いだまま。

<span style="display: block;margin-bottom: 2em;"></span>

<article>
	<a href="https://amzn.to/3H1mdvX" target="_blank" rel="noopener noreferrer">
		<img src="https://m.media-amazon.com/images/I/61guV4m3sIL._AC_SL1500_.jpg" loading="lazy" alt="" style="max-width:300px;margin: 0 auto;" />
		<h3>
			Anker 563 USB-C ハブ (10-in-1, Dual 4K HDMI, for MacBook) 100W MST機能 3画面出力 トリプルモニター 4K対応 HDMIポート 着脱式ケーブル 50cm USB PD 対応 M1 M2 MacBook 1Gbps イーサネット USB-A USB-Cポート microSD＆SDカード スロット搭載
		</h3>
	</a>
</article>

紹介した記事に載っていた、↓ドッキングステーションとかなり最後まで迷いましたが、ACアダプターはもうイヤだ、が決め手になってUSB-C ハブを選択。<br>
値段が逆なり、ノートPCやMacBookユーザーならドッキングステーションにしたかもと思いつつ。手軽な大きさ必要十分な機能で満足。<br>
わりと直近でAnkerのケーブルを購入していて、メーカーへの信頼や好感度が高かったのも選択の理由。

<span style="display: block;margin-bottom: 2em;"></span>

<article>
	<a href="https://amzn.to/4jhaRRP" target="_blank" rel="noopener noreferrer">
		<img src="https://m.media-amazon.com/images/I/61Jq2n7SYPL._AC_SL1500_.jpg" loading="lazy" alt="" style="max-width:300px;margin: 0 auto;" />
		<h3>
			Anker 563 USB-C ドッキングステーション (10-in-1) 最大100W出力 MST機能 トリプルモニター USB PD 対応 M1 MacBook 4K対応 HDMIポート ディスプレイポート 1Gbps イーサネットポート 3.5mm オーディオジャック USB-Aポート USB-Cポート 搭載
		</h3>
	</a>
</article>

<span style="display: block;margin-bottom: 2em;"></span>

<article>
	<a href="https://amzn.to/3HiMXb6" target="_blank" rel="noopener noreferrer">
		<img src="https://m.media-amazon.com/images/I/71ZMDkw9sdL._AC_SL1500_.jpg" loading="lazy" alt="" style="max-width:400px;margin: 0 auto;" />
		<h3>
			VECELO まな板スタンド まな板立て 12cmx12cm x 21.5cm まな板ラック 包丁スタンド まな板オーガナイザー キッチン 鍋 滑り止め付き ブラック
		</h3>
	</a>
</article>

急にまな板スタンド（笑）<br>
立てたかったんですよ、Mac miniを。寸法は良さげながら、内径が詳しく載っていなくて。届いたあと（ギリギリでダメかー）（またいい加減な買い物をー）と思いかけたんですが、紙一重で、大丈夫でした。<br>
購入したときから貼りっぱなしだった、Mac miniの底にあった保護シールのような黒い紙を剥がしたらジャスト。

<img src="asset/IMG_8786-25.avif" loading="lazy" alt="">

この雑多なケーブル類をね、不自然に引っ張られないよう、縦置きで浮かせておきたかった。<br>
AND 冷却ファンのケーブルが切れて、今度は大マジの扇風機の上に置きたかった。

<img src="asset/IMG_8777.avif" loading="lazy" alt="">

<span style="display: block;margin-bottom: 2em;"></span>

偶然、LGモニターの脚高と同じ厚み。<br>

<span style="display: block;margin-bottom: 2em;"></span>

## 雑感

こういう機会に、タコ足配線をはずして見直すことが多いんですが。<br>
古い、八咫烏の3本足が刺せるようなテーブルタップ、「OAタップ」というのかな、を長らく使ってきたけど、1本も3本足の口を使っていなかった。

周辺機器もなにもすべて様変わりして、マシン本体も3本足コードじゃない。
阿呆のように**世界は変わったんだ**を実感しました。

ならば。とメインマシンであるMac miniと関連あるものだけ「OAタップ」に移し変えて、2台のiMacは、いつでも電源を落とせるように、個別にスイッチのついている節電志向のテーブルタップに差し替え。<br>
床に置いている古い方のiMacにいたっては、テーブルタップのスイッチで起動するように改変。

冷却ファン代わりの扇風機も、夜用ライトも、個別スイッチでパチパチと点灯・消灯できるようにして、まぁ手抜きのための工夫をどこまでも惜しまない、いつもの模様替えなんだけども。

最後に急に「全自動洗濯機」という強烈ワードを連想して、最初に思いついた人、凄いよなぁと懐古に入った。

辛うじて、全自動でない脱水機付き見たことある世代なので（笑）<br>
脱水機ったって、2本のロールの間に濡れた洗濯ものを挟んでクルリとプレスしながら水を切ってたような。力仕事だったねぇ。

<hr>

#### 現在の酔狂なスモールすぎるワークスペースの構成

- iMac Mid2011
- iMac Mid2015
- Mac mini M2
- PRiNCETON 21インチモニター
- PHILIPS 27インチモニター
- LG UltraWide 34インチモニター

AnkerのハブとLGモニター届いた時点で、中国、韓国、（お。だんだんアジアンになってきた）と思ったのだが、PHILIPSでちょっとだけおフランス風味。<br>
日本製はPRiNCETONだけかぁ、

3本足電源の頃は、EIZOだ、SHARPだと東の果てだったのに**世界は変わったんだなぁ**





