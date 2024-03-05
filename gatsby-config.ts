import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/name-square-logo.svg",
      },
    },
    {
      resolve: "gatsby-source-newt",
      options: {
        spaceUid: process.env.NEWT_SPACE_UID,
        token: process.env.NEWT_CDN_API_TOKEN,
        appUid: "blog-551586",
        models: [
          {
            uid: "article",
          },
        ],
      },
    },
  ],
};

export default config;
