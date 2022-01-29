import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { EN_I18N } from "../i18n/en";
import { ES_I18N } from "../i18n/es";
import { EU_I18N } from "../i18n/eu";
const allowedLanguages = ["en", "es", "eu"];

let lng = allowedLanguages[0];

const storageLanguage = localStorage.getItem("language");
if (storageLanguage && allowedLanguages.indexOf(storageLanguage) > -1) {
  lng = storageLanguage;
}

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: lng,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: EN_I18N,
      es: ES_I18N,
      eu: EU_I18N
    }
  });

/*i18n.use(initReactI18next).init({
  lng,
  debug: true,
  keySeparator: false,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        languages: {
          english: "English",
          spanish: "Spanish",
          basque: "Basque",
        },
        title: {
          characters: "All Characters",
          episodes: "List of episodes",
          home: "Principal characters",
          votes: "Principal Characters Votes",
        },
      },
    },
    de: {
      namespace1: {
        key: "hallo von namespace 1",
      },
      namespace2: {
        key: "hallo von namespace 2",
      },
    },
  },
});*/

export default i18n;
