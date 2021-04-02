import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import styled from "@emotion/styled"
import SEO from "../components/seo/seo"
import Layout from "../components/layout"

const Article = styled.article`
  margin-top: 100px;
  margin-bottom: 3rem;
  grid-column: 4 / span 8;

  h1,
  h2 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: 3rem;
  }

  p,
  span {
    margin-bottom: 1.5rem;
  }

  em {
    display: block;
    margin-bottom: 1.5rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.accentp2};
    font-weight: 700;
  }

  > ul {
    list-style: disc;

    ul {
      padding-left: 1.5rem;
      list-style: none;
    }
  }

  blockquote {
    font-weight: 700;
    border-left: 4px solid ${({ theme }) => theme.colors.accentp2};
    padding-left: 12px;
  }

  a {
    font-weight: 700;
    text-decoration: underline;
  }
`

const EnvironmentPage = ({ data }) => {
  const { t, i18n } = useTranslation()
  const { html } = data.md.edges[0].node
  return (
    <Layout>
      <SEO
        title={t("environment.SEO.title")}
        description={t("environment.SEO.description")}
        lang={i18n.language}
      />
      <Article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
export default EnvironmentPage

export const query = graphql`
  query($language: String!) {
    md: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/environment/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            lang
          }
        }
      }
    }
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
