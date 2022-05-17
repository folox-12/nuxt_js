<template>
  <div id="app">
    <Header></Header>
    <main>
      <div class="container">
        <Breadcrumbs :crumbs="getAllRoute" />
        <TitleOfPage></TitleOfPage>
        <nuxt />
      </div>
    </main>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import HeaderPageNavigation from "../components/HeaderPageNavigation.vue";
import TitleOfPage from "../components/TitleOfPage.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
export default {
  name: "Map",
  components: {
    Header,
    TitleOfPage,
    HeaderPageNavigation,
    Breadcrumbs,
  },
  computed: {
    getAllRoute() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style lang="scss">
@import url("../assets/scss/_nullstyle.scss");
@import "../assets/scss/fonts";

body {
  background-color: #f7f7f9;
}
</style>
