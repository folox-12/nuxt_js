<template>
  <div id="app">
    <Header></Header>
    <main>
      <div class="container">
        <Breadcrumbs :crumbs="getAllRoute" />
        <TitleOfPage
          :headerData="headerData"
          v-if="headerData"
          @click="ChangeEditStatus"
        ></TitleOfPage>
        <nuxt />
      </div>
    </main>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import HeaderPageNavigation from "@/components/HeaderPageNavigation.vue";
import TitleOfPage from "../components/TitleOfPage.vue";
import HeaderPageSearch from "../components/HeaderPageSearch.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
export default {
  name: "IndexPage",
  components: {
    Header,
    TitleOfPage,
    HeaderPageNavigation,
    HeaderPageSearch,
    Breadcrumbs,
  },
  data() {
    return {
      querySearch1: "",
      showFilter: false,
    };
  },
  computed: {
    getAllRoute() {
      return this.$route.fullPath;
    },
    headerData() {
      return this.$route.matched.map((r) => {
        return r.components.default.options.headerData;
      })[0];
    },
  },
  methods: {
    openFilter() {
      this.showFilter = !this.showFilter;
    },
    ChangeEditStatus() {
      this.$store.commit(
        "setChangestatus",
        !this.$store.getters["GetChangestatus"]
      );
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
#app {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
.container {
  max-width: 1140px;
  margin: 0px auto;
}
main {
  margin-top: 103px;
}
@media (max-width: 667px) {
  main {
    margin-top: 0px;
  }
}
</style>
