
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'fi',
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    es: {
      translations: require('./locales/es/translations.json')
    },
    fi: {
        translations: require('./locales/fi/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'es', 'fi'];

export default i18n;
