import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            pt_BR: {
                translations: {
                    welcome: {
                        "heading": "Oi, eu sou Rafael Brandão",
                        "role": "Engenheiro de software"
                    },
                    about: {
                        "heading": "Sobre",
                        "about": "Eu sou um engenheiro de software, vivo em Salvador - Bahia, Brasil. Venho desenvolvendo aplicações em Java com times ágeis há mais de 15 anos na área pública e privada."
                    },
                    blog: {
                        "heading": "Blog",
                    },
                    footer: {
                        "copynote": "2021 Rafael Brandão. Todos os direitos reservados."
                    }
                }
            },
            en_US: {
                translations: {
                    welcome: {
                        "heading": "Hi, I'm Rafael Brandão",
                        "role": "Software engineer"
                    },
                    about: {
                        "heading": "About",
                        "about": "I am a Software Engineer, I live in Salvador - Bahia, Brazil. I've been developing Java applications for over 15 years with agility teams in private companies and government."
                    },
                    blog: {
                        "heading": "Blog",
                    },
                    footer: {
                        "copynote": "2021 Rafael Brandão. All rights reserved."
                    }
                }
            }
        },
        lng: "pt_BR",
        ns: ['translations'],
        defaultNS: 'translations',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;