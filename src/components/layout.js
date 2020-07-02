import React from "react"
/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const mainCss = css`
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
  flex: 1 1 auto;
  padding-top: 100px;
  overflow-x: hidden;

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
  if (IsIE()) {
    alert(
      "Internet Explorer is oud en wordt niet meer ondersteund. De site zal hier niet goed op draaien. Gelieve een moderne browser te downloaden zoals Google Chrome of Firefox"
    )
  }
  return (
    <>
      <main css={mainCss}>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
