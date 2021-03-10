import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

import { InterestedWrapper, FoilWrapper } from "./interestedStyles"
import Button from "../button/button"

const Interested = () => {
  const { t } = useTranslation()
  return (
    <>
      <InterestedWrapper>
        <h1>{t("home.interested.title")}</h1>
        <p>{t("home.interested.message")}</p>
        <p>- {t("home.interested.signed")}</p>
        <div className="buttons__container">
          <Button
            text={t("home.interested.buttonQuote")}
            href="/contact?type=offerte"
          />
          <Button
            text={t("home.interested.buttonContact")}
            accent
            href="/contact/"
          />
        </div>
      </InterestedWrapper>
      <FoilWrapper />
    </>
  )
}

export default Interested
