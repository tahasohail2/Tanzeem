import React, { createContext, useContext, useState } from "react";
import * as Localization from "expo-localization";
import { I18nManager } from "react-native";
import { I18n } from "i18n-js";
import en from "./en";
import ur from "./ur";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/slices/languageSlice";

const TranslatorContext = createContext();

export const TranslatorProvider = ({ children }) => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const translations = { en, ur };
  const i18nInstance = new I18n(translations);

  // Set the locale once at the beginning of your app.
  const locales = Localization.getLocales();
  const defaultLocale = locales[0].languageCode;
  i18nInstance.locale = currentLanguage || defaultLocale;

  // Enable fallback to the default language.
  i18nInstance.fallbacks = true;

  // Enable RTL support if the selected language is a right-to-left language.
  I18nManager.forceRTL(Localization.isRTL);

  const changeLocale = (locale) => {
    dispatch(setLanguage(locale));
    i18nInstance.locale = locale;
    I18nManager.forceRTL(Localization.isRTL);
  };

  return (
    <TranslatorContext.Provider value={{ i18n: i18nInstance, changeLocale }}>
      {children}
    </TranslatorContext.Provider>
  );
};

export const useTranslator = () => useContext(TranslatorContext);
