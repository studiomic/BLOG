<!-- ---
title: "Markdownはじめました"
date: "2023-06-03 10:00:00"
slug: 'note-01'
description: "冷やし中華の話ではなく、Notesコンテンツを増設した話。"
--- -->

## Marakdown Code

Gatsbyおもしろ過ぎて、寝不足続き。<br>
半角スペースがなければ・・・

パラグラフはどうだ


```javascript:title=BlogPostTemplate.js
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
    const { gatsbyImage, description } = node.data.target
    return (
      <GatsbyImage
          image={getImage(gatsbyImage)}
          alt={description}
        />
      )
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.length === 1 &&
        node.content[0].marks.find((x) => x.type === "code")
      ) {
        return <div>{children}</div>;
      }
      return <p>{children}</p>;
    },
  },
  renderMark: {
    [MARKS.CODE]: text => (
      <SyntaxHighlighter language="javascript" style={okaidia} showLineNumbers>
        {text}
      </SyntaxHighlighter>
    ),
  },
};
```

長めなCodeを

