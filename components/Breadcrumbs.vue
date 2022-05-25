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
        <nuxt-link :to="crumb" v-if="$i18n.locale !== 'en'">
          {{ translateToRus(crumb) }}
        </nuxt-link>
        <nuxt-link :to="crumb" v-if="$i18n.locale == 'en'">
          {{ normalize(crumb) }}
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
      // console.log(this.crumbs);
      let crumbs = this.crumbs.slice(1).split("/");
      if (crumbs[0] == "en") {
        crumbs.splice(0, 1);
      }
      // console.log(crumbs);
      if (crumbs.length == 0) {
        return ["Main"];
      } else {
        return crumbs;
      }
    },
  },
  methods: {
    translateToRus(item) {
      // if () return item;
      switch (item) {
        case "": {
          return "Главная";
        }
        case "Test": {
          return "Тест";
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
        case "Postamat": {
          return "Постамат";
        }
        case "Camera": {
          return "Камера";
        }
        case "Light": {
          return "Освещение";
        }
        case "Wall": {
          return "Ограждение";
        }
        case "Sensor": {
          return "Датчик движения";
        }
        case "Dronoport": {
          return "Дронопорт";
        }
        default: {
          return item;
        }
      }
    },
    normalize(item) {
      if (item == "") return "Main";
      else return item;
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
