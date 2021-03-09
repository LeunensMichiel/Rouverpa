import React from "react"
import styled from "@emotion/styled"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
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
const ThanksPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <NotFoundWrapper>
        <h1>{t("thanks.title")}</h1>
        <p>
          {t("thanks.message")} <Link to="/">{t("thanks.home")}</Link>.
        </p>
      </NotFoundWrapper>
    </Layout>
  )
}

export default ThanksPage
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
