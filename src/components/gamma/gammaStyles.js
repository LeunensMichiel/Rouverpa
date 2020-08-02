import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

import Circles from "../../assets/backgrounds/circles.svg"
import Polar from "../../assets/backgrounds/polar.svg"
import Lines from "../../assets/backgrounds/lines.svg"

const Scroll = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(4px); opacity: 0;}
`

export const GammaIndexWrapper = styled.section`
  grid-column: 2 / span 12;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${p => p.theme.space[9]} 0;
  position: relative;

  h1 {
    margin-bottom: ${p => p.theme.space[8]};
  }

  .gamma__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    position: relative;
  }

  .gamma__item {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 285px;
    height: 285px;
    border-radius: ${p => p.theme.borderRadius};
    padding: ${p => p.theme.space[5]};
    background: ${p => p.theme.colors.accentp2} center url(${Circles});
    background-size: 100%;
    transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    cursor: pointer;

    &:hover,
    &:focus {
      box-shadow: ${p => p.theme.shadows.container};
      background-size: 105%;
      &:after {
        background: ${p => p.theme.colors.accentp2};
      }
      img {
        transform: scale(1.1) translateY(-8px);
      }
    }

    &:after {
      display: block;
      content: "";
      position: absolute;
      bottom: -36px;
      width: 50px;
      height: 4px;
      background: ${p => p.theme.colors.white94};
      transition: background 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
    &:nth-of-type(1) {
      img {
        width: 90%;
      }
    }

    &:nth-of-type(2) {
      background: ${p => p.theme.colors.accentp2} no-repeat bottom url(${Polar});
      background-size: 100%;

      &:hover,
      &:focus {
        background-size: 105%;
      }
    }
    &:nth-of-type(3) {
      background: ${p => p.theme.colors.accentp2} no-repeat center url(${Lines});
      background-size: 100%;
      &:hover,
      &:focus {
        background-size: 105%;
      }
    }

    h3 {
      color: ${p => p.theme.colors.white94};
      font-size: ${p => p.theme.fontSizes[3]};
    }

    img {
      position: absolute;
      bottom: 0;
      align-self: flex-end;
      width: 66%;
      transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }

  .buttonWrapper {
    margin-top: ${p => p.theme.space[8]};
    margin-bottom: ${p => p.theme.space[8]};
    align-self: center;
  }

  .scroll-downs {
    position: absolute;
    bottom: 36px;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    .mouse {
      width: 20px;
      height: 32px;
      border: 2px solid ${p => p.theme.colors.black34};
      border-radius: 20px;
      display: flex;
      justify-content: center;
    }
    .scroller {
      width: 2px;
      height: 8px;
      margin-top: 4px;
      border-radius: ${p => p.theme.borderRadius};
      background: ${p => p.theme.colors.black34};
      animation: ${Scroll} 1s ease infinite;
    }
    span {
      letter-spacing: 0.12em;
      text-transform: uppercase;
      text-align: center;
      font-size: ${p => p.theme.fontSizes[1]};
      color: ${p => p.theme.colors.black34};
      margin-top: ${p => p.theme.space[2]};
    }
  }

  @media ${p => p.theme.mq.tablet} {
    padding: ${p => p.theme.space[7]} 0;

    .gamma__item {
      margin-bottom: ${p => p.theme.space[5]};
    }

    .buttonWrapper {
      margin-top: ${p => p.theme.space[4]};
      margin-bottom: ${p => p.theme.space[9]};
      align-self: center;
    }
  }
`

export const CategoryWrapper = styled.section`
  grid-column: 5 / span 9;
  display: flex;
  flex-flow: row wrap;
  margin-bottom: ${p => p.theme.space[8]};

  .category__card {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 185px;
    height: 185px;
    position: relative;
    margin: ${p => p.theme.space[1]};
    overflow: hidden;
    border-radius: ${p => p.theme.borderRadius};

    h3 {
      position: absolute;
      width: 100%;
      z-index: 4;
      padding: ${p => p.theme.space[2]} ${p => p.theme.space[0]};
      text-align: center;
      font-size: ${p => p.theme.fontSizes[2]};
      color: ${p => p.theme.colors.white98};
      text-transform: capitalize;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${p => p.theme.colors.black34};
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.5;
        transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
          background 0.6s cubic-bezier(0.22, 1, 0.36, 1);
      }
    }
    .category__card__image {
      z-index: 1;
      height: 100%;
      width: 100%;
      transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }

    &:hover {
      h3 {
        &:after {
          opacity: 1;
          background: ${p => p.theme.colors.accentp2};
        }
      }
      .category__card__image {
        transform: scale3d(1.05, 1.05, 1.05);
      }
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
    justify-content: space-between;
    .category__card {
      width: 49%;
      margin: 0;
      margin-bottom: ${p => p.theme.space[2]};
      h3 {
        font-size: ${p => p.theme.fontSizes[0]};
      }
    }
  }
`

export const Breadcrumb = styled.nav`
  grid-column: 2 / span 12;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${p => p.theme.space[5]};
  margin-bottom: ${p => p.theme.space[7]};
  padding-bottom: ${p => p.theme.space[2]};
  border-bottom: 1px solid ${p => p.theme.colors.white94};
  a {
    color: ${p => p.theme.colors.gray};
    text-transform: capitalize;
    &.crumb__active {
      font-weight: 700;
    }
  }
  .link__styled {
    padding: ${p => p.theme.space[1]} ${p => p.theme.space[4]};
    margin-right: 0;
    border-radius: ${p => p.theme.borderRadius};
    color: ${p => p.theme.colors.white98};
    background-color: ${p => p.theme.colors.accentp2};
    transition: background 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    font-weight: 700;

    &:hover {
      background: ${p => p.theme.colors.accentm2};
    }
  }
  .crumbs__list {
    display: flex;
    align-items: center;
  }
  svg {
    height: 14px;
    margin: 0 ${p => p.theme.space[0]};
  }

  @media ${p => p.theme.mq.mobileM} {
    flex-wrap: wrap;
    margin-bottom: ${p => p.theme.space[0]};

    a {
      font-size: ${p => p.theme.fontSizes[0]};
      margin: 0;
    }
    .link__styled {
      margin-top: ${p => p.theme.space[2]};
      width: 100%;
      text-align: center;
    }
    svg {
      height: 10px;
      margin: 0 2px;
    }
  }
`

export const SideProductNav = styled.nav`
  grid-column: 2 / span 3;

  h1 {
    color: ${p => p.theme.colors.accentm3};
    font-size: ${p => p.theme.fontSizes[2]};
    margin-bottom: ${p => p.theme.space[3]};
    text-transform: capitalize;
  }

  .sidenav {
    display: flex;
    flex-direction: column;
  }

  .sidenav__sub {
    display: flex;
    flex-direction: column;
    margin-top: ${p => p.theme.space[1]};
    margin-left: ${p => p.theme.space[2]};
    font-weight: 400;
  }

  a {
    font-size: ${p => p.theme.fontSizes[1]};
    margin-bottom: ${p => p.theme.space[1]};
    text-transform: capitalize;
    text-decoration: underline;

    &.sidenav__active {
      color: ${p => p.theme.colors.accentp2};
      font-weight: 700;
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    display: none;
  }
`

export const ProductDetailScreen = styled.section`
  grid-column: 5 / span 9;
  display: flex;
  margin-bottom: ${p => p.theme.space[8]};

  .product__image {
    z-index: 1;
    height: 250px;
    width: 250px;
    flex-shrink: 0;
    margin-right: ${p => p.theme.space[5]};
  }

  h3 {
    font-size: ${p => p.theme.fontSizes[0]};
    color: ${p => p.theme.colors.gray};
    margin-bottom: ${p => p.theme.space[1]};
    font-weight: 400;
    text-transform: capitalize;
  }

  h1 {
    font-size: ${p => p.theme.fontSizes[3]};
    color: ${p => p.theme.colors.accentm3};
    margin-bottom: ${p => p.theme.space[2]};
  }

  p {
    color: ${p => p.theme.colors.black34};
    margin-bottom: ${p => p.theme.space[6]};
  }

  ul {
    list-style: none;
  }

  li {
    background: ${p => p.theme.colors.white94};
    padding: ${p => p.theme.space[2]};
    line-height: ${p => p.theme.lineHeights.body};

    &:nth-of-type(2n) {
      background: ${p => p.theme.colors.white96};
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
    flex-direction: column;

    .product__image {
      margin-right: 0;
      margin-bottom: ${p => p.theme.space[2]};
      width: 100%;
    }

    h1 {
      font-size: ${p => p.theme.fontSizes[2]};
    }

    p,
    li {
      font-size: ${p => p.theme.fontSizes[1]};
    }
  }
`
