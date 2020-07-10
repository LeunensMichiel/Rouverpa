import React from "react"
import { VideoWrapper } from "./videoStyles"

import MP4 from "../../assets/heroVid.mp4"
import Poster from "../../assets/poster.jpg"

export const Video = () => {
  return (
    <VideoWrapper>
      <div className="hero__text">
        <div className="hero__text__upper">
          <h2>Al 30 jaar uw specialist in</h2>
        </div>
        <h1>Serviceverpakkingen & Etiketten</h1>
      </div>
      <video playsInline autoPlay muted poster={Poster} loop id="bgvid">
        <source src={MP4} type="video/mp4" />
      </video>
      <div className="scroll-downs">
        <div className="mouse">
          <div className="scroller"></div>
        </div>
        <span>Ons Gamma</span>
      </div>
      <div className="hero__divider" />
    </VideoWrapper>
  )
}