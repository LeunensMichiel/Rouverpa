import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

import { InfoWrapper } from "./contactStyles"

import Phone from "../../assets/icons/phone.svg"
import Enveloppe from "../../assets/icons/enveloppe.svg"
import Location from "../../assets/icons/location.svg"
import Card from "../../assets/icons/details.svg"
import Instagram from "../../assets/icons/instagram.svg"
import LinkedIn from "../../assets/icons/linkedin.svg"
import Facebook from "../../assets/icons/facebook.svg"

const Info = () => {
  const { t } = useTranslation()
  return (
    <InfoWrapper>
      <div className="info__section">
        <h3>{t("contact.info.title")}</h3>
        <div className="info__list__item">
          <Location />
          <span>
            Steenovenstraat 14
            <br />
            8800 Rumbeke
          </span>
        </div>
        <div className="info__list__item">
          <Phone />
          <span>+32 (0)51 20 15 17</span>
        </div>
        <div className="info__list__item">
          <Enveloppe />
          <span>rouverpa@telenet.be</span>
        </div>
        <div className="info__list__item">
          <Card />
          <span>{t("contact.info.btw")}</span>
        </div>
      </div>
      <div className="info__section">
        <h3>{t("contact.info.hours.title")}</h3>
        <div className="info__opening__hours">
          <div className="opening__hours__days">
            <span>{t("contact.info.hours.week")}</span>
            <span>{t("contact.info.hours.saturday")}</span>
            <span>{t("contact.info.hours.sunday")}</span>
          </div>
          <div>
            <span>08:00 – 18:00</span>
            <span>08:00 – 16:00</span>
            <span>{t("contact.info.hours.closed")}</span>
          </div>
        </div>
      </div>
      <div className="info__section">
        <h3>{t("contact.info.socials")}</h3>
        <div className="info__socials">
          <a
            aria-label="Instagram Rouverpa"
            href="https://www.instagram.com/rouverpa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            aria-label="Facebook Rouverpa"
            href="https://www.facebook.com/Rouverpa-101216735010244"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            aria-label="LinkedIn Rouverpa"
            href="https://www.linkedin.com/company/rouverpa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </div>
      </div>
    </InfoWrapper>
  )
}

export default Info
