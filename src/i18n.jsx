import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uz from './Locales/uzbek.json'
import ru from './Locales/russian.json'
import en from './Locales/english.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uz',
    debug: true,
    lng: i18n.language,
    resources: {
        uz:{translation: uz},
        ru:{translation: ru},
        en:{translation: en},
    },
    detection:{
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
        lookupLocalStorage: 'language',
    }
  });

  export default i18n;