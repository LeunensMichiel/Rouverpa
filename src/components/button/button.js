import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby-plugin-react-i18next"

const StyledButton = styled(Link)`
  display: block;
  color: ${p => (p.accent ? p.theme.colors.white94 : p.theme.colors.black34)};
  padding: ${p => p.theme.space[4]} ${p => p.theme.space[3]};
  background-color: ${p =>
    p.accent ? p.theme.colors.accentp2 : p.theme.colors.white94};
  border-radius: ${p => p.theme.borderRadius};
  box-shadow: ${p => p.theme.shadows.button};
  transform: none;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  cursor: pointer;
  font-weight: 700;

  &:hover {
    color: ${p => (p.accent ? p.theme.colors.white98 : p.theme.colors.gray)};
    transform: translateY(-2px);
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }
`

const Button = ({ text, external = false, accent = false, href }) => {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {text}
      </a>
    )
  } else {
    return (
      <StyledButton accent={accent ? "true" : undefined} to={href}>
        {text}
      </StyledButton>
    )
  }
}

export default Button
