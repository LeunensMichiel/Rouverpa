import React from "react"

import { GammaIndexWrapper } from "./gammaStyles"
import cover1 from "../../assets/backgrounds/cover1.png"
import cover2 from "../../assets/backgrounds/cover2.png"
import cover3 from "../../assets/backgrounds/cover3.png"
import Button from "../button/button"

const GammaIndex = () => {
  return (
    <GammaIndexWrapper>
      <h1>Wij produceren,</h1>
      <div className="gamma__list">
        <div className="gamma__item">
          <h3>Etiketten & Drukwerk</h3>
          <img src={cover1} />
        </div>
        <div className="gamma__item">
          <h3>Folie</h3>
          <img src={cover2} />
        </div>
        <div className="gamma__item">
          <h3>Geschenkverpakking</h3>
          <img src={cover3} />
        </div>
      </div>
      <div className="buttonWrapper">
        <Button text="Bekijk ons volledig assortiment" href="/gamma/" />
      </div>
      <div className="scroll-downs">
        <div className="mouse">
          <div className="scroller"></div>
        </div>
        <span>Over Ons</span>
      </div>
    </GammaIndexWrapper>
  )
}

export default GammaIndex
