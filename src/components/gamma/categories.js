import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { CategoryWrapper } from "./gammaStyles"

const Categories = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      categories: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/categorieen/" } }
        sort: { fields: frontmatter___name }
      ) {
        edges {
          node {
            frontmatter {
              image {
                childImageSharp {
                  fluid(maxWidth: 250, quality: 76) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              name
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <CategoryWrapper>
      {data.categories.edges.map(item => (
        <Link to={`/gamma${item.node.fields.slug}`} className="category__card">
          <h3>{item.node.frontmatter.name}</h3>
          <Img
            fluid={item.node.frontmatter.image[0].childImageSharp.fluid}
            alt={item.node.frontmatter.name}
            className="category__card__image"
          />
        </Link>
      ))}
    </CategoryWrapper>
  )
}

export default Categories
