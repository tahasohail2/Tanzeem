import * as Localization from "expo-localization";
import { I18nManager } from "react-native";
import { I18n } from "i18n-js";
import en from "./en";
import ur from "./ur";

const translations = { en, ur };
const i18n = new I18n(translations);

// Set the locale once at the beginning of your app.
const locales = Localization.getLocales();
const defaultLocale = locales[0].languageCode;
i18n.locale = defaultLocale;

// Enable fallback to the default language.
i18n.fallbacks = true;

// Enable RTL support if the selected language is a right-to-left language.
I18nManager.forceRTL(Localization.isRTL);

const changeLocale = (locale) => {
  console.log("locale", locale);
  i18n.locale = locale;
  I18nManager.forceRTL(Localization.isRTL);
};

export { i18n, changeLocale };
