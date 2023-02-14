import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: en,
    resources: {
        en: {
            tranlations: require('./en.json')
        },
        fi: {
            tranlations: require('./fi.json')
        }
    }
    ns: ['translations'],
    defaultNS: 'translations'
});

i18n.languages = ['en', 'fi'];

export default i18n;

    }