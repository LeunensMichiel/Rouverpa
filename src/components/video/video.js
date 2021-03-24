import React from "react"
import { VideoWrapper } from "./videoStyles"

import MP4 from "../../assets/heroVid.mp4"
import Poster from "../../assets/poster.jpg"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import Button from "../button/button"

export const Video = () => {
  const { t } = useTranslation()
  return (
    <VideoWrapper>
      <div className="hero__text">
        <div className="hero__text__upper">
          <h2>{t("home.video.subTitle")}</h2>
        </div>
        <h1>{t("home.video.title")}</h1>
        <Button
          text={t("home.video.virtual")}
          accent
          external
          href="https://virtualtour.rouverpa.be"
        />
      </div>
      <video playsInline autoPlay muted poster={Poster} loop id="bgvid">
        <source src={MP4} type="video/mp4" />
      </video>
      <Link to="/#gamma" className="scroll-downs">
        <div className="mouse">
          <div className="scroller"></div>
        </div>
        <span>{t("home.video.cta")}</span>
      </Link>
      <div className="hero__divider" />
    </VideoWrapper>
  )
}
