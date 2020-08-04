import styled from "@emotion/styled"

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
  width: 100%;
  background-color: ${p => p.theme.colors.white94};
  padding: ${p => p.theme.space[8]} 0;

  @media ${p => p.theme.mq.tablet} {
    padding: ${p => p.theme.space[7]} 0;
  }
`

export const LeftFooter = styled.div`
  grid-column: 3 / span 4;
  display: flex;
  flex-direction: column;

  .left__info {
    display: flex;
    align-items: center;
    margin-top: ${p => p.theme.space[4]};
  }

  .left__socials {
    display: flex;
    /* flex-direction: column; */
    margin-right: ${p => p.theme.space[2]};
  }

  .social__icon {
    display: flex;
    align-items: center;
    padding: ${p => p.theme.space[0]};
    background-color: ${p => p.theme.colors.accentm1};
    transition: background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    &.darkest {
      background-color: ${p => p.theme.colors.accentm2};
    }

    &:hover {
      background-color: ${p => p.theme.colors.accentp2};
    }
  }
  svg {
    height: 14px;
    width: auto;
    fill: ${p => p.theme.colors.white94};
  }

  .left__btw {
    font-size: ${p => p.theme.fontSizes[0]};
    color: ${p => p.theme.colors.gray};
  }

  .copyright {
    margin-top: ${p => p.theme.space[4]};
    font-size: ${p => p.theme.fontSizes[0]};
    color: ${p => p.theme.colors.gray};
    a {
      color: ${p => p.theme.colors.gray};
      &:hover {
        color: ${p => p.theme.colors.accent};
      }
    }
    span {
      font-weight: 700;
    }
  }

  @media ${p => p.theme.mq.tablet} {
    grid-column: 2 / span 5;
    margin-bottom: ${p => p.theme.space[5]};
  }
  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
    margin-bottom: ${p => p.theme.space[5]};
  }
`

export const RightFooter = styled.div`
  grid-column: 7 / span 7;
  align-self: center;
  display: flex;
  justify-content: space-around;

  .right__block {
    display: flex;
    flex-direction: column;

    h6 {
      font-size: ${p => p.theme.fontSizes[0]};
      font-weight: bold;
      color: ${p => p.theme.colors.accentm3};
      text-transform: uppercase;
      margin-bottom: ${p => p.theme.space[3]};
    }

    ul {
      list-style: none;
    }

    li {
      font-size: ${p => p.theme.fontSizes[0]};
      color: ${p => p.theme.colors.gray};
      padding: ${p => p.theme.space[0]} 0;
    }

    a {
      text-decoration: underline;
      color: ${p => p.theme.colors.gray};
      &:hover {
        color: ${p => p.theme.colors.accent};
      }
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
    flex-direction: column;

    .right__block {
      margin-bottom: ${p => p.theme.space[2]};

      h6 {
        margin-bottom: ${p => p.theme.space[1]};
      }
    }
  }
`
