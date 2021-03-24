import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Info from "../components/contact/info"
import Layout from "../components/layout"
import Map from "../components/contact/map"
import Form from "../components/contact/form"
import SEO from "../components/seo/seo"

const Contact = ({ location }) => {
  const { t, i18n } = useTranslation()
  return (
    <Layout>
      <SEO
        title={t("contact.SEO.title")}
        description={t("contact.SEO.description")}
        lang={i18n.language}
      />
      <Info />
      <Form location={location} />
      <Map />
    </Layout>
  )
}

export default Contact
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
