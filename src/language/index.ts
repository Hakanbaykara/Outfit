import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {En} from './locales/En';
import {Tr} from './locales/Tr';

const resources = {
  tr: Tr,
  en: En,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources,
  lng: 'tr',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
