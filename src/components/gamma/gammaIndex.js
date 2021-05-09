import React from "react"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

import { GammaIndexWrapper } from "./gammaStyles"
import cover1 from "../../assets/backgrounds/cover1.png"
import cover2 from "../../assets/backgrounds/cover2.png"
import cover3 from "../../assets/backgrounds/cover3.png"
import Brochure from "../../assets/icons/brochure.svg"
import Button from "../button/button"

const GammaIndex = () => {
  const { t } = useTranslation()
  return (
    <GammaIndexWrapper id="gamma">
      <h1>{t("home.gamma.title")}</h1>
      <div className="gamma__list">
        <Link
          className="gamma__item"
          to="/gamma/categorieen/etiketten_drukwerk/"
        >
          <h3>{t("home.gamma.1")}</h3>
          <img alt="Foto van etiketten en drukwerk" src={cover1} />
        </Link>
        <Link className="gamma__item" to="/gamma/categorieen/folie/">
          <h3>{t("home.gamma.2")}</h3>
          <img alt="Foto van folie" src={cover2} />
        </Link>
        <Link
          className="gamma__item"
          to="/gamma/categorieen/verpakkingspapier/"
        >
          <h3>{t("home.gamma.3")}</h3>
          <img alt="Foto van geschenkverpakkingen" src={cover3} />
        </Link>
      </div>
      <div className="brochureWrapper">
        <Brochure />
        <div className="buttonWrapper">
          <h3>{t("home.gamma.moreInfo")}</h3>
          <Button
            text={t("home.gamma.goToBrochure")}
            external
            accent
            href="https://online.anyflip.com/miwjt/odot/mobile/index.html?fbclid=IwAR2XGXYkpXftGB3JUmJTR6FdWhtSv10ryOhkq0-57qzmVihHBVMRSzoXGYo"
          />
          <Button text={t("home.gamma.goToShop")} href="/gamma/" />
        </div>
      </div>
      <Link to="/#overons" className="scroll-downs">
        <div className="mouse">
          <div className="scroller"></div>
        </div>
        <span>{t("home.gamma.cta")}</span>
      </Link>
    </GammaIndexWrapper>
  )
}

export default GammaIndex
