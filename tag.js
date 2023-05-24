const path = require("path")
exports.createPages = async({ graphql, actions, reporter}) => {
const { createPage } = actions

const result = await graphql(`
	{
	allContentfulArticles(sort: {fields: createdAt, order: DESC}) {
		edges {
		node {
			id
			title
			description {
				description
			}
			thumbnail {
			file {
				url
			}
			}
			body {
			childMarkdownRemark {
				html
			}
			}
			createdAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
			metadata {
			tags {
				contentful_id
				name
			}
			}
		}
		}
	}  
	}
`)

if (result.errors) {
	reporter.panicOnBuild(`Error while runnning GraphQL query.`)
	return
}

const { edges } = result.data.allContentfulArticles
const articlesByTag = {}

edges.forEach(edge => {
	// 記事ページ生成
	createPage({
	path: `/articles/${edge.node.id}/`,
	component: path.resolve("./src/templates/article.js"),
	context: { article: edge.node }
	})

	// タグに紐付く記事のオブジェクトを作成
	edge.node.metadata.tags.forEach((tag) => {
	if (tag.contentful_id in articlesByTag) {
		articlesByTag[tag.contentful_id].contents.push(edge.node)
	} else {
		articlesByTag[tag.contentful_id] = {
		name: tag.name,
		contents: [edge.node]
		}
	}
	})
})

	// タグページの生成
	Object.keys(articlesByTag).forEach((tagId) => {
		createPage({
		path: `/tags/${tagId}`,
		component: path.resolve("./src/templates/article-list-by-tag.js"),
		context: {
			name: articlesByTag[tagId].name,
			contents: articlesByTag[tagId].contents,
		}
		})
	})
}