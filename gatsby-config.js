module.exports = {
  // pathPrefix: "/BLOG",
  siteMetadata: {
    title: "Studio Mic - Nakano - Stylo de Cerise",
    description: "Web Design & Web developer - Web屋ノ私的note",
    siteUrl: "https://www.studiomic.net",
    author: 'Sakura.i',
    developer: "StudioMic",
    // image: `/gatsby-icon.png`,
  },
  plugins: [
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
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          api: "modern",
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    }
  ],
};
