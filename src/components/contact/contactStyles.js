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

  @media ${p => p.theme.mq.tablet} {
    padding: ${p => p.theme.space[3]};
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
  }
`

export const MapWrapper = styled.aside`
  grid-column: 1 / span 14;
  position: relative;
  height: 400px;
  margin-top: ${p => p.theme.space[7]};
  > div {
    width: 100% !important;
  }
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
  @media ${p => p.theme.mq.tablet} {
    grid-column: 6 / span 8;
    margin-left: ${p => p.theme.space[3]};
    padding: ${p => p.theme.space[3]};
  }
  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
    margin-left: 0;
  }
`

export const RouverpaForm = styled.form`
  display: ${p => (p.hidden ? "none" : "grid")};
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2px 16px;
`

export const StyledInput = styled.div`
  grid-column: ${p => (p.long ? "1 / span 4" : "span 2")};
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
      margin-right: ${p => p.theme.space[0]};
    }
    label {
      margin-bottom: 0;
      font-weight: 400;
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-column: span 4;
  }
`
