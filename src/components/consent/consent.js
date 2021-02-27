import React, { useState, useEffect } from "react"
import { ConsentContainer } from "./consentStyles"
import { CSSTransition } from "react-transition-group"
import "./animation.css"

const Consent = ({ handleAnalytics }) => {
  const [visible, setVisible] = useState(false)

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
        <h1>Het Rouverpa-team staat voor je klaar.</h1>
        <p>
          Om Rouverpa te verbeteren, maken we gebruik van analytische cookies om
          statistieken bij te houden. Geen zorgen, wij verzamelen geen
          persoonlijke data, en de data die verzameld wordt is geanonimiseerd.
          We kijken bijvoorbeeld welke pagina's het meest bezocht worden.
        </p>
        <div className="buttons">
          <button
            onClick={() => {
              handleAnalytics(false)
              setVisible(false)
            }}
          >
            Liever niet
          </button>
          <button
            onClick={() => {
              handleAnalytics(true)
              setVisible(false)
            }}
          >
            Geen probleem!
          </button>
        </div>
      </ConsentContainer>
    </CSSTransition>
  )
}

export default Consent
