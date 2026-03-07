import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const LANGUAGE_STORAGE_KEY = 'language'
const supportedLanguages = ['en', 'fr'] as const

function normalizeLanguage(language: string | null | undefined) {
    if (!language) return null

    const normalized = language.toLowerCase()
    if (normalized.startsWith('fr')) return 'fr'
    if (normalized.startsWith('en')) return 'en'

    return null
}

function getInitialLanguage() {
    if (typeof window === 'undefined') {
        return 'en'
    }

    const storedLanguage = normalizeLanguage(
        window.localStorage.getItem(LANGUAGE_STORAGE_KEY),
    )
    if (storedLanguage) {
        return storedLanguage
    }

    return normalizeLanguage(window.navigator.language) ?? 'en'
}

const resources = {
    en: {
        translation: {
            nav: { jobs: 'Jobs', projects: 'Projects', education: 'Education' },
            sections: {
                profile: 'Profile',
                skills: 'Skills',
                experience: 'Experience',
                projects: 'Projects',
                education: 'Education',
            },
            footer: { rights: 'All rights reserved.' },
            weather: {
                pageTitle: 'Weather',
                pageSubtitle:
                    'This page detects your approximate location and shows the current local weather conditions.',
                loading: 'Loading...',
                unavailable: 'Weather unavailable',
                wind: 'Wind',
                backToCv: 'Back to resume',
            },
        },
    },
    fr: {
        translation: {
            nav: { jobs: 'Expériences', projects: 'Projets', education: 'Formation' },
            sections: {
                profile: 'Présentation',
                skills: 'Compétences',
                experience: 'Expériences',
                projects: 'Projets',
                education: 'Formation',
            },
            footer: { rights: 'Tous droits réservés.' },
            weather: {
                pageTitle: 'Météo',
                pageSubtitle:
                    'Cette page détecte votre position approximative et affiche les conditions météo locales actuelles.',
                loading: 'Chargement...',
                unavailable: 'Météo indisponible',
                wind: 'Vent',
                backToCv: 'Retour au CV',
            },
        },
    },
}

i18n.use(initReactI18next).init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,
    interpolation: { escapeValue: false },
})

if (typeof window !== 'undefined') {
    i18n.on('languageChanged', (language) => {
        const normalizedLanguage = normalizeLanguage(language)
        if (!normalizedLanguage) {
            return
        }

        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage)
    })
}

export default i18n
