import React from "react"
import styled from "@emotion/styled"
import RouverpaLogo from "../../assets/icons/rouverpa.svg"

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  svg {
    height: 100%;
    width: auto;
  }

  @media ${p => p.theme.mq.mobileM} {
    justify-content: center;
    svg {
      max-width: 250px;
    }
  }
`

const Logo = () => {
  return (
    <LogoContainer>
      <RouverpaLogo />
    </LogoContainer>
  )
}

export default Logo
