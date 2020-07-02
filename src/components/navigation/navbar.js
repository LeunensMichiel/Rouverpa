import React from "react"
import { Fragment } from "react"
import { Link } from "gatsby"

import {
  NavWrapper,
  LogoWrapper,
  LinkWrapper,
  NavbarWrapper,
} from "./navbarStyles"
import Logo from "../logo/logo"

const Navbar = ({ show = false, hamburgerClickHandler }) => {
  return (
    <Fragment>
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
      <NavWrapper show={show}>
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
          <Link to="/#overons/" partiallyActive={true} activeClassName="active">
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
    </Fragment>
  )
}

export default Navbar
