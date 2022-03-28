import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import { LanguageDetector } from "i18next-browser-languagedetector";

import EN from "./LocalLang/EN_Langouge.json";
import RU from "./LocalLang/RU_Langouge.json";
import AR from "./LocalLang/AR_Langouge.json";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: EN,
    },
    ru: {
        translation: RU,
    },
    ar: {
        translation: AR,
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "ar",
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;
