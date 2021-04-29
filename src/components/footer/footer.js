import React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

import Logo from "../logo/logo"
import { FooterWrapper, LeftFooter, RightFooter } from "./footerStyles"

import Instagram from "../../assets/icons/instagram.svg"
import LinkedIn from "../../assets/icons/linkedin.svg"
import Facebook from "../../assets/icons/facebook.svg"
const Footer = () => {
  const { t } = useTranslation()
  return (
    <FooterWrapper>
      <LeftFooter>
        <Logo />
        <div className="left__info">
          <div className="left__socials">
            <a
              className="social__icon"
              aria-label="Instagram Rouverpa"
              href="https://www.instagram.com/rouverpa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              className="social__icon darkest"
              aria-label="Facebook Rouverpa"
              href="https://www.facebook.com/Rouverpa-101216735010244"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              className="social__icon darkest"
              aria-label="LinkedIn Rouverpa"
              href="https://www.linkedin.com/company/rouverpa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </div>
          <div className="left__btw">
            {t("footer.rouverpa")}
            <br />
            {t("footer.btw")}
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} <span>{t("footer.rouverpa")}</span> |{" "}
          <Link to="/privacy/">{t("navigation.privacy")}</Link>
        </div>
      </LeftFooter>
      <RightFooter>
        <div className="right__block">
          <h6>{t("footer.features.title")}</h6>
          <ul>
            <li>{t("footer.features.1")}</li>
            <li>{t("footer.features.2")}</li>
            <li>{t("footer.features.3")}</li>
            <li>{t("footer.features.4")}</li>
          </ul>
        </div>
        <div className="right__block">
          <h6>{t("footer.contact")}</h6>
          <ul>
            <li>
              Steenovenstraat 14
              <br />
              8800 Rumbeke
            </li>
            <li>+32 (0)51 20 15 17</li>
            <li>rouverpa@telenet.be</li>
          </ul>
        </div>
        <div className="right__block">
          <h6>{t("footer.navigation")}</h6>
          <ul>
            <li>
              <Link to="/">{t("navigation.home")}</Link>
            </li>
            <li>
              <Link to="/gamma/">{t("navigation.gamma")}</Link>
            </li>
            <li>
              <Link to="/blogs/">{t("navigation.blog")}</Link>
            </li>
            <li>
              <Link to="/contact/">{t("navigation.contact")}</Link>
            </li>
          </ul>
        </div>
      </RightFooter>
    </FooterWrapper>
  )
}

export default Footer
