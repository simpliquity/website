
const React = require('react');
var ReactI18nfiy = require('react-i18nify');
const { I18n, Translate, Localize } = ReactI18nfiy;

I18n.setTranslations({
  en: {
    menu: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
    },
  },
  fr: {
    menu: {
      home: 'Accueil',
      about: 'Que faisons-nous ?',
      contact: 'Contact',
    },
  },
  de: {
    menu: {
      home: 'Home',
      about: 'About',
      contact: 'Kontakt',
    },
  }
});
