---
title: "Mac mini M2をトリプリモニター環境に"
date: "2025-05-20 10:00:00"
slug: 'triple-monitor'
description: "LGウルトラワイド34とPHILIPS27インチに大満足"
featuredImage: "asset/InstantView.avif"
tag: 'Mac mini M2'
---

hpの27インチモニターを使い始めた頃から、メインモニターは大きければ大きいほど使いやすいと痛感していて、かれこれ3年経ち、34インチのウルトラワイドモニターを新調した。

Mac mini M2は外部モニターが2台接続可能な仕様だが、メインの1台は基本なければ困る必須品なので、追加モニターはプラス1台可という感覚。<br>
3台目のモニター（2台目のサブモニター）は**DisplayLink**（USB経由で映像データを伝送し、ディスプレイに表示するための技術）を使うのは知っていたので、<a href="https://dtplife.com/?p=787" target="_blank" rel="noopener noreferrer">こちらの記事</a>を参考に、モニター新調と同時にAnkerのUSB-Cハブも購入。

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
さらに見ると、フルで画像のついた懇切な
<a href="https://kb.plugable.com/question/1255476" target="_blank" rel="noopener noreferrer">InstantView アプリケーションを導入する手順</a>というページまでありました。親切。
<span style="display: block;margin-bottom: 4em;"></span>


# instantView 使い方

導入は、DisplayLinkと同じく、システム設定から：プライバシーとセキュリティ：アクセシビリティで画面収録を許可し、Macのメニューバーに新しい常駐アイコンがあるのをクリックすると<br>
画像のようなポップアップが開きます↓

<img src="asset/InstantView.avif" loading="lazy" width="100%" alt="">
はじめて開いたときは《CONNECT》で接続を促されるので、ボタンを押下する。<br>
と、3台目のモニターに新しくデスクトップが表示され、作業ができるようになる。

<span style="display: block;margin-bottom: 2em;"></span>

<img src="asset/InstantView2.avif" loading="lazy" width="100%" alt="">

画像の左端のアイコンをクリックして開く、**instantView**中のミニ画面。これが3台目のモニターにミラーリングされ大写しになっている。<br>
（・・・怖いドラマ観ながら撮ったので、スクショがえぐい・・・）


<span style="display: block;margin-bottom: 2em;"></span>
ほんの気まぐれに「共有を停止」を押してみると、再生中のドラマが画面停止したまま、マウスポインタが3台目のモニターへ移っていけなくなりました。おもしろ。<br>
音声は続くので、ドラマや映画のように時間軸のあるものは、画面を映さないまま進んでいく模様。

<span style="display: block;margin-bottom: 3em;"></span>
技術的には、Mac同士の《画面共有》に非常に似ていて、まさに他所にあるものを映しているのだけど、AI様のおっしゃる
「Macの画面を素早くミラーリングする技術」の**素早さ**が画面共有とは雲泥の差。1台目、2台目のモニターとまったく遅延なく動きます。

メインモニターのように複数アプリやフォルダーを開き、複数のデスクトップをパンパンにしてたら、多少は重さを感じるのかも知れませんが。
サブモニターって、素早く見られればいいものだしな。







HDCP 対応*)	すべての Mac システム / macOS 環境で「なし」
*) HDCP に関する注意点：Silicon Motion 技術は HDCP（コピー保護機能）非対応のため、Silicon Motion 技術による USB グラフィック変換製品経由で接続されたモニターでは、HDCP 保護されたコンテンツ（Blu-ray、Netflix、Amazon Prime ビデオなど）は表示できません。これは、Windows でも macOS でも同じです。




少なくとも、
Silicon Motion ドライバとソフトウェア
USB Displayの








グラフィックアクセラレーション



triple-monitor