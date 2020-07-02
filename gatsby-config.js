module.exports = {
  siteMetadata: {
    title: "Rouverpa",
    description: `Rouverpa is een bedrijf dat al meer dan 30 jaar gespecialiseerd is in serviceverpakkingen en etiketten. Onze klanten bevinden zich in de bloemensector, chocoladesector, etc.`,
    author: `@leunesmedia`,
    siteUrl: `https://www.rouverpa.be`,
    keywords: [
      `rouverpa`,
      `verpakkingen`,
      `sint-anna-pede`,
      `dilbeek`,
      `jeugd`,
      `jeugdbeweging`,
      `jokonta`,
      `allegro`,
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
