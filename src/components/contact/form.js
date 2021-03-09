import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

import { FormWrapper, StyledInput, RouverpaForm } from "./contactStyles"

const Form = ({ location }) => {
  const { t } = useTranslation()
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
            {t("contact.form.type.label")}
            <sup>*</sup>
          </label>
          <div className="radio__buttons">
            <div>
              <label>
                <input
                  type="radio"
                  id="offerte"
                  name="type"
                  value="offerte"
                  required
                  defaultChecked={location.search.includes("type=offerte")}
                />
                {t("contact.form.type.value1")}
              </label>
            </div>
            <div>
              <label>
                <input type="radio" id="vraag" name="type" value="vraag" />
                {t("contact.form.type.value2")}
              </label>
            </div>
          </div>
        </StyledInput>
        <StyledInput long>
          <label htmlFor="company">
            {t("contact.form.company")}
            <sup>*</sup>
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
            {t("contact.form.firstname")}
            <sup>*</sup>
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
            {t("contact.form.lastname")}
            <sup>*</sup>
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
            {t("contact.form.email")}
            <sup>*</sup>
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
          <label htmlFor="phone">{t("contact.form.phone")}</label>
          <input type="tel" id="phone" name="telefoon" />
        </StyledInput>
        <StyledInput long>
          <label htmlFor="subject">
            {t("contact.form.subject")}
            <sup>*</sup>
          </label>
          <input type="text" id="subject" name="onderwerp" required />
        </StyledInput>
        <StyledInput long>
          <label htmlFor="message">
            {t("contact.form.message")}
            <sup>*</sup>
          </label>
          <textarea id="message" name="bericht" required />
        </StyledInput>
        <button type="submit" value="Submit">
          {t("contact.form.send")}
        </button>
      </RouverpaForm>
    </FormWrapper>
  )
}

export default Form
