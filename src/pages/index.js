import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import SEO from "../components/seo/seo"
import Layout from "../components/layout"
import { Video } from "../components/video/video"
import GammaIndex from "../components/gamma/gammaIndex"
import About from "../components/about/about"
import Interested from "../components/interested/interested"

const IndexPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO
        title={t("home.SEO.title")}
        description={t("home.SEO.description")}
      />
      <Video />
      <GammaIndex />
      <About />
      <Interested />
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
