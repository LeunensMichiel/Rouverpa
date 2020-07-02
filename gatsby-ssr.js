import React from "react"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import rouverpaTheme from "./src/themes/rouverpa_main"

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
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

  p {
    font-size: ${rouverpaTheme.fontSizes[2]};
    font-family: ${rouverpaTheme.fonts.body};
    line-height: ${rouverpaTheme.lineHeights.body};
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
