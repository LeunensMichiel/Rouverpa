import React from "react"
import { InterestedWrapper, FoilWrapper } from "./interestedStyles"
import Button from "../button/button"

const Interested = () => {
  return (
    <>
      <InterestedWrapper>
        <h1>Geïnteresseerd?</h1>
        <p>
          Wij staan alvast klaar om u te helpen. Surf naar onze contactpagina om
          steeds vrijblijvende offertes aan te vragen, of om andere vragen te
          stellen.
        </p>
        <p>- Het Rouverpa team</p>
        <div className="buttons__container">
          <Button text="Offerte aanvragen" href='/contact?type="offerte"' />
          <Button text="Contacteer ons" accent href="/contact/" />
        </div>
      </InterestedWrapper>
      <FoilWrapper />
    </>
  )
}

export default Interested
