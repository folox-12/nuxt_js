import Vue from "vue";
import info from "../store/info";
import { mapState } from "vuex";

const locales = {
  ru: {
    testTitle: "Тест",
  },
  en: {
    testTitle: "Test",
  },
};

export default () => {
  Vue.filter("localizationFilter", (lang) => {
    const locale = info.state.locale || "hhh";
    console.log(info.state.locale);
    return locales[locale][lang] || "huita";
    info.mutations.updateInfo();
  });
};
