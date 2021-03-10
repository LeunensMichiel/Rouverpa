import React, { useState, useEffect } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { CSSTransition } from "react-transition-group"

import { ConsentContainer } from "./consentStyles"
import "./animation.css"

const Consent = ({ handleAnalytics }) => {
  const [visible, setVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setVisible(!localStorage.getItem("analyticsEnabled"))
  }, [])

  return (
    <CSSTransition
      in={visible}
      timeout={{
        appear: 500,
        enter: 500,
        exit: 500,
      }}
      classNames="fade"
      unmountOnExit
    >
      <ConsentContainer>
        <h1>{t("cookies.title")}</h1>
        <p>{t("cookies.message")}</p>
        <div className="buttons">
          <button
            onClick={() => {
              handleAnalytics(false)
              setVisible(false)
            }}
          >
            {t("cookies.decline")}
          </button>
          <button
            onClick={() => {
              handleAnalytics(true)
              setVisible(false)
            }}
          >
            {t("cookies.accept")}
          </button>
        </div>
      </ConsentContainer>
    </CSSTransition>
  )
}

export default Consent
