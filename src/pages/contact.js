import React from "react"

import Info from "../components/contact/info"
import Layout from "../components/layout"
import Map from "../components/contact/map"
import Form from "../components/contact/form"

const Contact = ({ location }) => {
  return (
    <Layout>
      <Info />
      <Form location={location} />
      <Map />
    </Layout>
  )
}

export default Contact
