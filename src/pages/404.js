import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout"

const NotFoundWrapper = styled.div`
  grid-column: 2 / span 12;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  a {
    text-decoration: underline;
    font-weight: 700;
  }
`
const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <NotFoundWrapper>
        <h1>{t("404.title")}</h1>
        <p>
          {t("404.message")} <Link to="/">{t("404.home")}</Link>.
        </p>
      </NotFoundWrapper>
    </Layout>
  )
}

export default NotFoundPage
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
