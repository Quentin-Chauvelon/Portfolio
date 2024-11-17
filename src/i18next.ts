import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";


const bundledResources = {
    en: {
        translation: {},
        scene: {
            "instructions-text": "Click on an item outlined in yellow to learn more",
            "paper-text": "Seeking a Summer 2025 Internship in Software Engineering"
        },
        hero: {
            "title": {
                "hi": "Hi, I'm",
                "name": "Quentin"
            },
            "view-portfolio": "VIEW PORTFOLIO"
        }
    },
    fr: {
        translation: {},
        scene: {
            "instructions-text": "Cliquez sur un objet entouré en jaune pour en apprendre plus",
            "paper-text": "A la recherche d'un stage à partir de mai 2025 (de 8 à 16 semaines)"
        },
        hero: {
            "title": {
                "hi": "Bonjour, je suis",
                "name": "Quentin"
            },
            "view-portfolio": "VOIR LE PORTFOLIO"
        }
    }
};


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        backend: {
            backends: [
                Backend,
                resourcesToBackend(bundledResources)
            ],
            backendOptions: [{
                loadPath: "/locales/{{lng}}/{{ns}}.json"
            }]
        },
        react: {
            useSuspense: false
        },
        supportedLngs: ["en", "fr"],
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