import styled from "@emotion/styled"

export const NavWrapper = styled.header`
  position: fixed;
  margin-top: ${p => (p.isSticky ? "0" : "36px")};
  width: 100%;
  height: 100px;
  background-color: ${p => p.theme.colors.white98};
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
  box-shadow: ${p => p.theme.shadows.container};
  z-index: 100;

  @media ${p => p.theme.mq.mobileM} {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    overflow-y: auto;
    margin-top: 0;
    transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
`

export const LogoWrapper = styled.div`
  grid-column: 2 / span 3;
  display: flex;
  align-items: center;

  @media ${p => p.theme.mq.mobileM} {
    display: ${p => (p.mobile ? "flex" : "none")};
    padding-left: ${p => p.theme.space[2]};
  }
`

export const LinkWrapper = styled.nav`
  grid-column: 6 / span 8;
  justify-self: end;
  display: flex;
  align-items: center;
  a {
    padding: ${p => p.theme.space[0]};
    margin: 0 ${p => p.theme.space[4]};
    font-size: ${p => p.theme.fontSizes[2]};
    font-weight: 700;
    &.link__cta {
      padding: ${p => p.theme.space[1]} ${p => p.theme.space[4]};
      margin-right: 0;
      border-radius: ${p => p.theme.borderRadius};
      color: ${p => p.theme.colors.white98};
      background-color: ${p => p.theme.colors.accentp2};
      transition: background 0.6s cubic-bezier(0.22, 1, 0.36, 1);
      &.active {
        background: ${p => p.theme.colors.accentm3};
      }
      &:hover {
        background: ${p => p.theme.colors.accentm2};
      }
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    flex-direction: column;
    justify-content: center;
    flex: auto;
    a {
      padding: ${p => p.theme.space[2]} 0;
      margin: 0;
      font-size: ${p => p.theme.fontSizes[5]} !important;
      &:not(:nth-of-type(4)) {
        margin-bottom: ${p => p.theme.space[2]};
      }
    }
  }
`

export const NavbarWrapper = styled.nav`
  /*Animation by https://github.com/jonsuh/hamburgers*/
  width: 100%;
  height: 72px;
  display: none;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10000;
  background-color: ${p => p.theme.colors.white98};
  box-shadow: ${p => p.theme.shadows.container};
  .hamburger {
    padding: 16px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;

    &:hover {
      opacity: 0.5;
    }
    &.is-active {
      &:hover {
        opacity: 0.5;
      }
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        background-color: ${p => p.theme.colors.black34};
      }
    }
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
    &,
    &::before,
    &::after {
      width: 40px;
      height: 4px;
      background-color: ${p => p.theme.colors.black34};
      border-radius: 2px;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
    }
    &::before,
    &::after {
      content: "";
      display: block;
    }

    &::before {
      top: -10px;
    }

    &::after {
      bottom: -10px;
    }
  }
  .hamburger--elastic {
    .hamburger-inner {
      top: 2px;
      transition-duration: 0.275s;
      transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

      &::before {
        top: 10px;
        transition: opacity 0.125s 0.275s ease;
      }

      &::after {
        top: 20px;
        transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    }
    &.is-active {
      .hamburger-inner {
        transform: translate3d(0, 10px, 0) rotate(135deg);
        transition-delay: 0.075s;

        &::before {
          transition-delay: 0s;
          opacity: 0;
        }

        &::after {
          transform: translate3d(0, -20px, 0) rotate(-270deg);
          transition-delay: 0.075s;
        }
      }
    }
    .hamburger--elastic-r {
      .hamburger-inner {
        top: 2px;
        transition-duration: 0.275s;
        transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

        &::before {
          top: 10px;
          transition: opacity 0.125s 0.275s ease;
        }

        &::after {
          top: 20px;
          transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      }
      &.is-active {
        .hamburger-inner {
          transform: translate3d(0, 10px, 0) rotate(-135deg);
          transition-delay: 0.075s;

          &::before {
            transition-delay: 0s;
            opacity: 0;
          }

          &::after {
            transform: translate3d(0, -20px, 0) rotate(270deg);
            transition-delay: 0.075s;
          }
        }
      }
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    display: flex;
  }
`

export const NavUpperBarWrapper = styled.aside`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: flex-end;
  background-color: ${p => p.theme.colors.accentp2};
  position: fixed;

  .upperbar__item {
    display: flex;
    align-items: center;
    background-color: ${p => p.theme.colors.accentp1};
    padding: 0 ${p => p.theme.space[1]};

    &.dark {
      background-color: ${p => p.theme.colors.accent};
    }
    &.darker {
      background-color: ${p => p.theme.colors.accentm1};
      svg {
        margin-right: 0;
      }
    }
    &.darkest {
      background-color: ${p => p.theme.colors.accentm2};
      svg {
        margin-right: 0;
      }
    }
  }

  svg {
    height: 16px;
    width: auto;
    margin-right: ${p => p.theme.space[0]};
    fill: ${p => p.theme.colors.white94};
  }

  span {
    font-size: ${p => p.theme.fontSizes[0]};
    color: ${p => p.theme.colors.white94};
  }

  @media ${p => p.theme.mq.mobileM} {
    display: none;
  }
`
