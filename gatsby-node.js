const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `markdown` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      categories: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/categorieen/" } }
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
        filter: { fileAbsolutePath: { regex: "/producten/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL pagination query.`)
    return
  }

  result.data.categories.edges.forEach(({ node }) => {
    createPage({
      path: `/gamma${node.fields.slug}`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        category: node.frontmatter.name,
        slug: node.fields.slug,
      },
    })
  })

  result.data.products.edges.forEach(({ node }) => {
    createPage({
      path: `/gamma${node.fields.slug}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        slug: node.fields.slug,
        category: node.frontmatter.category,
      },
    })
  })
}
