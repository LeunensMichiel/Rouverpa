import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

const Article = styled.article`
  grid-column: 4 / span 8;
  padding: ${p => p.theme.space[8]} 0;

  & > * {
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: 4rem;
  }

  em {
    display: block;
  }

  strong {
    color: ${({ theme }) => theme.colors.accentp2};
    font-weight: 700;
  }

  > ul {
    list-style: disc;

    ul {
      padding-left: 1.5rem;
      list-style: decimal;
    }
  }

  blockquote {
    font-weight: 700;
    border-left: 4px solid ${({ theme }) => theme.colors.accentp2};
    color: ${({ theme }) => theme.colors.black34};
    padding-left: 12px;
  }

  a {
    font-weight: 700;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.black34};
  }

  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }

  .gatsby-resp-image-wrapper {
    max-width: unset !important;
    max-height: 50vh;
    display: flex !important;
    justify-content: center;
    img {
      left: unset !important;
      width: auto !important;
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;

    ul {
      list-style-position: inside;
    }

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
