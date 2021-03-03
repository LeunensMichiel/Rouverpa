import React, { useState } from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import Navbar from "./navigation/navbar"
import Footer from "./footer/footer"
import Consent from "./consent/consent"
import { Helmet } from "react-helmet"
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const mainCss = css`
  width: 100%;
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

const Scripts = () => {
  return (
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
      <script type="text/javascript">
        {`(function (h, o, t, j, a, r) {
          h.hj =
            h.hj ||
            function () {
              ;(h.hj.q = h.hj.q || []).push(arguments)
            }
          h._hjSettings = { hjid: 2261101, hjsv: 6 }
          a = o.getElementsByTagName("head")[0]
          r = o.createElement("script")
          r.async = 1
          r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
          a.appendChild(r)
        })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")`}
      </script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8TEXLE0H0Y"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          gtag('js', new Date());
          gtag('config', 'G-8TEXLE0H0Y', { 'anonymize_ip': true, 'allow_google_signals': false });
          gtag('set', 'allow_google_signals', false);
      `}
      </script>
    </Helmet>
  )
}

const IsIE = () => {
  if (typeof window !== `undefined`) {
    return window.navigator.userAgent.match(/(MSIE|Trident)/)
  }
}

const Layout = ({ children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  const handleAnalytics = shouldSetAnalytics => {
    if (typeof window !== `undefined`) {
      if (!shouldSetAnalytics) {
        window["ga-disable-G-8TEXLE0H0Y"] = true
        document.cookie =
          "_hjOptOut=true; expires=Fri, 31 Dec 9999 23:59:59 GMT"
      } else {
        window["ga-disable-G-8TEXLE0H0Y"] = false
        document.cookie =
          "_hjOptOut=false; expires=Fri, 31 Dec 9999 23:59:59 GMT"
      }
      localStorage.setItem("analyticsEnabled", shouldSetAnalytics)
      setAnalyticsEnabled(shouldSetAnalytics)
    }
  }

  React.useEffect(() => {
    const lclStorageEnabled = JSON.parse(
      localStorage.getItem("analyticsEnabled")
    )
    setAnalyticsEnabled(lclStorageEnabled)
    if (lclStorageEnabled) {
      window["ga-disable-G-8TEXLE0H0Y"] = false
      document.cookie = "_hjOptOut=false; expires=Fri, 31 Dec 9999 23:59:59 GMT"
    } else {
      window["ga-disable-G-8TEXLE0H0Y"] = true
      document.cookie = "_hjOptOut=true; expires=Fri, 31 Dec 9999 23:59:59 GMT"
    }
  }, [])

  if (IsIE()) {
    alert(
      "Internet Explorer is oud en wordt niet meer ondersteund. De site zal hier niet goed op draaien. Gelieve een moderne browser te downloaden zoals Google Chrome of Firefox"
    )
    window.open("https://www.google.com/intl/nl/chrome/")
  }
  return (
    <>
      {analyticsEnabled && <Scripts />}
      <Navbar
        show={sideDrawerOpen}
        hamburgerClickHandler={() => {
          setSideDrawerOpen(!sideDrawerOpen)
          document.getElementById("hamburger").classList.toggle("is-active")
        }}
      />
      <Consent handleAnalytics={handleAnalytics} />
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
