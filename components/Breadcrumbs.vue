<!-- <div class="bread">
    <div v-for="crumb in getAllRoute" :key="crumb">
    </div>
  </div> -->
<template>
  <nav class="header-page__navigation header-page-navigation">
    <div
      class="header-page-navigation__item"
      v-for="crumb in getAllRoute"
      :key="crumb"
    >
      <div class="header-page-navigation__link">
        <nuxt-link :to="crumb">
          {{ translateToRus(crumb) }}
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
      return crumbs;
    },
  },
  methods: {
    translateToRus(item) {
      switch (item) {
        case "": {
          return "Главная";
        }
        case "Infrastructure": {
          return "Инфраструктура";
        }
        case "Map": {
          return "Карта";
        }
        case "Platform": {
          return "Платформа";
        }
        default: {
          return item;
        }
      }
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
