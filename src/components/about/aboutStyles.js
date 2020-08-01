import styled from "@emotion/styled"
import Wrapper from "../../assets/backgrounds/aboutWrapper.svg"

export const AboutWrapper = styled.section`
  grid-column: 1 / span 14;
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
  background-color: ${p => p.theme.colors.white94};
  position: relative;
  overflow: hidden;
`

export const AboutText = styled.div`
  grid-column: 8 / span 6;
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[9]} 0;
  z-index: 4;

  h1 {
    margin-bottom: ${p => p.theme.space[6]};
  }
  p {
    font-size: 16px;
    margin-bottom: ${p => p.theme.space[6]};

    &.intro {
      font-size: ${p => p.theme.fontSizes[2]};
      color: ${p => p.theme.colors.gray};
    }

    a {
      text-decoration: underline;
      font-weight: 700;
    }
  }
  @media ${p => p.theme.mq.tablet} {
    padding: ${p => p.theme.space[8]} 0;
    grid-column: 6 / span 8;
  }
  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
  }
`

export const ProfileCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: flex-end;
  background-color: ${p => p.theme.colors.white98};
  box-shadow: ${p => p.theme.shadows.button};
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  width: 100%;
  max-width: 380px;
  margin-bottom: ${p => (p.margin ? p.theme.space[5] : 0)};

  .card__profile__picture {
    width: 115px !important;
    height: 115px !important;
    flex-shrink: 0;
  }

  .card__profile__body {
    display: flex;
    flex-direction: column;
    padding: ${p => p.theme.space[4]};
    h3 {
      font-size: ${p => p.theme.fontSizes[2]};
      margin-bottom: ${p => p.theme.space[0]};
    }
    small {
      display: block;
      font-size: ${p => p.theme.fontSizes[1]};
      color: ${p => p.theme.colors.gray};

      &:nth-of-type(2) {
        margin-top: auto;
      }
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    .card__profile__body {
      h3 {
        font-size: ${p => p.theme.fontSizes[1]};
      }
      small {
        font-size: ${p => p.theme.fontSizes[0]};
      }
    }
  }
`

export const Decoration = styled.div`
  grid-column: 2 / span 6;
  background: no-repeat center url(${Wrapper});
  background-size: cover;
  @media ${p => p.theme.mq.tablet} {
    position: absolute;
    grid-column: 1 / span 8;
    background-size: 120%;
    left: -25%;
    width: 100%;
    overflow: hidden;
    top: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0.5;
  }
  @media ${p => p.theme.mq.mobileM} {
    grid-column: 1 / span 14;
    position: absolute;
    background-size: 100%;
    height: 100%;
    width: 100%;
    z-index: 1;
    overflow: hidden;
    transform: rotate(90deg);
    opacity: 0.3;
  }
`
