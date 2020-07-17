import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import {
  CategoryWrapper,
  Breadcrumb,
  SideProductNav,
} from "../components/gamma/gammaStyles"
import Chevron from "../assets/icons/chevron.svg"

const category = ({ data, pageContext }) => {
  return (
    <Layout>
      <Breadcrumb>
        <div className="crumbs__list">
          <Link to="/gamma/" activeClassName="crumb__active">
            Ons gamma
          </Link>
          <Chevron />
          <Link
            to={`/gamma${pageContext.slug}`}
            activeClassName="crumb__active"
          >
            {pageContext.category}
          </Link>
        </div>
        <Link to="/contact?type=offerte" className="link__styled">
          Offerte aanvragen
        </Link>
      </Breadcrumb>
      <SideProductNav>
        <h1>Categorieën</h1>
        <div className="sidenav">
          {data.categories.edges.map(item => (
            <Link
              to={`/gamma${item.node.fields.slug}`}
              activeClassName="sidenav__active"
            >
              {item.node.frontmatter.name}
              {item.node.frontmatter.name.toLowerCase() ===
                pageContext.category.toLowerCase() && (
                <div className="sidenav__sub">
                  {data.products.edges.map(product => (
                    <Link to={`/gamma${product.node.fields.slug}`}>
                      {product.node.frontmatter.title}
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </SideProductNav>
      <CategoryWrapper>
        {data.products.edges.map(item => (
          <Link
            to={`/gamma${item.node.fields.slug}`}
            className="category__card"
          >
            <h3>{item.node.frontmatter.title}</h3>
            <Img
              fluid={item.node.frontmatter.image[0].childImageSharp.fluid}
              alt={item.node.frontmatter.title}
              className="category__card__image"
            />
          </Link>
        ))}
      </CategoryWrapper>
    </Layout>
  )
}

export default category

export const itemsForCategory = graphql`
  query categoryQuery($category: String!) {
    products: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/producten/" }
        frontmatter: { category: { eq: $category } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 250, quality: 76) {
                  ...GatsbyImageSharpFluid_withWebp
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
    categories: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/categorieen/" } }
      sort: { fields: frontmatter___name }
    ) {
      edges {
        node {
          frontmatter {
            name
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
