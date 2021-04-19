import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout"
import {
  Breadcrumb,
  SideProductNav,
  ProductDetailScreen,
} from "../components/gamma/gammaStyles"
import Chevron from "../assets/icons/chevron.svg"
import SEO from "../components/seo/seo"

const Product = ({ data }) => {
  const currentCategory = data.categories.edges.filter(
    cat => cat.node.frontmatter.key === data.product.frontmatter.category
  )
  const { t, i18n } = useTranslation()

  return (
    <Layout>
      <SEO
        title={data.product.frontmatter[`title${i18n.language.toUpperCase()}`]}
        description={
          data.product.frontmatter[`description${i18n.language.toUpperCase()}`]
        }
        lang={i18n.language}
      />
      <Breadcrumb>
        <div className="crumbs__list">
          <Link to="/gamma/" activeClassName="crumb__active">
            {t("gamma.breadcrumb.gamma")}
          </Link>
          <Chevron />
          <Link
            to={`/gamma${currentCategory[0].node.fields.slug}`}
            activeClassName="crumb__active"
          >
            {
              currentCategory[0].node.frontmatter[
                `name${i18n.language.toUpperCase()}`
              ]
            }
          </Link>
          <Chevron />
          <Link
            to={`/gamma${data.product.fields.slug}`}
            activeClassName="crumb__active"
          >
            {data.product.frontmatter[`title${i18n.language.toUpperCase()}`]}
          </Link>
        </div>
        <Link to="/contact?type=offerte" className="link__styled">
          {t("gamma.breadcrumb.quotation")}
        </Link>
      </Breadcrumb>
      <SideProductNav>
        <h1>
          {
            currentCategory[0].node.frontmatter[
              `name${i18n.language.toUpperCase()}`
            ]
          }
        </h1>
        <div className="sidenav">
          {data.categories.edges.map(item => (
            <Link
              to={`/gamma${item.node.fields.slug}`}
              key={item.node.fields.slug}
              activeClassName="sidenav__active"
            >
              {item.node.frontmatter[`name${i18n.language.toUpperCase()}`]}
              {item.node.frontmatter.key.toLowerCase() ===
                data.product.frontmatter.category.toLowerCase() && (
                <div className="sidenav__sub">
                  {data.products.edges.map(product => (
                    <Link
                      to={`/gamma${product.node.fields.slug}`}
                      activeClassName="sidenav__active"
                      key={product.node.fields.slug}
                    >
                      {
                        product.node.frontmatter[
                          `title${i18n.language.toUpperCase()}`
                        ]
                      }
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </SideProductNav>
      <ProductDetailScreen>
        <div>
          {data.product.frontmatter.image.map(img => (
            <Img
              key={img.childImageSharp.id}
              fluid={img.childImageSharp.fluid}
              alt={
                data.product.frontmatter[`title${i18n.language.toUpperCase()}`]
              }
              title={
                data.product.frontmatter[`title${i18n.language.toUpperCase()}`]
              }
              className="product__image"
            />
          ))}
        </div>
        <div className="details">
          <h3>
            {
              currentCategory[0].node.frontmatter[
                `name${i18n.language.toUpperCase()}`
              ]
            }
          </h3>
          <h1>
            {data.product.frontmatter[`title${i18n.language.toUpperCase()}`]}
          </h1>
          <p>
            {
              data.product.frontmatter[
                `description${i18n.language.toUpperCase()}`
              ]
            }
          </p>
          <h3>Details</h3>
          <ul>
            {data.product.frontmatter[
              `details${i18n.language.toUpperCase()}`
            ].map(detail => (
              <li key={detail}>{detail}</li>
            ))}
            {data.product.frontmatter.extra && (
              <li>
                <a
                  target="_blank"
                  href={data.product.frontmatter.extra.publicURL}
                  rel="noopener noreferrer"
                >
                  <Img
                    fixed={data.product.frontmatter.extra.childImageSharp.fixed}
                  />
                </a>
              </li>
            )}
          </ul>
        </div>
      </ProductDetailScreen>
    </Layout>
  )
}

export default Product

export const singleProduct = graphql`
  query productQuery($slug: String!, $category: String!, $language: String!) {
    product: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        category
        descriptionNL
        descriptionEN
        descriptionFR
        detailsNL
        detailsEN
        detailsFR
        extra {
          childImageSharp {
            fixed(width: 150, quality: 50) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
          publicURL
        }
        titleNL
        titleFR
        titleEN
        image {
          childImageSharp {
            id
            fluid(maxWidth: 250, quality: 76) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
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
      sort: { fields: frontmatter___nameNL }
    ) {
      edges {
        node {
          frontmatter {
            nameNL
            nameEN
            nameFR
            key
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
            titleNL
            titleFR
            titleEN
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
