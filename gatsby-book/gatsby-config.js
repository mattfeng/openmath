module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/../book`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
              disableBgImageOnAlpha: true,
            }
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              lineNumbers: true,
            }
          }
        ],
      },
    },
  ],
}
