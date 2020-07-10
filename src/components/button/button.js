import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const StyledButton = styled(Link)`
  display: block;
  color: ${p => p.theme.colors.black34};
  padding: ${p => p.theme.space[4]} ${p => p.theme.space[3]};
  background-color: ${p => p.theme.colors.white94};
  border-radius: ${p => p.theme.borderRadius};
  box-shadow: ${p => p.theme.shadows.button};
  transform: none;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.6s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    color: ${p => p.theme.colors.gray};
    transform: translateY(-4px);
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }
`

const Button = ({ text, external = false, accent = false, href }) => {
  if (external) {
    return <a>{text}</a>
  } else {
    return <StyledButton to={href}>{text}</StyledButton>
  }
}

export default Button
