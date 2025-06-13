import React from 'react'
// import parse from 'html-react-parser';
// import React, { useEffect } from 'react';
// import parse from 'html-react-parser';
//     const parseed = parse(File);

import { codeToHtml } from "shiki";



const highlight = () => {


const html = await codeToHtml('console.log("Hello, World!")', {
    lang: "javascript",
    theme: "github-dark",
});

    
    return (
        // <div dangerouslySetInnerHTML={{ __html: html }}></div>

        <div className="code-block">{html}</div>
    )
}
export default highlight


// const hljsCode = () => {
//     useEffect(() => {
//         hljs.initHighlighting();
//         // React環境だと初回以降ハイライト処理が入らないため外部からフラグをfalseに
//         hljs.initHighlighting.called = false;
//     });
//     return <hljs />;

    // const snippet = `snippet`;

    // return (
    // <div>
    //     <h3>parse</h3>
        
    //         <pre>
    //             <code>
                    
    //             {parse(snippet)}

    //             </code>
    //         </pre>
    // </div>
    // )
// }
// export default hljsCode

// export default hljsCode

// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// import 'highlight.js/styles/atom-one-dark.css';

// hljs.registerLanguage('javascript', javascript);

// const ArticleComponent = () => {
//     useEffect(() => {
//         hljs.initHighlighting();
//         // React環境だと初回以降ハイライト処理が入らないため外部からフラグをfalseに
//         hljs.initHighlighting.called = false;
//     });
//     return <Article />;
// }


// useEffect(() => {
    //     hljs.initHighlighting();
    //     // React環境だと初回以降ハイライト処理が入らないため外部からフラグをfalseに
    //     hljs.initHighlighting.called = false;
    // });