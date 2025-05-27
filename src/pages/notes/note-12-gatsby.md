---
title: "Sass legacy-js-API対応、Gatsbyの場合"
date: "2025-05-26 19:00:00"
slug: 'sass-legacy-js-api'
description: "gatsby-config.jsへオプションを加筆"
book:
music:
# featuredImage: "asset/Gatsbyartdeco.avif"
featuredImage: "asset/Pattern9.avif"
---

Gatsby Developで作業しながら、警鐘コメントがiTermにたびたび流れてうるさかったが、長らく放置していた。

Deprecation Warningが出る理由は、 <a href="https://zenn.dev/levtech/articles/1174c95ef81cbb" target="_blank" rel="noopener noreferrer">**Nuxtで Deprecation Warning: The legacy JS API is deprecated が発生したら**</a> というZennの投稿が非常にわかりやすかった。

<span style="display: block;margin-bottom: 2em;"></span>

引用させていただくと

- 元々はNode SassベースのAPIが存在した（legacy API）
- 1.45.0から新しいAPIが誕生（new, modern API）
- legacy APIは2.0.0で廃止予定
- 1.79.0からlegacy APIを使っている場合に警告を出すようになった

<hr>

要はビルドツールがGatsby、Nuxt、Viteだといった種別は関係なく**node_modules**の<a href="https://www.npmjs.com/package/sass" rel="noopener">Sass</a><br>
node_modules/sass/sass.dart.jsに<br>
廃止する予定の"legacy-js-api"だと書いてあり

```JS
B.Deprecation_F8y = new A.Deprecation0("legacy-js-api", "1.79.0", "Legacy JS API.", "legacyJsApi");
B.Deprecation_fsU = new A.Deprecation("legacy-js-api", "1.79.0", "legacyJsApi");
```

node_modules/sass/types/deprecations.d.ts には警告文が載っていた。

<span style="display: block;margin-bottom: 3em;"></span>


## All of the deprecation types currently used by Sass.
（Sass で現在使用されているすべての非推奨タイプ。） ー がいつから警告だすか列挙してあった。

```JS
/**
   * Deprecation for legacy JS API.
   *
   * This deprecation became active in Dart Sass 1.79.0.
   */
  'legacy-js-api': Deprecation<'legacy-js-api'>;

  /**
   * Deprecation for @import rules.
   *
   * This deprecation became active in Dart Sass 1.80.0.
   */
  import: Deprecation<'import'>;
```

<span style="display: block;margin-bottom: 2em;"></span>

ここまではVS Codeで検索して見つかったが、なぜ警告文の対象になっているのかが <b>？？</b> だったのが、<br>
先のZennの投稿で （おぉ。なるほど） と理解+納得できたので、あとは対処。

<hr>

<span style="display: block;margin-bottom: 2em;"></span>


# gatsby-config.js に sassOptions: を追加

```js:title=gatsby-config.js
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          api: "modern",
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
```

Gatsbyさん、日本語文書は充実してないけども。<br>
英語圏のディスカッションはわかりやすい。

GitHub の Discussionsからマルっとコピー。

<a href="https://github.com/gatsbyjs/gatsby/discussions/39146" target="_blank" rel="noopener noreferrer">DEPRECATION WARNING: The legacy JS API is deprecated 
and will be removed in Dart Sass 2.0.0.</a><br>
訳：/ 非推奨の警告: レガシー JS API は非推奨であり、Dart Sass 2.0.0 で削除されます。




<span style="display: block;margin-bottom: 4em;"></span>

sassOptions:には、modern APIを使う,
```js
api: "modern",
```
と
非推奨の警告には沈黙してもらう,　の2行を書いて解決。

```js
silenceDeprecations: ['legacy-js-api'],
```


