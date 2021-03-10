import styled from "@emotion/styled"

export const ConsentContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: ${p => p.theme.space[6]};
  left: ${p => p.theme.space[6]};
  z-index: 4999;
  width: 100%;
  max-width: 512px;
  padding: ${p => p.theme.space[3]} ${p => p.theme.space[4]};
  box-shadow: ${p => p.theme.shadows.container};
  border-radius: ${p => p.theme.borderRadius};
  color: #fff;
  background-color: ${p => p.theme.colors.accentm1};

  h1 {
    font-size: ${p => p.theme.fontSizes[1]};
    margin-bottom: ${p => p.theme.space[1]};
  }
  p {
    font-size: ${p => p.theme.fontSizes[0]};
    margin-bottom: ${p => p.theme.space[0]};
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  button {
    color: ${p => p.theme.colors.white98};
    font-size: ${p => p.theme.fontSizes[0]};
    padding: ${p => p.theme.space[1]} ${p => p.theme.space[2]};
    transition: background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    &:nth-of-type(2) {
      background-color: ${p => p.theme.colors.accentp2};
      font-weight: 700;
    }
    &:hover {
      background-color: ${p => p.theme.colors.accentm2};
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    left: 0;
    right: 0;
    bottom: 0;
  }
`
