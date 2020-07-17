import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const category = ({ data }) => {
  return (
    <Layout>
      {data.categories.edges.map(node => (
        <h1>{node.node.frontmatter.title}</h1>
      ))}
    </Layout>
  )
}

export default category

export const itemsForCategory = graphql`
  query categoryQuery($category: String!) {
    categories: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/producten/" }
        frontmatter: { category: { eq: $category } }
      }
    ) {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
            category
            description
            details
            extra {
              childImageSharp {
                original {
                  src
                }
              }
            }
            title
          }
        }
      }
    }
  }
`
