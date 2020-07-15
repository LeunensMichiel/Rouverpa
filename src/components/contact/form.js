import React from "react"
import { FormWrapper, StyledInput, RouverpaForm } from "./contactStyles"

const Form = () => {
  return (
    <FormWrapper>
      <RouverpaForm
        name="Contactformulier Rouverpa"
        action="/bedankt/"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="form-name"
          value="Contactformulier Rouverpa"
        />
        <input type="hidden" name="bot-field" />
        <StyledInput long>
          <label>
            Ik wil een<sup>*</sup>
          </label>
          <div className="radio__buttons">
            <div>
              <input type="radio" id="offerte" name="type" value="offerte" />
              <label htmlFor="offerte">Offerte aanvragen</label>
            </div>
            <div>
              <input type="radio" id="vraag" name="type" value="vraag" />
              <label htmlFor="vraag">Vraag stellen</label>
            </div>
          </div>
        </StyledInput>
        <StyledInput long>
          <label htmlFor="company">
            Bedrijfsnaam<sup>*</sup>
          </label>
          <input
            type="text"
            id="company"
            name="Bedrijfsnaam"
            required
            autoComplete={1}
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="firstname">
            Voornaam<sup>*</sup>
          </label>
          <input
            type="text"
            id="firstname"
            name="Voornaam"
            required
            autoComplete={1}
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="lastname">
            Achternaam<sup>*</sup>
          </label>
          <input
            type="text"
            id="lastname"
            name="Achternaam"
            required
            autoComplete={1}
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="email">
            E-mailadres<sup>*</sup>
          </label>
          <input
            type="email"
            id="email"
            name="emailadres"
            required
            autoComplete={1}
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="phone">Telefoon / GSM</label>
          <input type="tel" id="phone" name="telefoon" />
        </StyledInput>
        <StyledInput long>
          <label htmlFor="subject">
            Onderwerp<sup>*</sup>
          </label>
          <input type="text" id="subject" name="onderwerp" required />
        </StyledInput>
        <StyledInput long>
          <label htmlFor="message">
            Stel hier uw vraag<sup>*</sup>
          </label>
          <textarea id="message" name="bericht" required />
        </StyledInput>
        <button type="submit" value="Submit">
          Verstuur
        </button>
      </RouverpaForm>
    </FormWrapper>
  )
}

export default Form
