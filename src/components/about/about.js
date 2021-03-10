import React from "react"
import { AboutWrapper, AboutText, ProfileCard, Decoration } from "./aboutStyles"
import Img from "gatsby-image"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query {
      zaakvoerder: file(relativePath: { eq: "zaakvoerder.jpg" }) {
        childImageSharp {
          fixed(width: 115, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      zaakvoerster: file(relativePath: { eq: "zaakvoerdster.jpg" }) {
        childImageSharp {
          fixed(width: 115, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <AboutWrapper id="overons">
      <Decoration />
      <AboutText>
        <h1>{t("home.about.title")}</h1>
        <p className="intro">{t("home.about.intro")}</p>
        <p>
          {t("home.about.story")}{" "}
          <Link to="/contact/">{t("home.about.storyLink")}</Link>
        </p>
        <ProfileCard margin>
          <Img
            className="card__profile__picture"
            fixed={data.zaakvoerder.childImageSharp.fixed}
            title={t("home.about.owners.geert.imgTitle")}
            alt={t("home.about.owners.geert.imgAlt")}
          />
          <div className="card__profile__body">
            <h3>{t("home.about.owners.geert.name")}</h3>
            <small>{t("home.about.owners.geert.title")}</small>
            <small>{t("home.about.owners.geert.function")}</small>
          </div>
        </ProfileCard>
        <ProfileCard>
          <Img
            className="card__profile__picture"
            fixed={data.zaakvoerster.childImageSharp.fixed}
            title={t("home.about.owners.caroline.imgTitle")}
            alt={t("home.about.owners.caroline.imgAlt")}
          />
          <div className="card__profile__body">
            <h3>{t("home.about.owners.caroline.name")}</h3>
            <small>{t("home.about.owners.caroline.title")}</small>
            <small>{t("home.about.owners.caroline.function")}</small>
          </div>
        </ProfileCard>
      </AboutText>
    </AboutWrapper>
  )
}

export default About
