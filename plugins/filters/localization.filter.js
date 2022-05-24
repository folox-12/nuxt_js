import Vue from "vue";
import info from "../../store/info";
import store from "@/store/index.js";

const locales = {
  ru: {
    testTitle: "Тест",
  },
  en: {
    testTitle: "Test",
  },
};
// console.log(locales[);
export default () => {
  Vue.filter("localizationFilter", (lang) => {
    const locale = info.getters.locale || "hhh";
    // const locale = this.store.state.locale || "hhh";

    console.log(lang, locale);
    return locales["en"][lang] || "huita";
  });
};
