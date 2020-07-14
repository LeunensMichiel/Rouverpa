import styled from "@emotion/styled"
import Foil from "../../assets/backgrounds/folie.svg"

export const InterestedWrapper = styled.section`
  grid-column: 3 / span 6;
  padding: ${p => p.theme.space[9]} 0;

  h1 {
    margin-bottom: ${p => p.theme.space[7]};
  }
  p {
    max-width: 570px;
    margin-bottom: ${p => p.theme.space[6]};
  }

  .buttons__container {
    display: flex;

    > a {
      margin-right: ${p => p.theme.space[5]};
    }
  }
`

export const FoilWrapper = styled.figure`
  grid-column: 10 / span 5;
  margin-left: auto;
  background: no-repeat url(${Foil});
  background-position: center;
  background-size: contain;
  width: 85%;
  max-width: 800px;
`
