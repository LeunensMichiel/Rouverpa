import styled from "@emotion/styled"

export const LanguageList = styled.div`
  position: relative;
  /* overflow: hidden; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    ul {
      opacity: 1;
      pointer-events: auto;
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    height: auto;
  }
`

export const CurrentLanguage = styled.a`
  position: relative;
  margin-right: 0 !important;
  padding: 0 !important;

  @media ${p => p.theme.mq.mobileM} {
    display: none;
  }
`

export const LanguageSwitcher = styled.ul`
  background: ${p => p.theme.colors.white96};
  display: block;
  list-style: none;
  position: absolute;
  top: 80%;
  right: 0;
  box-shadow: ${p => p.theme.shadows.container};
  border-radius: ${p => p.theme.borderRadius};
  z-index: 122239999950;
  opacity: 0;
  pointer-events: none;

  button {
    font-weight: 700;
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: left;
  }

  @media ${p => p.theme.mq.mobileM} {
    opacity: 1;
    pointer-events: auto;
    display: flex;
    box-shadow: none;
    position: static;
    background: ${p => p.theme.colors.white98};
  }
`
