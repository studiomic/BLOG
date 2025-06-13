import React from 'react'
// import Layout from './../components/layout'
// import { codeToHast } from 'shiki'

import { codeToHtml } from "shiki";
// import { createHighlighter } from "shiki";




const highlight = () => {


const html = codeToHtml('console.log("Hello, World!")', {
    lang: "javascript",
    theme: "github-dark",
});

// const html = codeToHtml ('console.log("Hello, World!")', {
//     lang: "javascript",
//     theme: "github-dark",
// });
// const highlighter = createHighlighter({
//   // 必要な言語とテーマのみを指定することでバンドルサイズを最適化
//   themes: ["github-dark", "github-light"],
//   langs: ["javascript", "typescript", "css", "html"],
// });


return (
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    )
}
export default highlight


// 最もシンプルな使い方
// const html = await codeToHtml('console.log("Hello, World!")', {
//   lang: "javascript",
//   theme: "github-dark",
// });
// export default html



// より高度な使い方
// const highlighter = await createHighlighter({
//   themes: ["nord"],
//   langs: ["javascript", "typescript"],
// });

// 同期的に使用可能
// const code = highlighter.codeToHtml('const greeting: string = "Hello"', {
//   lang: "typescript",
//   theme: "nord",
// });




// import { getHighlighter } from "shiki";
// import { CODE } from "@/constants";

// export default async function HighlighterPage() {
//   const highlighter = await getHighlighter({
//     themes: ["github-light"],
//     langs: ["tsx"],
//   });

//   const html = highlighter.codeToHtml(CODE, {
//     lang: "tsx",
//     theme: "github-light",
//   });

//   return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
// }


// '<pre class="shiki light-plus" style="background-color:#FFFFFF;color:#000000" tabindex="0"><code><span class="line"><span style="color:#0000FF">const</span><span style="color:#0070C1"> foo</span><span style="color:#000000"> = </span><span style="color:#001080">document</span><span style="color:#000000">.</span><span style="color:#795E26">createElement</span><span style="color:#000000">(</span><span style="color:#A31515">"div"</span><span style="color:#000000">)</span></span></code></pre>'

// const Shiki = () => (
//   <Layout>
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '70svh',
//       }}
//     >
//       <h2>404: Not Found</h2>
//       <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//     </div>
//   </Layout>
// )

// export default Shiki




// const hast = await codeToHast('.text-red { color: red; }', {
//   lang: 'css',
//   theme: 'catppuccin-mocha',
	
// })

// console.log(hast) // highlighted html string

