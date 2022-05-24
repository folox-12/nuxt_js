import Vue from "vue";
import info from "../store/info";

const locales = {
  ru: {
    testTitle: "Тест",
  },
  en: {
    testTitle: "Test",
  },
};
// console.log(locales[);

Vue.filter("localizationFilter", (lang) => {
  const locale = info.getters.locale || "hhh";
  console.log(lang, locale);
  return locales["en"][lang] || "huita";
});
