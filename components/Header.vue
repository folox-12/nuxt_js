<template>
  <div>
    <header class="header" >
      <div class="container">
        <div class="header__body">
          <div class="header__row">
            <div class="header__icon">
              <img src="../assets/img/fd-logo.png" alt="#" />
            </div>
            <nav class="header__menu" :class="{ active1: isOpen }">
              <nuxt-link no-prefetch :to="localePath('/')">{{
                $t("landing-areas-list-title-header")
              }}</nuxt-link>
              <nuxt-link
                no-prefetch
                active-class="nuxt-link-exact-active"
                :to="localePath('/Platform1')"
                >{{ $t("platforms-title") }}</nuxt-link
              >
              <nuxt-link no-prefetch :to="localePath('Test')">{{
                $t("test-title")
              }}</nuxt-link>
            </nav>
            <div class="header__account">
              
              <nuxt-link href="" :to="localePath('/User')">
                <img src="@/assets/img/fd-logo.png" />
              </nuxt-link>
              <div class="lang-selector">
                <a class='lang-button'
                  href="#"
                  v-if="$i18n.locale == 'en'"
                  @click.prevent.stop="$i18n.setLocale('ru')"
                  ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.24922 22.6125V17.4375L4.38672 20.2875C5.47422 21.3 6.78672 22.0875 8.24922 22.6125V22.6125ZM15.7492 22.6125C17.2117 22.0875 18.5242 21.3 19.6117 20.2875L15.7492 17.4V22.6125V22.6125ZM1.38672 15.75C1.49922 16.125 1.64922 16.4625 1.83672 16.8375L3.29922 15.75H1.38672ZM20.6992 15.75L22.1617 16.8375C22.3117 16.5 22.4617 16.125 22.6117 15.75H20.6992Z" fill="#2A5F9E"/>
                  <path d="M8.81406 14.25H0.976562C1.08906 14.775 1.23906 15.2625 1.38906 15.75H3.30156L1.83906 16.8375C2.13906 17.475 2.47656 18.0375 2.88906 18.6L6.75156 15.75H8.25156V16.5L3.86406 19.725L4.38906 20.25L8.25156 17.4375V22.6125C8.73906 22.8 9.22656 22.9125 9.75156 23.025V14.25H8.81406ZM23.0266 14.25H14.2516V23.025C14.7766 22.9125 15.2641 22.7625 15.7516 22.6125V17.4375L19.6141 20.25C20.1391 19.7625 20.5891 19.2375 21.0391 18.675L17.0266 15.75H19.5766L21.8641 17.4375C21.9766 17.25 22.0891 17.025 22.1641 16.8375L20.7016 15.75H22.6141C22.7641 15.2625 22.9141 14.775 23.0266 14.25" fill="white"/>
                  <path d="M2.88672 18.6C3.18672 19.0125 3.48672 19.3875 3.82422 19.7625L8.24922 16.5375V15.7875H6.74922L2.88672 18.6ZM17.0617 15.75L21.0742 18.675C21.2242 18.4875 21.3367 18.3 21.4867 18.1125C21.5242 18.075 21.5242 18.0375 21.5617 18.0375C21.6742 17.85 21.8242 17.625 21.9367 17.4375L19.5742 15.75H17.0617Z" fill="#ED4C5C"/>
                  <path d="M15.7492 1.3877V6.5627L19.6117 3.7127C18.5242 2.7002 17.2117 1.9127 15.7492 1.3877ZM8.24922 1.3877C6.78672 1.9127 5.47422 2.7002 4.38672 3.7127L8.24922 6.6002V1.3877ZM22.6117 8.2502C22.4992 7.8752 22.3492 7.5377 22.1617 7.1627L20.6992 8.2502H22.6117V8.2502ZM3.29922 8.2502L1.83672 7.1627C1.68672 7.5377 1.53672 7.8752 1.38672 8.2502H3.29922Z" fill="#2A5F9E"/>
                  <path d="M15.1891 9.7501H22.9891C22.8766 9.2251 22.7266 8.7376 22.5766 8.2501H20.6641L22.1266 7.1626C21.8266 6.5251 21.4891 5.9626 21.0766 5.4001L17.2516 8.2501H15.7516V7.5001L20.1391 4.2751L19.6141 3.7501L15.7516 6.5626V1.3876C15.2641 1.2001 14.7766 1.0876 14.2516 0.975098V9.7501H15.1891ZM0.976562 9.7501H9.75156V0.975098C9.22656 1.0876 8.73906 1.2376 8.25156 1.3876V6.5626L4.38906 3.7501C3.86406 4.2376 3.41406 4.7626 2.96406 5.3251L6.97656 8.2501H4.42656L2.13906 6.5626C2.02656 6.7501 1.91406 6.9751 1.83906 7.1626L3.30156 8.2501H1.38906C1.23906 8.7376 1.08906 9.2251 0.976562 9.7501Z" fill="white"/>
                  <path d="M21.1141 5.3998C20.8141 4.9873 20.5141 4.6123 20.1766 4.2373L15.7516 7.4623V8.2123H17.2516L21.1141 5.3998V5.3998ZM6.93906 8.2498L2.96406 5.3248C2.81406 5.5123 2.70156 5.6998 2.55156 5.8873C2.51406 5.9248 2.51406 5.9623 2.47656 5.9623C2.36406 6.1498 2.21406 6.3748 2.10156 6.5623L4.38906 8.2498H6.93906Z" fill="#ED4C5C"/>
                  <path d="M23.025 9.75H14.25V0.975C13.5375 0.825 12.7875 0.75 12 0.75C11.2125 0.75 10.4625 0.825 9.75 0.975V9.75H0.975C0.825 10.4625 0.75 11.2125 0.75 12C0.75 12.7875 0.825 13.5375 0.975 14.25H9.75V23.025C10.4625 23.175 11.2125 23.25 12 23.25C12.7875 23.25 13.5375 23.175 14.25 23.025V14.25H23.025C23.175 13.5375 23.25 12.7875 23.25 12C23.25 11.2125 23.175 10.4625 23.025 9.75Z" fill="#ED4C5C"/>
                  </svg>EN</a
                >
                <a class="lang-button"
                  href="#"
                  v-if="$i18n.locale !== 'en'"
                  @click.prevent.stop="$i18n.setLocale('en')"
                  ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9617 0.75C7.08672 0.75 2.92422 3.9 1.38672 8.25H22.6117C21.0367 3.9 16.8742 0.75 11.9617 0.75Z" fill="#F9F9F9"/>
                  <path d="M11.9617 23.25C16.8742 23.25 21.0367 20.1 22.5742 15.75H1.38672C2.92422 20.1375 7.08672 23.25 11.9617 23.25Z" fill="#ED4C5C"/>
                  <path d="M1.3875 8.25C0.975 9.4125 0.75 10.6875 0.75 12C0.75 13.3125 0.975 14.5875 1.3875 15.75H22.6125C23.025 14.5875 23.25 13.3125 23.25 12C23.25 10.6875 23.025 9.4125 22.6125 8.25H1.3875Z" fill="#428BC1"/>
                  </svg>
                  RU</a
                >
              </div>
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
.lang-button{
      height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #454254;
}

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
    z-index: 1001;
    margin-right: 20px;
    top: 43px;
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
    &__menu{
    position: fixed;
    left: -100%;
    width: 100%;
    max-width: 300px;
    height: 100%;
    background-color: white;
    transition: all 0.3s ease 0s;
    padding: 80px 10px 20px 10px;
    z-index: 2;
    flex-direction: column;
      gap: 10px;
    }
    &__menu.active1{
      left: 0;
      top:20px;
      z-index: 1005;
     a{
       padding-left:50px;
     }
    }
    &__row {
     
      padding-left:30px;
    }
   &__account{
     a{
       padding-right:10px;
     }
   }
    
  }
 
}
</style>
