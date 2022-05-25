<template>
  <div>
    <header class="header" :class="{ active1: isOpen }">
      <div class="container">
        <div class="header__body">
          <div class="header__row">
            <div class="header__icon">
              <img src="../assets/img/fd-logo.png" alt="#" />
            </div>
            <nav class="header__menu">
              <nuxt-link no-prefetch :to="localePath('/')">{{
                $t("landing-areas-list-title")
              }}</nuxt-link>
              <nuxt-link
                no-prefetch
                active-class="nuxt-link-exact-active"
                :to="localePath('Platform')"
                >{{ $t("platforms-title") }}</nuxt-link
              >
              <nuxt-link no-prefetch :to="localePath('Test')">{{
                $t("test-title")
              }}</nuxt-link>
            </nav>
            <div class="header__account">
              <div class="lang-selector">
                <a
                  href="#"
                  v-if="$i18n.locale == 'en'"
                  @click.prevent.stop="$i18n.setLocale('ru')"
                  >EN</a
                >
                <a
                  href="#"
                  v-if="$i18n.locale !== 'en'"
                  @click.prevent.stop="$i18n.setLocale('en')"
                  >RU</a
                >
                <!-- <nuxt-link
                v-if="$i18n.locale !== 'en'"
                :to="switchLocalePath('en')"
              >
                Русский
              </nuxt-link>

              <nuxt-link
                v-if="$i18n.locale !== 'ru'"
                :to="switchLocalePath('ru')"
              >
                English
              </nuxt-link> -->
              </div>
              <img src="../assets/img/fd-logo.png" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <div
      class="header__burger"
      :class="{ active: isOpen }"
      @click.prevent="toggle"
    >
      <span> </span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      isRuLocate: true,
      isOpen: false,
      // testTitle: true,
    };
  },
  methods: {
    ...mapMutations(["setLocate"]),

    toggle() {
      this.isOpen = !this.isOpen;
    },

    changeLang() {
      this.setLocate();
    },
  },
  computed: {
    ...mapGetters(["locale"]),

    selectedLocate: {
      get() {
        return this.locate;
      },
      set(lang) {
        this.setLocate(lang);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: #fff;

  &__body {
    padding: 24px 0;
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 0 35px;
  }

  &__icon {
    min-width: 120px;
    max-width: 200px;
    position: relative;
    height: 51px;
    cursor: pointer;
    img {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      object-fit: contain;
    }
  }

  &__account {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: auto;
    img {
      width: 55px;
      height: 55px;
      border: 2px solid #9c42f5;
      border-radius: 90%;
      padding: 2px;
    }
  }

  &__menu {
    display: flex;
    gap: 0 35px;
    // margin-left: 5rem;
    a {
      font-size: 16px;
      text-decoration: none;
      line-height: 1.75;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      color: rgba(20, 16, 41, 0.8);
      cursor: pointer;
      transition: 0.2s;
    }
  }
}
a.nuxt-link-exact-active {
  color: #9b42f2;
}
.nuxt-link-exact-active {
  color: #9b42f2;
}
@media (max-width: 667px) {
  .header__burger {
    display: block;
    position: relative;
    width: 20px;
    height: 16px;
    z-index: 3;
    margin-right: 20px;
    top: 15px;
    left: 15px;
    span {
      content: "";
      background-color: rgba(20, 16, 41, 0.8);
      position: absolute;
      height: 3px;
      left: 0;
      top: 6px;
      transition: all 0.3s ease 0s;
      width: 100%;
    }
  }

  .header__burger:before,
  .header__burger:after {
    content: "";
    background-color: rgba(20, 16, 41, 0.8);
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0;
    transition: all 0.3s ease 0s;
  }
  .header__burger:before {
    top: 0px;
  }
  .header__burger:after {
    bottom: 1.5px;
    height: 3px;
  }
  .header__burger.active:before {
    transform: rotate(45deg);
    top: 4px;
    background: rgba(51, 50, 54, 8);
  }
  .header__burger.active:after {
    transform: rotate(-45deg);
    bottom: 9px;
    background: rgba(51, 50, 54, 8);
  }
  .header__burger.active span {
    transform: scale(0);
    background: rgba(51, 50, 54, 8);
  }
  .header__burger.active {
    position: fixed;
    width: 20px;
    height: 16px;
    left: 270px;
  }
  .header {
    position: fixed;
    left: -100%;
    width: 100%;
    max-width: 300px;
    height: 100%;
    background-color: white;
    transition: all 0.3s ease 0s;
    padding: 80px 10px 20px 10px;
    z-index: 2;

    &__row {
      flex-direction: column;
      gap: 40px;
    }
    &__menu {
      flex-direction: column;
      gap: 10px;
    }
    &__account {
      display: none;
    }
  }
  .header.active1 {
    left: 0;
  }
}
</style>
