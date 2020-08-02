import React from "react"

import Layout from "../components/layout"
import Categories from "../components/gamma/categories"
import SEO from "../components/seo/seo"
const Gamma = () => {
  return (
    <Layout>
      <SEO
        title="Gamma"
        description="Bekijk hier het volledige assortiment van Rouverpa, leverancier van o.a. draagtassen, etiketten, drukwerk, folie, linten, verpakkingspapier en meer."
      />
      <Categories />
    </Layout>
  )
}

export default Gamma
