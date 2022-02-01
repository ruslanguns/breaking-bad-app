import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cache from 'i18next-localstorage-cache';
import backend from "i18next-xhr-backend";
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

  .use(backend)
  .use(Cache)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: lng,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: EN_I18N,
      es: ES_I18N,
      eu: EU_I18N
    },
    react: {
      // Turn off the use of React Suspense
      useSuspense: false
    }
  });

export default i18n;
