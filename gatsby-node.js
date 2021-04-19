const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const NON_DEFAULT_LANGUAGES = ["fr", "en"]

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
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/markdown/blog/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              lang
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
      const customPath = NON_DEFAULT_LANGUAGES.includes(langNode.language)
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
      const customPath = NON_DEFAULT_LANGUAGES.includes(langNode.language)
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

  result.data.locales.edges.forEach(({ node: langNode }) => {
    createPage({
      path: "blogs",
      component: path.resolve(`./src/templates/blogs.js`),
      context: {
        language: langNode.language,
      },
    })
  })

  result.data.posts.edges.forEach(({ node }) => {
    result.data.locales.edges.forEach(({ node: langNode }) => {
      if (langNode.language === node.frontmatter.lang) {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog.js`),
          context: {
            post: node.id,
            language: langNode.language,
          },
        })
      }
    })
  })
}
