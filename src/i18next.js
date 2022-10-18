import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./assets/iI8/english.json";
import translationIN from "./assets/iI8/hindi.json";

const resources = {
  en: translationEN,
  hi: translationIN, 
};

i18n.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    lng: 'en',
    fallbackLng:'en-GB',
    resources,
    interpolation: {
      escapeValue: false
    },
  });

export default i18n;
