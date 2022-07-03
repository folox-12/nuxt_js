<!-- <div class="bread">
    <div v-for="crumb in getAllRoute" :key="crumb">
    </div>
  </div> -->
<template>
  <nav class="header-page__navigation header-page-navigation">
    <div
      class="header-page-navigation__item"
      v-for="(crumb, ci) in getAllRoute"
      :key="crumb"
    >
      <div class="header-page-navigation__link">
        <nuxt-link :to="localePath(createLink(getAllRoute.slice(0, ci + 1)))">
          {{ $t(checkIndex(crumb)) + pageNumber }}
        </nuxt-link>
      </div>
      <div class="header-page-navigation__splitter">></div>
    </div>
  </nav>
</template>
<script>
export default {
  data: {
    routerLinks: {},
    pageNumber: "",
  },
  props: {
    crumbs: {
      type: String,
      required: true,
    },
  },
  computed: {
    getAllRoute() {
      let crumbs = this.crumbs.slice(1).split("/");
      if (crumbs[0] == "en" || crumbs[0] == "") {
        crumbs.splice(0, 1);
      }
      if (crumbs.length == 0) {
        return ["Main"];
      } else {
        return crumbs;
      }
    },
  },
  methods: {
    checkIndex(crumb) {
      let lastIndex = 1;
      for (let i = 1; !isNaN(parseInt(crumb.slice(-i))); i++) {
        lastIndex = i;
      }

      if (!isNaN(parseInt(crumb.slice(-lastIndex)))) {
        this.pageNumber = " №" + crumb.slice(-lastIndex);
        return crumb.slice(0, -lastIndex);
      } else {
        this.pageNumber = "";
        return crumb;
      }
    },
    createLink(crumbs) {
      let _link = "";
      crumbs.forEach((element) => {
        _link += "/" + element;
      });
      return _link;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-page {
  &__navigation {
    display: flex;
    padding-top: 65px;
    margin-bottom: 30px;
  }
}
@media (max-width: 667px){
   .header-page {
  &__navigation {
      padding-top: 125px;
    }
   }
 }
.header-page-navigation {
  &__item {
    display: flex;
  }

  &__link {
    a {
      font-family: "Montserrat";
      font-style: bold;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #141029;
      text-decoration: none;
    }
  }

  &__splitter {
    margin: 0 12px;
    font-family: "Montserrat";
    font-style: bold;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #141029;
    text-decoration: none;
  }
}
</style>
