---
title: "CODE3"
date: "2025-06-09 19:00:00"
slug: 'code-3'
type: "Gatsbyプラグインとかなしで。SEOに書くだけ"
---

```js
      createPage({
        path: /notes/${note.node.frontmatter.slug}/,
        component: notePost,
        context: {
          slug: note.node.frontmatter.slug,
          previous:previousNotetSlug,
          next:nextNoteSlug,
          previousTitle:previousNotetTitle,
          nextTitle:nextNoteTitle,
          id: note.node.id,
        },
      })
```