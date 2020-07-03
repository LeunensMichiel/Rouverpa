import styled from "@emotion/styled"

export const VideoWrapper = styled.div`
  grid-column: 1 / span 14;
  width: 100%;
  height: 80vh;

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`
