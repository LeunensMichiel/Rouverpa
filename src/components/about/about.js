import React from "react"
import { AboutWrapper, AboutText, ProfileCard, Decoration } from "./aboutStyles"
import Img from "gatsby-image"
import { Link } from "gatsby-plugin-react-i18next"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
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
        <h1>Een beetje uitleg over ons,</h1>
        <p className="intro">
          Rouverpa is een bedrijf dat al meer dan 30 jaar gespecialiseerd is in
          serviceverpakkingen en etiketten. Onze klanten bevinden zich in de
          bloemensector, chocoladesector, etc.
        </p>
        <p>
          Geert D’hondt & Caroline Desmet gebruiken hun passie en ervaring om
          kwalitatieve producten te produceren. Bij Rouverpa staat de klant
          centraal en kan het mede dankzij zijn eigen productielijn producten op
          maat van de klant maken. Daarnaast zorgt het uitgebreid product
          assortiment ervoor dat de wensen van de klant worden vervuld. Door de
          interne leveringsdienst zijn stipte leveringen gewaarborgd. Voor
          verdere vragen kunt u ons steeds{" "}
          <Link to="/contact/">mailen of bellen</Link>.
        </p>
        <ProfileCard margin>
          <Img
            className="card__profile__picture"
            fixed={data.zaakvoerder.childImageSharp.fixed}
            title="Bestuurder Geerd D'Hondt"
            alt="Foto van bestuurder Geerd D'Hondt"
          />
          <div className="card__profile__body">
            <h3>Geerd D'Hondt</h3>
            <small>Bestuurder</small>
            <small>Verantwoordelijk voor verpakkingen</small>
          </div>
        </ProfileCard>
        <ProfileCard>
          <Img
            className="card__profile__picture"
            fixed={data.zaakvoerster.childImageSharp.fixed}
            title="Bestuurster Caroline Desmet"
            alt="Foto van bestuurster Caroline Desmet"
          />
          <div className="card__profile__body">
            <h3>Caroline Desmet</h3>
            <small>Bestuurster</small>
            <small>Verantwoordelijk voor bedrukte linten en etiketten</small>
          </div>
        </ProfileCard>
      </AboutText>
    </AboutWrapper>
  )
}

export default About
