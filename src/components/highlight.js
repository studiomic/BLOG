// import React from 'react'
// import parse from 'html-react-parser';
import React, { useEffect } from 'react';

import parse from 'html-react-parser';

// import hljs from 'highlight.js/lib/core';
import hljs from 'highlight.js';

// import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';
import 'highlight.js/styles/lioshi.css';

hljs.registerLanguage('javascript', javascript);

const hljsCode = ({ File }) => {
    const parseed = parse(File);
    const hljs = File;




    useEffect(() => {
<pre dangerouslySetInnerHTML={{ __html: File }} />
        hljs.initHighlighting();
        // React環境だと初回以降ハイライト処理が入らないため外部からフラグをfalseに
        hljs.initHighlighting.called = false;

    });
    return (
        
        <pre><code>
            1{parseed}
            2{hljs}
        </code></pre>


    )
}
export default hljsCode


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