require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Stylo de Cerise - Web Design & Web developer",
    description: "Gatsby+Contentful WebデザイナーノBLOG",
    siteUrl: "https://www.studiomic.net",
    author: 'Sakura.i',
    developer: "Studiomic",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        defaults: {
            formats: [
                `auto`,
                `webp`,
                `avif`,
            ],
            quality: 100,
            placeholder: "blurred",
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/pages/notes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `featuredImage`,
        path: `${__dirname}/src/pages/notes/asset/`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs-title',
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {
                js: 'javascript',
                sh: 'bash',
              },
              showLineNumbers: true, //行数を出したい場合trueに。
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
        enableTags: true,
      },
    },
  ],
};
