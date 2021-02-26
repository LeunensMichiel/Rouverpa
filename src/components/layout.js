import React, { useState } from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import Navbar from "./navigation/navbar"
import Footer from "./footer/footer"
import { Helmet } from "react-helmet"
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}
const mainCss = css`
  width: 100%;
  /* min-height: 90%; */
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
  align-items: start;
  flex: 0 1;
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
      <Helmet>
        <script type="text/javascript">
          {`(function (d, h, w) {
            var gist = (w.gist = w.gist || [])
            gist.methods = ["trackPageView", "identify", "track", "setAppId"]
            gist.factory = function (t) {
              return function () {
                var e = Array.prototype.slice.call(arguments)
                e.unshift(t)
                gist.push(e)
                return gist
              }
            }
            for (var i = 0; i < gist.methods.length; i++) {
              var c = gist.methods[i]
              gist[c] = gist.factory(c)
            }
            ;(s = d.createElement("script")),
              (s.src = "https://widget.getgist.com"),
              (s.async = !0),
              (e = d.getElementsByTagName(h)[0]),
              e.appendChild(s),
              s.addEventListener("load", function (e) {}, !1),
              gist.setAppId("nnhgikqk"),
              gist.trackPageView()
          })(document, "head", window)`}
        </script>
      </Helmet>
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
