import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

const Article = styled.article`
  grid-column: 4 / span 8;
  padding: ${p => p.theme.space[8]} 0;

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

  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;

    h1 {
      font-size: ${p => p.theme.fontSizes[3]};
    }
  }
`

const Blog = ({ data }) => {
  const { i18n } = useTranslation()
  const {
    html,
    frontmatter: { seoDescription, seoTitle },
  } = data.md
  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} lang={i18n.language} />
      <Article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query($post: String!, $language: String!) {
    md: markdownRemark(id: { eq: $post }) {
      html
      id
      fields {
        slug
      }
      frontmatter {
        lang
        seoDescription
        seoTitle
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
