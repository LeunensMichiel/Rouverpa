import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import _ from "lodash"

import {
  NavWrapper,
  LogoWrapper,
  LinkWrapper,
  NavbarWrapper,
  NavUpperBarWrapper,
} from "./navbarStyles"

import Logo from "../logo/logo"
import Phone from "../../assets/icons/phone.svg"
import Enveloppe from "../../assets/icons/enveloppe.svg"
import Instagram from "../../assets/icons/instagram.svg"
import LinkedIn from "../../assets/icons/linkedin.svg"
import Facebook from "../../assets/icons/facebook.svg"

const Navbar = ({ show = false, hamburgerClickHandler }) => {
  const [isSticky, setSticky] = useState(false)

  const handleScroll = () => {
    window.scrollY >= 36 ? setSticky(true) : setSticky(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", _.throttle(handleScroll, 100))
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [isSticky])

  return (
    <>
      <NavUpperBarWrapper>
        <a href="+32051201517" className="upperbar__item">
          <Phone />
          <span>+32 (0)51 20 15 17</span>
        </a>
        <Link to="/contact" className="upperbar__item dark">
          <Enveloppe />
          <span>rouverpa@telenet.be</span>
        </Link>
        <a
          className="upperbar__item darker"
          aria-label="Instagram Rouverpa"
          href="https://www.instagram.com/rouverpa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        <a
          className="upperbar__item darker"
          aria-label="Instagram Rouverpa"
          href="https://www.facebook.com/Rouverpa-101216735010244"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
        <a
          className="upperbar__item darkest"
          aria-label="LinkedIn Rouverpa"
          href="https://www.linkedin.com/company/rouverpa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </NavUpperBarWrapper>
      <NavbarWrapper>
        <LogoWrapper mobile>
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>
        <button
          className="hamburger hamburger--elastic"
          type="button"
          onClick={hamburgerClickHandler}
          onKeyDown={hamburgerClickHandler}
          id="hamburger"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded={show}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </NavbarWrapper>
      <NavWrapper isSticky={isSticky} show={show}>
        <LogoWrapper>
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>
        <LinkWrapper>
          <Link to="/" activeClassName="active">
            Home
          </Link>
          <Link to="/gamma/" partiallyActive={true} activeClassName="active">
            Ons Gamma
          </Link>
          <Link to="/#overons" partiallyActive={true} activeClassName="active">
            Over Ons
          </Link>
          <Link
            to="/contact/"
            partiallyActive={true}
            activeClassName="active"
            className="link__cta"
          >
            Contact
          </Link>
        </LinkWrapper>
      </NavWrapper>
    </>
  )
}

export default Navbar
