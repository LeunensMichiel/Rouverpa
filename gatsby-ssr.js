import React from "react"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import rouverpaTheme from "./src/themes/rouverpa_main"

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
    font-size: 112.5%;
  }

  body,
  #___gatsby {
    height: 100%;
  }

  body {
    font-family: ${rouverpaTheme.fonts.heading};
    line-height: ${rouverpaTheme.lineHeights.heading};
    background: ${rouverpaTheme.colors.white98};
    color: ${rouverpaTheme.colors.black34};
  }

  #gatsby-focus-wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: ${rouverpaTheme.fontSizes[5]};
  }

  p,
  li {
    font-size: ${rouverpaTheme.fontSizes[2]};
    font-family: ${rouverpaTheme.fonts.body};
    line-height: ${rouverpaTheme.lineHeights.body};
  }

  a {
    color: ${rouverpaTheme.colors.black34};
    transition: color 0.4s ease;
    text-decoration: none;
    &.active {
      color: ${rouverpaTheme.colors.gray};
    }
    &:hover {
      color: ${rouverpaTheme.colors.accentp2};
      transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    cursor: pointer;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }
`
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={rouverpaTheme}>
    <Global styles={GlobalStyles} />
    {element}
  </ThemeProvider>
)
