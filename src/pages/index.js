import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo/seo"
import Layout from "../components/layout"
import { Video } from "../components/video/video"
import GammaIndex from "../components/gamma/gammaIndex"
import About from "../components/about/about"
import Interested from "../components/interested/interested"

const IndexPage = () => (
  <Layout>
    <SEO title="Rouverpa homepagina" />
    <Video />
    <GammaIndex />
    <About />
    <Interested />
  </Layout>
)

export default IndexPage
