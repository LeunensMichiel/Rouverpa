import React from "react"

import SEO from "../components/seo/seo"
import Layout from "../components/layout"
import { Video } from "../components/video/video"
import GammaIndex from "../components/gamma/gammaIndex"
import About from "../components/about/about"
import Interested from "../components/interested/interested"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Verpakkingen & etiketten"
      description="Rouverpa is een leverancier dat al meer dan 30 jaar gespecialiseerd is in serviceverpakkingen en etiketten. Hun klanten bevinden zich in de bloemensector, chocoladesector, etc."
    />
    <Video />
    <GammaIndex />
    <About />
    <Interested />
  </Layout>
)

export default IndexPage
