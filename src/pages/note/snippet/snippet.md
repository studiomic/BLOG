
````const options = {
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
````