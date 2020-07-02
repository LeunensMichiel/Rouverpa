import React from "react"
import styled from "@emotion/styled"

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  .rouverpa {
    font-size: ${p => p.theme.fontSizes[4]};
    color: ${p => p.theme.colors.accentp2};
    margin-bottom: ${p => p.theme.space[0]};
    font-weight: 700;
  }
  .rouverpa__subtitle {
    font-size: ${p => p.theme.fontSizes[0]};
    color: ${p => p.theme.colors.gray};
    text-transform: uppercase;
  }
`

const Logo = () => (
  <LogoContainer>
    <span className="rouverpa">Rouverpa</span>
    <span className="rouverpa__subtitle">Verpakkingen & Etiketten</span>
  </LogoContainer>
)

export default Logo
