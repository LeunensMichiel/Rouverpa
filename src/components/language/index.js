import { useI18next } from "gatsby-plugin-react-i18next"
import React from "react"
import {
  LanguageSwitcher,
  CurrentLanguage,
  LanguageList,
} from "./languageStyles"

const LanguageDropdown = () => {
  const { languages, changeLanguage, language } = useI18next()

  return (
    <LanguageList>
      <CurrentLanguage>{language}</CurrentLanguage>
      <LanguageSwitcher>
        {languages.map(lng => (
          <li key={lng}>
            <button onClick={() => changeLanguage(lng)}>{lng}</button>
          </li>
        ))}
      </LanguageSwitcher>
    </LanguageList>
  )
}

export default LanguageDropdown
