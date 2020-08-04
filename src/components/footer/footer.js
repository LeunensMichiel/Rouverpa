import React from "react"
import { Link } from "gatsby"

import Logo from "../logo/logo"
import { FooterWrapper, LeftFooter, RightFooter } from "./footerStyles"

import Instagram from "../../assets/icons/instagram.svg"
import LinkedIn from "../../assets/icons/linkedin.svg"
const Footer = () => {
  return (
    <FooterWrapper>
      <LeftFooter>
        <Logo />
        <div className="left__info">
          <div className="left__socials">
            <a
              className="social__icon"
              aria-label="Instagram Rouverpa"
              href="https://www.facebook.com/ChiroItterbeek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              className="social__icon darkest"
              aria-label="LinkedIn Rouverpa"
              href="https://www.facebook.com/ChiroItterbeek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </div>
          <div className="left__btw">
            Rouverpa NV
            <br />
            BTW: 0441.926.159
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} <span>Rouverpa NV</span>
        </div>
      </LeftFooter>
      <RightFooter>
        <div className="right__block">
          <h6>Troeven</h6>
          <ul>
            <li>Product op maat van de klant</li>
            <li>Stipte levering</li>
            <li>Uitgebreid productassortiment</li>
            <li>30 jaar ervaring en knowhow</li>
          </ul>
        </div>
        <div className="right__block">
          <h6>Contact</h6>
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
          <h6>Navigatie</h6>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gamma/">Ons Gamma</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </div>
      </RightFooter>
    </FooterWrapper>
  )
}

export default Footer
