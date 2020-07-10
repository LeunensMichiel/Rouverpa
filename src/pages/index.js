import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo/seo"
import Layout from "../components/layout"
import { Video } from "../components/video/video"

const IndexPage = () => (
  <Layout>
    <SEO title="Rouverpa homepagina" />
    <Video />
    {/* <h1 style={{ marginTop: "900px" }}>Test</h1> */}
  </Layout>
)

export default IndexPage
