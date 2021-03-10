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
      locales: allLocale {
        edges {
          node {
            ns
            data
            language
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
    result.data.locales.edges.forEach(({ node: langNode }) => {
      const customPath = ["en", "fr"].includes(langNode.language)
        ? `${langNode.language}/gamma${node.fields.slug}`
        : `gamma${node.fields.slug}`
      createPage({
        path: customPath,
        component: path.resolve(`./src/templates/category.js`),
        context: {
          category: node.frontmatter[`name${langNode.language.toUpperCase()}`],
          categoryKey: node.frontmatter.key,
          slug: node.fields.slug,
          language: langNode.language,
        },
      })
    })
  })

  result.data.products.edges.forEach(({ node }) => {
    result.data.locales.edges.forEach(({ node: langNode }) => {
      const customPath = ["en", "fr"].includes(langNode.language)
        ? `${langNode.language}/gamma${node.fields.slug}`
        : `gamma${node.fields.slug}`
      createPage({
        path: customPath,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          slug: node.fields.slug,
          category: node.frontmatter.category,
          language: langNode.language,
        },
      })
    })
  })
}
