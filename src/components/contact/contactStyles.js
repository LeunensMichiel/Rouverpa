import styled from "@emotion/styled"

export const InfoWrapper = styled.section`
  grid-column: 2 / span 4;
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[7]};
  padding: ${p => p.theme.space[5]};
  background-color: ${p => p.theme.colors.white98};
  border-radius: ${p => p.theme.borderRadius};
  box-shadow: ${p => p.theme.shadows.container};

  .info__section {
    &:not(:last-of-type) {
      margin-bottom: ${p => p.theme.space[4]};
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
