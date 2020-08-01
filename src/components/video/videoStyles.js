import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

import Pattern from "../../assets/pattern.png"
import Border from "../../assets/borderHero.svg"
import Divider from "../../assets/heroDivider.svg"

const Scroll = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(4px); opacity: 0;}
`

export const VideoWrapper = styled.div`
  grid-column: 1 / span 14;
  width: 100%;
  height: 750px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2) repeat url(${Pattern});
    z-index: 1;
  }

  .hero__text {
    position: absolute;
    color: ${p => p.theme.colors.white98};
    z-index: 4;
    text-transform: uppercase;
    text-align: center;
    background-image: url(${Border});
    background-size: 100% 100%;

    h1 {
      font-size: ${p => p.theme.fontSizes[6]};
      padding: ${p => p.theme.space[7]};
    }

    .hero__text__upper {
      display: flex;
      flex-direction: row;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;

      &:before {
        display: block;
        content: "";
        flex: 2 0 0;
        height: 1px;
      }
      &:after {
        display: block;
        content: "";
        flex: 2 0 0;
        height: 1px;
      }

      h2 {
        font-size: ${p => p.theme.fontSizes[3]};
        margin-top: -12px;
        display: block;
      }
    }
  }

  .hero__divider {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 64px;
    z-index: 4;
    background: url(${Divider});
    background-size: 100% 100%;
  }

  .scroll-downs {
    position: absolute;
    bottom: 36px;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    .mouse {
      width: 20px;
      height: 32px;
      border: 2px solid ${p => p.theme.colors.white98};
      border-radius: 20px;
      display: flex;
      justify-content: center;
    }
    .scroller {
      width: 2px;
      height: 8px;
      margin-top: 4px;
      border-radius: ${p => p.theme.borderRadius};
      background: ${p => p.theme.colors.white98};
      animation: ${Scroll} 2s ease infinite;
    }
    span {
      letter-spacing: 0.12em;
      text-transform: uppercase;
      text-align: center;
      font-size: ${p => p.theme.fontSizes[1]};
      color: ${p => p.theme.colors.white98};
      margin-top: ${p => p.theme.space[2]};
    }
  }
  @media ${p => p.theme.mq.tablet} {
    .hero__text {
      h1 {
        font-size: ${p => p.theme.fontSizes[5]};
      }
      .hero__text__upper {
        h2 {
          font-size: ${p => p.theme.fontSizes[2]};
          margin-top: -8px;
        }
      }
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    height: 85vh;
    max-height: 750px;
    .hero__text {
      background-size: 95% 100%;
      background-position: center;
      background-repeat: no-repeat;
      h1 {
        font-size: ${p => p.theme.fontSizes[3]};
        padding: ${p => p.theme.space[4]};
      }
      .hero__text__upper {
        h2 {
          font-size: 8px;
          margin-top: -4px;
        }
      }
    }
    .scroll-downs {
      span {
        font-size: ${p => p.theme.fontSizes[0]};
      }
    }
  }
`
