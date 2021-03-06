const rouverpaTheme = {
  colors: {
    white98: "#FAF7F7",
    white96: "#F5F2F3",
    white94: "#F0EEEE",
    accentp2: "#FF243A",
    accentp1: "#F51B31",
    accent: "#ED152B",
    accentm1: "#CF081D",
    accentm2: "#C1071B",
    accentm3: "#B91E2E",
    gray: "#8C8789",
    black34: "#3B393A",
    black26: "#2B2A2B",
    black20: "#262525",
  },
  shadows: {
    button: "0px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05)",
    container:
      "0px 4px 10px rgba(0, 0, 0, 0.1), 0px 2px 25px rgba(0, 0, 0, 0.1)",
  },
  borderRadius: "2px",
  fonts: {
    heading:
      'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
    body:
      'Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  },
  fontSizes: ["12px", "14px", "18px", "24px", "32px", "36px", "48px"],
  lineHeights: {
    body: 1.5625,
    heading: 1,
  },
  space: [
    "4px",
    "8px",
    "12px",
    "16px",
    "18px",
    "24px",
    "36px",
    "48px",
    "64px",
    "144px",
  ],
  mq: {
    mobileS: `(max-width: 374px)`,
    mobileSLandscape: `(max-width: 750px) and (max-height: 500px) and (orientation: landscape)`,
    mobileM: `(max-width: 767px)`,
    mobileMLandscape: `(max-width: 890px) and (max-height: 500px) and (orientation: landscape)`,
    tablet: `(max-width: 1024px)`,
    tabletland: `(max-width: 1024px) and (orientation: landscape)`,
    tabletPortrait: `(max-width: 1024px) and (orientation: portrait)`,
    ipadProPortrait: `(min-width: 1024px) 
     and (max-height: 1366px) 
     and (orientation: portrait) 
     and (-webkit-min-device-pixel-ratio: 1.5)`,
    laptop: `(max-width: 1440px)`,
    desktop: `(min-width: 1680px)`,
  },
}

export default rouverpaTheme
