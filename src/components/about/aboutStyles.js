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
`

export const AboutText = styled.div`
  grid-column: 8 / span 6;
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[9]} 0;

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
`

export const ProfileCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: flex-end;
  background-color: ${p => p.theme.colors.white98};
  box-shadow: ${p => p.theme.shadows.button};
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  width: 380px;
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
`

export const Decoration = styled.div`
  grid-column: 2 / span 6;
  background: no-repeat center url(${Wrapper});
  background-size: cover;
`
