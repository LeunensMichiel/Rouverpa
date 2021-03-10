import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { CategoryWrapper, Breadcrumb, SideProductNav } from "./gammaStyles"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const Categories = () => {
  const { t, i18n } = useTranslation()
  const data = useStaticQuery(graphql`
    query MyQuery {
      categories: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/categorieen/" } }
        sort: { fields: frontmatter___nameNL }
      ) {
        edges {
          node {
            id
            frontmatter {
              image {
                childImageSharp {
                  fluid(maxWidth: 250, quality: 76) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              nameNL
              nameEN
              nameFR
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
    <>
      <Breadcrumb>
        <Link to="/gamma/" activeClassName="crumb__active">
          {t("gamma.breadcrumb.gamma")}
        </Link>
        <Link to="/contact?type=offerte" className="link__styled">
          {t("gamma.breadcrumb.quotation")}
        </Link>
      </Breadcrumb>
      <SideProductNav>
        <h1> {t("gamma.sideNav.gamma")}</h1>
        <div className="sidenav">
          {data.categories.edges.map(item => (
            <Link to={`/gamma${item.node.fields.slug}`} key={item.node.id}>
              {item.node.frontmatter[`name${i18n.language.toUpperCase()}`]}
            </Link>
          ))}
        </div>
      </SideProductNav>
      <CategoryWrapper>
        {data.categories.edges.map(item => (
          <Link
            to={`/gamma${item.node.fields.slug}`}
            className="category__card"
            key={item.node.id}
          >
            <h3>
              {item.node.frontmatter[`name${i18n.language.toUpperCase()}`]}
            </h3>
            <Img
              fluid={item.node.frontmatter.image[0].childImageSharp.fluid}
              alt={item.node.frontmatter[`name${i18n.language.toUpperCase()}`]}
              className="category__card__image"
            />
          </Link>
        ))}
      </CategoryWrapper>
    </>
  )
}

export default Categories
