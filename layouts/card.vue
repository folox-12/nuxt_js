<template>
  <div id="app">
    <Header></Header>
    <main>
      <div class="container">
        <HeaderPageNavigation></HeaderPageNavigation>
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
export default {
  components: {
    Header,
    TitleOfPage,
    HeaderPageNavigation,
  },
};
</script>

<style></style>
