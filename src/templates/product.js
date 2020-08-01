import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import {
  Breadcrumb,
  SideProductNav,
  ProductDetailScreen,
} from "../components/gamma/gammaStyles"
import Chevron from "../assets/icons/chevron.svg"

const product = ({ data, pageContext }) => {
  const currentCategory = data.categories.edges.filter(
    cat => cat.node.frontmatter.name === data.product.frontmatter.category
  )
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
              key={item.node.fields.slug}
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
                      key={product.node.fields.slug}
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
      <ProductDetailScreen>
        <Img
          fluid={data.product.frontmatter.image[0].childImageSharp.fluid}
          alt={data.product.frontmatter.title}
          className="product__image"
        />
        <div className="details">
          <h3>{data.product.frontmatter.category}</h3>
          <h1>{data.product.frontmatter.title}</h1>
          <p>{data.product.frontmatter.description}</p>
          <h3>Details</h3>
          <ul>
            {data.product.frontmatter.details.map(detail => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </ProductDetailScreen>
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
            fluid(maxWidth: 250, quality: 76) {
              ...GatsbyImageSharpFluid_withWebp
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