import React from "react"
import { Link } from "gatsby"

import { GammaIndexWrapper } from "./gammaStyles"
import cover1 from "../../assets/backgrounds/cover1.png"
import cover2 from "../../assets/backgrounds/cover2.png"
import cover3 from "../../assets/backgrounds/cover3.png"
import Button from "../button/button"

const GammaIndex = () => {
  return (
    <GammaIndexWrapper id="gamma">
      <h1>Wij produceren,</h1>
      <div className="gamma__list">
        <Link
          className="gamma__item"
          to="/gamma/categorieen/etiketten_drukwerk/"
        >
          <h3>Etiketten & Drukwerk</h3>
          <img alt="Foto van etiketten en drukwerk" src={cover1} />
        </Link>
        <Link className="gamma__item" to="/gamma/categorieen/folie/">
          <h3>Folie</h3>
          <img alt="Foto van folie" src={cover2} />
        </Link>
        <Link
          className="gamma__item"
          to="/gamma/categorieen/verpakkingspapier/"
        >
          <h3>Geschenkverpakking</h3>
          <img alt="Foto van geschenkverpakkingen" src={cover3} />
        </Link>
      </div>
      <div className="buttonWrapper">
        <Button text="Bekijk ons volledig assortiment" href="/gamma/" />
      </div>
      <Link to="/#overons" className="scroll-downs">
        <div className="mouse">
          <div className="scroller"></div>
        </div>
        <span>Over Ons</span>
      </Link>
    </GammaIndexWrapper>
  )
}

export default GammaIndex
