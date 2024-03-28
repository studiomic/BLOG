// グローバル汚染を防ぐために即時関数を使用
(function (global) {
	"use strict";

	const switchMode = (changeDark) => {
			if (changeDark) {
					// html に "Dark" クラスをセットしてダークモードに切り替える
					global.document.documentElement.classList.add("darkmode");
					// localStorage にダークモードであるという情報を保存する
					localStorage.setItem("dark", "on");
					return;
			}
			// html から "Dark" クラスを削除してライトモードに切り替える
			global.document.documentElement.classList.remove("darkmode");
			// localStorage からダークモードであるという情報を削除する
			localStorage.removeItem("dark");
	};

	// DOMContentLoaded 時に実行する処理を登録する
	global.document.addEventListener("DOMContentLoaded", () => {
			// 「ライトモードにする」ボタンをクリック時にライトモードにするイベントを追加
			const lightButton = global.document.getElementById("ModeButton--light");
			lightButton.addEventListener("click", () => {
					switchMode(false);
			});
			// 「ダークモードにする」ボタンをクリック時にダークモードにするイベントを追加
			const darkButton = global.document.getElementById("ModeButton--dark");
			darkButton.addEventListener("click", () => {
					switchMode(true);
			});
	});
})(globalThis);