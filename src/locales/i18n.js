import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      welcome_message: "Bem-vindo ao App",
      change_lang: "Change the language",
      increment: "aumenta",
      decrement: "diminui",
    },
  },
  en: {
    translation: {
      welcome_message: "Welcome to App",
      change_lang: "Mudar a língua",
      increment: "increment",
      decrement: "decrement",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt"
  });

export default i18n;
