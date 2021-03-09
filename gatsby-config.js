module.exports = {
  siteMetadata: {
    title: "Rouverpa",
    description: `Rouverpa is een leverancier dat al meer dan 30 jaar gespecialiseerd is in serviceverpakkingen en etiketten. Onze klanten bevinden zich in de bloemensector, chocoladesector, etc.`,
    author: `@leunesmedia`,
    siteUrl: `https://www.rouverpa.be`,
    keywords: [
      `rouverpa`,
      `verpakkingen`,
      `etiketten`,
      `serviceverpakking`,
      `bloemensector`,
      `chocoladesector`,
      `linten`,
      `folie`,
      `verpakkingspapier`,
      `leverancier`,
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-remark",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rouverpa`,
        short_name: `Rouverpa`,
        description: `Rouverpa is een bedrijf dat al meer dan 30 jaar gespecialiseerd is in serviceverpakkingen en etiketten. Onze klanten bevinden zich in de bloemensector, chocoladesector, etc.`,
        start_url: `/`,
        background_color: `#F0EEEE`,
        theme_color: `#FF243A`,
        display: `browser`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `fr`, `nl`],
        defaultLanguage: `nl`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://rouverpa.be/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: ".",
          nsSeparator: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"],
              fontDisplay: "swap",
              strategy: "selfHosted",
            },
            {
              family: "Montserrat",
              variants: ["400"],
              fontDisplay: "swap",
              strategy: "selfHosted",
            },
          ],
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-optimize-svgs",
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
  ],
}
