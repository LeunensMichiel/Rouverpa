import React from "react"
import { VideoWrapper } from "./videoStyles"

import MP4 from "../../assets/heroVid.mp4"
import Webm from "../../assets/heroVid.webm"
import Poster from "../../assets/poster.png"

export const Video = () => {
  return (
    <VideoWrapper>
      <video playsInline autoPlay muted poster={Poster} loop id="bgvid">
        <source src={Webm} type="video/webm" />
        <source src={MP4} type="video/mp4" />
      </video>
    </VideoWrapper>
  )
}
