import * as RNLocalize from 'react-native-localize';
import i18n from 'i18next';

function getPhoneLanguage() {
  const locales = RNLocalize.getLocales();
  const currentLanguage = i18n.language;
  if (currentLanguage !== locales[0].languageCode) {
    i18n.changeLanguage(locales[0].languageCode);
  }
}

export default {getPhoneLanguage};
