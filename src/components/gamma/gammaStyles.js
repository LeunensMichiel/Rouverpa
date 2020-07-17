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
`

export const CategoryWrapper = styled.section`
  grid-column: 4 / span 9;
  display: flex;
  flex-flow: row wrap;

  .category__card {
    display: flex;
    justify-content: center;
    width: 200px;
    height: 200px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${p => p.theme.colors.accentm3};
      width: 100%;
      height: 30px;
      z-index: 3;
      opacity: 0.5;
    }
    h3 {
      position: absolute;
      bottom: 0;
      z-index: 4;
      font-size: ${p => p.theme.fontSizes[2]};
      color: ${p => p.theme.colors.white94};
      text-transform: capitalize;
    }
    .category__card__image {
      z-index: 1;
      height: 100%;
      width: 100%;
    }
  }
`
