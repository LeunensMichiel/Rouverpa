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

const product = ({ data, pageContext }) => {
  const currentCategory = data.categories.edges.filter(
    cat => cat.node.frontmatter.name === data.product.frontmatter.category
  )
  console.log(currentCategory)
  return (
    <Layout>
      <Breadcrumb>
        <div className="crumbs__list">
          <Link to="/gamma/" activeClassName="crumb__active">
            Ons gamma
          </Link>
          <Chevron />
          <Link
            to={`/gamma${currentCategory[0].node.fields.slug}`}
            activeClassName="crumb__active"
          >
            {data.product.frontmatter.category}
          </Link>
          <Chevron />
          <Link
            to={`/gamma${data.product.fields.slug}`}
            activeClassName="crumb__active"
          >
            {data.product.frontmatter.title}
          </Link>
        </div>
        <Link to="/contact?type=offerte" className="link__styled">
          Offerte aanvragen
        </Link>
      </Breadcrumb>
      <SideProductNav>
        <h1>{data.product.frontmatter.category}</h1>
        <div className="sidenav">
          {data.categories.edges.map(item => (
            <Link
              to={`/gamma${item.node.fields.slug}`}
              activeClassName="sidenav__active"
            >
              {item.node.frontmatter.name}
              {item.node.frontmatter.name.toLowerCase() ===
                data.product.frontmatter.category.toLowerCase() && (
                <div className="sidenav__sub">
                  {data.products.edges.map(product => (
                    <Link
                      to={`/gamma${product.node.fields.slug}`}
                      activeClassName="sidenav__active"
                    >
                      {product.node.frontmatter.title}
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </SideProductNav>
      {/* <CategoryWrapper>
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
      </CategoryWrapper> */}
    </Layout>
  )
}

export default product

export const singleProduct = graphql`
  query productQuery($slug: String!, $category: String!) {
    product: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
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
        image {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
      fields {
        slug
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
            category
            title
          }
        }
      }
    }
  }
`
