import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"

const Article = styled.article`
  grid-column: 4 / span 8;
  padding: ${p => p.theme.space[8]} 0;

  h1,
  h2 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: 3rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p,
  span {
    margin-bottom: 1.5rem;
  }

  em {
    display: block;
    margin-bottom: 1.5rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.accentp2};
    font-weight: 700;
  }

  ul {
    list-style: disc;
    list-style-position: inside;
    margin-bottom: 0.5rem;
  }

  blockquote {
    font-weight: 700;
    border-left: 4px solid ${({ theme }) => theme.colors.accentp2};
    padding-left: 12px;
  }

  a {
    font-weight: 700;
    text-decoration: underline;
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;

    h1 {
      font-size: ${p => p.theme.fontSizes[3]};
    }
  }
`

const PrivacyPage = () => {
  return (
    <Layout>
      <Article>
        <p>
          Rouverpa, gevestigd aan Steenovenstraat 14 8800 Rumbeke, is
          verantwoordelijk voor de verwerking van persoonsgegevens zoals
          weergegeven in deze privacyverklaring.
        </p>
        <h3>Contactgegevens:</h3>
        <ul>
          <li>https://rouverpa.be</li>
          <li>Steenovenstraat 14</li>
          <li>8800 Rumbeke</li>
          <li>+32 486 33 00 60</li>
        </ul>
        <p>
          Frederic D&#39;hondt is de Functionaris Gegevensbescherming van
          Rouverpa. Hij/zij is te bereiken via frederic.dhondt@hotmail.com
        </p>
        <h3>Persoonsgegevens die wij verwerken </h3>
        <p>
          Rouverpa verwerkt uw persoonsgegevens doordat u gebruik maakt van onze
          diensten en/of omdat u deze zelf aan ons verstrekt.
        </p>
        <p>
          Hieronder vindt u een overzicht van de persoonsgegevens die wij
          verwerken:
        </p>
        <p>
          <ul>
            <li>Voor- en achternaam</li>
            <li>Geslacht</li>
            <li>Geboorteplaats</li>
            <li>E-mailadres</li>
            <li>
              Overige persoonsgegevens die u actief verstrekt bijvoorbeeld door
              een profiel op deze website aan te maken, in correspondentie en
              telefonisch.
            </li>
          </ul>
        </p>
        <h3>Bijzondere en/of gevoelige persoonsgegevens die wij verwerken</h3>
        <p>
          Onze website en/of dienst heeft niet de intentie gegevens te
          verzamelen over websitebezoekers die jonger zijn dan 16 jaar. Tenzij
          ze toestemming hebben van ouders of voogd. We kunnen echter niet
          controleren of een bezoeker ouder dan 16 is. Wij raden ouders dan ook
          aan betrokken te zijn bij de online activiteiten van hun kinderen, om
          zo te voorkomen dat er gegevens over kinderen verzameld worden zonder
          ouderlijke toestemming. Als u er van overtuigd bent dat wij zonder die
          toestemming persoonlijke gegevens hebben verzameld over een
          minderjarige, neem dan contact met ons op via rouverpa@telenet.be, dan
          verwijderen wij deze informatie.
        </p>
        <h3>
          Met welk doel en op basis van welke grondslag wij persoonsgegevens
          verwerken
        </h3>
        <p>Rouverpa verwerkt uw persoonsgegevens voor de volgende doelen:</p>
        <ul>
          <li>Verzenden van onze nieuwsbrief en/of reclamefolder</li>
          <li>
            Rouverpa analyseert uw gedrag op de website om daarmee de website te
            verbeteren en het aanbod van producten en diensten af te stemmen op
            uw voorkeuren.
          </li>
        </ul>
        <h3>Geautomatiseerde besluitvorming</h3>
        <p>
          Rouverpa neemt #responsibility op basis van geautomatiseerde
          verwerkingen besluiten over zaken die (aanzienlijke) gevolgen kunnen
          hebben voor personen. Het gaat hier om besluiten die worden genomen
          door computerprogramma's of -systemen, zonder dat daar een mens
          (bijvoorbeeld een medewerker van Rouverpa) tussen zit.
        </p>
        <h3>Hoe lang we persoonsgegevens bewaren</h3>
        <p>
          Rouverpa bewaart uw persoonsgegevens niet langer dan strikt nodig is
          om de doelen te realiseren waarvoor uw gegevens worden verzameld.
        </p>
        <h3>Delen van persoonsgegevens met derden</h3>
        <p>
          Rouverpa verstrekt uitsluitend aan derden en alleen als dit nodig is
          voor de uitvoering van onze overeenkomst met u of om te voldoen aan
          een wettelijke verplichting.
        </p>
        <h3>Cookies, of vergelijkbare technieken, die wij gebruiken</h3>
        <p>
          Rouverpa gebruikt functionele, analytische en tracking cookies. Een
          cookie is een klein tekstbestand dat bij het eerste bezoek aan deze
          website wordt opgeslagen in de browser van uw computer, tablet of
          smartphone. Rouverpa gebruikt cookies met een puur technische
          functionaliteit. Deze zorgen ervoor dat de website naar behoren werkt
          en dat bijvoorbeeld uw voorkeursinstellingen onthouden worden. Deze
          cookies worden ook gebruikt om de website goed te laten werken en deze
          te kunnen optimaliseren. Daarnaast plaatsen we cookies die uw
          surfgedrag bijhouden zodat we op maat gemaakte content en advertenties
          kunnen aanbieden.
        </p>
        <p>
          Bij uw eerste bezoek aan onze website hebben wij u al geïnformeerd
          over deze cookies en toestemming gevraagd voor het plaatsen ervan.
        </p>
        <p>
          U kunt zich afmelden voor cookies door uw internetbrowser zo in te
          stellen dat deze geen cookies meer opslaat. Daarnaast kunt u ook alle
          informatie die eerder is opgeslagen via de instellingen van uw browser
          verwijderen.
        </p>
        <p>
          Zie voor een toelichting:{" "}
          <a
            href="https://veiliginternetten.nl/themes/situatie/cookies-wat-zijn-het-en-wat-doe-ik-ermee/"
            rel="noreferrer nofollow"
          >
            veiliginternetten.nl
          </a>
        </p>
        <h3>Gegevens inzien, aanpassen of verwijderen</h3>
        <p>
          U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of
          te verwijderen. Daarnaast heeft u het recht om uw eventuele
          toestemming voor de gegevensverwerking in te trekken of bezwaar te
          maken tegen de verwerking van uw persoonsgegevens door Rouverpa en
          heeft u het recht op gegevensoverdraagbaarheid. Dat betekent dat u bij
          ons een verzoek kunt indienen om de persoonsgegevens die wij van u
          beschikken in een computerbestand naar u of een ander, door u genoemde
          organisatie, te sturen.
        </p>
        <p>
          U kunt een verzoek tot inzage, correctie, verwijdering,
          gegevensoverdraging van uw persoonsgegevens of verzoek tot intrekking
          van uw toestemming of bezwaar op de verwerking van uw persoonsgegevens
          sturen naar rouverpa@telenet.be.
        </p>
        <p>
          Om er zeker van te zijn dat het verzoek tot inzage door u is gedaan,
          vragen wij u een kopie van uw identiteitsbewijs met het verzoek mee te
          sturen. Maak in deze kopie uw pasfoto, MRZ (machine readable zone, de
          strook met nummers onderaan het paspoort), paspoortnummer en
          Burgerservicenummer (BSN) zwart. Dit ter bescherming van uw privacy.
          We reageren zo snel mogelijk, maar binnen vier weken, op uw verzoek.
        </p>
        <p>
          Rouverpa wil u er tevens op wijzen dat u de mogelijkheid heeft om een
          klacht in te dienen bij de nationale toezichthouder, de Autoriteit
          Persoonsgegevens. Dat kan via de{" "}
          <a
            rel="noreferrer nofollow"
            href="https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons"
          >
            volgende link.
          </a>
        </p>
        <h3>Hoe wij persoonsgegevens beveiligen</h3>
        <p>
          Rouverpa neemt de bescherming van uw gegevens serieus en neemt
          passende maatregelen om misbruik, verlies, onbevoegde toegang,
          ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.
          Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er
          aanwijzingen zijn van misbruik, neem dan contact op met onze
          klantenservice of via rouverpa@telenet.be
        </p>
      </Article>
    </Layout>
  )
}

export default PrivacyPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
