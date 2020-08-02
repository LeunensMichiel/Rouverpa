import React from "react"

import Info from "../components/contact/info"
import Layout from "../components/layout"
import Map from "../components/contact/map"
import Form from "../components/contact/form"
import SEO from "../components/seo/seo"

const Contact = ({ location }) => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contactgegevens en formulier voor offertes en vragen voor Rouverpa."
      />
      <Info />
      <Form location={location} />
      <Map />
    </Layout>
  )
}

export default Contact
