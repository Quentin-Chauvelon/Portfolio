import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
    });


enum Language {
    English = "en",
    French = "fr"
}

const getCurrentLanguage = () => {
    if (!i18n || !i18n.language) {
        return Language.English;
    }

    return i18n.language.includes(Language.French) ? Language.French : Language.English;
}

export { getCurrentLanguage, Language };
export default i18n;