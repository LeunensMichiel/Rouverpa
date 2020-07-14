import React, { useState } from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import Navbar from "./navigation/navbar"
import Footer from "./footer/footer"
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}
const mainCss = css`
  width: 100%;
  min-height: 90%;
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
  flex: 1 1 auto;
  padding-top: 136px;

  @media (max-width: 767px) {
    padding-top: 72px;
  }
`

const IsIE = () => {
  if (typeof window !== `undefined`) {
    return window.navigator.userAgent.match(/(MSIE|Trident)/)
  }
}
const Layout = ({ children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  if (IsIE()) {
    alert(
      "Internet Explorer is oud en wordt niet meer ondersteund. De site zal hier niet goed op draaien. Gelieve een moderne browser te downloaden zoals Google Chrome of Firefox"
    )
    window.open("https://www.google.com/intl/nl/chrome/")
  }
  return (
    <>
      <Navbar
        show={sideDrawerOpen}
        hamburgerClickHandler={() => {
          setSideDrawerOpen(!sideDrawerOpen)
          document.getElementById("hamburger").classList.toggle("is-active")
        }}
      />
      <main css={mainCss} aria-hidden={sideDrawerOpen}>
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
