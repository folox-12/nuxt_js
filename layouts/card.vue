<template>
  <div id="app">
    <Header></Header>
    <main>
      <div class="container">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import HeaderPageNavigation from "../components/HeaderPageNavigation.vue";
import TitleOfPage from "../components/TitleOfPage.vue";
import Loop from "../components/icons/Loop.vue";
export default {
  components: {
    Header,
    TitleOfPage,
    HeaderPageNavigation,
    Loop,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/fonts";
@import url("../assets/scss/_nullstyle.scss");
</style>
