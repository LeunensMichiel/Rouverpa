import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { CategoryWrapper, Breadcrumb, SideProductNav } from "./gammaStyles"
import { Link } from "gatsby-plugin-react-i18next"

const Categories = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      categories: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/categorieen/" } }
        sort: { fields: frontmatter___name }
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
    <>
      <Breadcrumb>
        <Link to="/gamma/" activeClassName="crumb__active">
          Ons gamma
        </Link>
        <Link to="/contact?type=offerte" className="link__styled">
          Offerte aanvragen
        </Link>
      </Breadcrumb>
      <SideProductNav>
        <h1>Gamma</h1>
        <div className="sidenav">
          {data.categories.edges.map(item => (
            <Link to={`/gamma${item.node.fields.slug}`} key={item.node.id}>
              {item.node.frontmatter.name}
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
            <h3>{item.node.frontmatter.name}</h3>
            <Img
              fluid={item.node.frontmatter.image[0].childImageSharp.fluid}
              alt={item.node.frontmatter.name}
              className="category__card__image"
            />
          </Link>
        ))}
      </CategoryWrapper>
    </>
  )
}

export default Categories
