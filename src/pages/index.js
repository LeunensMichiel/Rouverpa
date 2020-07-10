import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo/seo"
import Layout from "../components/layout"
import { Video } from "../components/video/video"
import GammaIndex from "../components/gamma/gammaIndex"

const IndexPage = () => (
  <Layout>
    <SEO title="Rouverpa homepagina" />
    <Video />
    <GammaIndex />
  </Layout>
)

export default IndexPage
