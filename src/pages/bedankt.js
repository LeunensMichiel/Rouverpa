import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFoundWrapper = styled.div`
  grid-column: 2 / span 12;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  a {
    text-decoration: underline;
    font-weight: 700;
  }
`
const ThanksPage = () => (
  <Layout>
    <NotFoundWrapper>
      <h1>Bedankt om ons te contacteren!</h1>
      <p>
        We beantwoorden uw vraag/offerte zo snel mogelijk. Ga terug naar de{" "}
        <Link to="/">homepagina</Link>.
      </p>
    </NotFoundWrapper>
  </Layout>
)

export default ThanksPage
