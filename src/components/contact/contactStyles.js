import styled from "@emotion/styled"

export const InfoWrapper = styled.section`
  grid-column: 2 / span 4;
  align-self: start;
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[7]};
  padding: ${p => p.theme.space[6]};
  background-color: ${p => p.theme.colors.white98};
  border-radius: ${p => p.theme.borderRadius};
  box-shadow: ${p => p.theme.shadows.container};

  .info__section {
    &:not(:last-of-type) {
      margin-bottom: ${p => p.theme.space[6]};
    }

    h3 {
      font-size: ${p => p.theme.fontSizes[2]};
      color: ${p => p.theme.colors.accentm3};
      margin-bottom: ${p => p.theme.space[4]};
    }

    span {
      font-size: ${p => p.theme.fontSizes[1]};
    }
  }

  .info__list__item {
    display: flex;
    align-items: center;
    &:not(:last-of-type) {
      margin-bottom: ${p => p.theme.space[2]};
    }
  }

  .info__opening__hours {
    display: flex;

    > div {
      display: flex;
      flex-direction: column;
      line-height: ${p => p.theme.lineHeights.body};
    }

    .opening__hours__days {
      font-weight: 700;
      margin-right: ${p => p.theme.space[2]};
    }
  }

  .info__socials {
    display: flex;
  }

  svg {
    display: block;
    background-color: ${p => p.theme.colors.accentp2};
    width: 28px;
    height: 28px;
    padding: 6px;
    border-radius: ${p => p.theme.borderRadius};
    margin-right: ${p => p.theme.space[2]};
  }
`

export const MapWrapper = styled.aside`
  grid-column: 1 / span 14;
  position: relative;
  height: 400px;
  margin-top: ${p => p.theme.space[7]};

  div {
    box-shadow: inset 0px -50px 50px rgba(0, 0, 0, 0.06);
  }

  .map__marker {
    content: "";
    width: 24px;
    height: 24px;
    display: block;
    background-color: ${p => p.theme.colors.accentp2};
    border-radius: ${p => p.theme.borderRadius};
    box-shadow: 2px 2px 0 ${p => p.theme.colors.accentm2};
  }
  /* @media ${p => p.theme.mq.tablet} {
    grid-column: 2 / span 6;
    margin-left: unset;
    border: 1px solid ${p => p.theme.colors.border};
    border-right: none;
  }
  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
    border: none;
    height: 200px;
    margin-bottom: ${p => p.theme.space[6]}px;
    padding: 0 ${p => p.theme.space[2]}px;
  } */
`

export const FormWrapper = styled.section`
  grid-column: 7 / span 7;
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[6]};
  margin-top: ${p => p.theme.space[7]};
  border-radius: ${p => p.theme.borderRadius};
  background-color: ${p => p.theme.colors.white98};
  box-shadow: ${p => p.theme.shadows.container};

  input,
  textarea {
    outline-color: ${p => p.theme.colors.gray};
  }

  button {
    grid-column: 3 / span 2;
    align-self: end;
    justify-self: end;
    padding: ${p => p.theme.space[3]} ${p => p.theme.space[6]};
    margin-bottom: ${p => p.theme.space[3]};
    background-color: ${p => p.theme.colors.accentp2};
    text-transform: uppercase;
    font-weight: 700;
    color: ${p => p.theme.colors.white94};
    transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    border-radius: ${p => p.theme.borderRadius};
    box-shadow: ${p => p.theme.shadows.button};

    &:hover {
      transition: background-color 0.4s ease;
      background-color: ${p => p.theme.colors.accentm2};
    }
  }
  /* @media ${p => p.theme.mq.tablet} {
    margin-top: ${p => p.theme.space[6]}px;
  }
  @media ${p => p.theme.mq.mobileM} {
    h1 {
      padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
      font-size: ${p => p.theme.fontSizes[1]}px;
    }
    button {
      grid-row: unset;
      grid-column: 11 / span 2;
      margin-bottom: ${p => p.theme.space[0]}px;
    }
  } */
`

export const RouverpaForm = styled.form`
  display: ${p => (p.hidden ? "none" : "grid")};
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2px 16px;

  /* @media ${p => p.theme.mq.tablet} {
    margin: ${p => p.theme.space[5]}px 0;
    grid-column-gap: 16px;
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-template-rows: unset;
    grid-auto-rows: auto;
    grid-column-gap: 0;
    margin: ${p => p.theme.space[3]}px 0;
    padding: 0 ${p => p.theme.space[3]}px;
  } */
`

export const StyledInput = styled.div`
  grid-column:${p => (p.long ? "1 / span 4" : "span 2")};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: ${p => p.theme.space[3]};

  label {
    color: ${p => p.theme.colors.gray};
    font-size: ${p => p.theme.fontSizes[2]};
    font-weight: 700;
    margin-bottom: ${p => p.theme.space[2]};
  }
  input,
  textarea {
    height: 48px;
    padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
    border: none;
    color: ${p => p.theme.colors.black34};
    background-color: ${p => p.theme.colors.white94};
    border-radius: ${p => p.theme.borderRadius};
    font-size: ${p => p.theme.fontSizes[2]};
  }

  textarea {
    height: 180px;
  }

  .radio__buttons {
    display: flex;
    flex-wrap: wrap;

    > div {
      display: flex;
      align-items: center;
      margin-right: ${p => p.theme.space[2]};
    }
    input {
      height: unset;
    }
    label {
      margin-bottom: 0;
      margin-left: ${p => p.theme.space[0]};
      font-weight: 400;
    }
  }
/* 
  @media ${p => p.theme.mq.tablet} {
    grid-column: ${p => (p.textarea ? "7 / span 5" : "2 / span 5")};
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-column: 1 / span 12;
    grid-row: unset;
    label {
      font-size: ${p => p.theme.fontSizes[1]}px;
    }
    input,
    textarea {
      font-size: 16px;
      padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
    }
    textarea {
      min-height: 200px;
    }
  } */
`
