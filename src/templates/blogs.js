import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo/seo"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

const BlogsContainer = styled.section`
  grid-column: 4 / span 8;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${p => p.theme.space[8]} 0;

  a {
    margin-bottom: ${p => p.theme.space[6]};
    &:hover,
    &:focus {
      color: inherit;
    }
  }

  h1 {
    margin-bottom: ${p => p.theme.space[3]};
  }

  small {
    display: block;
    margin-bottom: ${p => p.theme.space[6]};
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
    h1 {
      font-size: ${p => p.theme.fontSizes[3]};
    }
  }
`

const Blogs = ({ data }) => {
  const { t, i18n } = useTranslation()
  return (
    <Layout>
      <SEO
        title={t("blog.SEO.title")}
        description={t("blog.SEO.description")}
        lang={i18n.language}
      />
      <BlogsContainer>
        {data.md.edges.map(edge => (
          <Link key={edge.node.fields.slug} to={edge.node.fields.slug}>
            <h1>{edge.node.frontmatter.seoTitle}</h1>
            <small>
              {new Date(edge.node.frontmatter.date).toLocaleDateString(
                i18n.language
              )}
            </small>
            <p>{edge.node.frontmatter.seoDescription}</p>
          </Link>
        ))}
      </BlogsContainer>
    </Layout>
  )
}

export default Blogs

export const query = graphql`
  query($language: String!) {
    md: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/markdown/blog/" }
        frontmatter: { lang: { eq: $language } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            lang
            seoTitle
            seoDescription
            date
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
