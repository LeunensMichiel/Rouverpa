import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import Categories from "../components/gamma/categories"
import SEO from "../components/seo/seo"
const Gamma = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO
        title={t("gamma.SEO.title")}
        description={t("gamma.SEO.description")}
      />
      <Categories />
    </Layout>
  )
}

export default Gamma

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
