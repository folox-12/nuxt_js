<template>
  <div id="app">
    <Header></Header>

    <main>
      <div class="container">
        <Breadcrumbs :crumbs="getAllRoute" />
      
        <TitleOfPage :headerData="headerData" v-if="headerData" @click='Changestatus'></TitleOfPage>
       
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
import Loop from "../components/icons/Loop.vue";
export default {
  components: {
    Header,
    TitleOfPage,
    HeaderPageNavigation,
    Loop,
    Breadcrumbs,
  },
  data(){
    return{
      status : this.$store.getters['GetChangestatus'] ,
    }
  },
  computed: {
    getAllRoute() {
      return this.$route.fullPath;
    },
      headerData() {
        return this.$route.matched.map(r => {
          return r.components.default.options.headerData
        })[0]
      }
  },
  methods:{
    Changestatus(){
      if(this.$store.getters["GetChangestatus"] == false){
      this.$store.commit("setChangestatus", true)
      }
      else{
      this.$store.commit("setChangestatus", false)
      }
     
    },
    
  }
};
</script>

<style lang="scss">
@import "../assets/scss/fonts";
@import url("../assets/scss/_nullstyle.scss");
</style>
