// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Example translations
const resources = {
  en: {
    translation: {
      about: 'About',
      project: 'Project',
      team: 'Team',
      seeMore: 'See More'
    },
  },
  ge: {
    translation: {
      about: 'ჩვენს შესახებ',
      project: 'პროექტი',
      team: 'ჩვენი გუნდი',
      seeMore: 'მეტის ნახვა'
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ge', // default language
  keySeparator: false, // key separator if you use nested translations (e.g., 'parent.child')
  interpolation: {
    escapeValue: false, // react already safe from xss
  },
});

export default i18n;
