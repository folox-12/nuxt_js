<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__body">
          <div class="header__row">
            <div class="header__icon">
              <img src="../assets/img/fd-logo.png" alt="#" />
            </div>
            <nav class="header__menu">
              <nuxt-link to="/">Список площадок</nuxt-link>
              <nuxt-link active-class="nuxt-link-exact-active" to="/Map"
                >Карта</nuxt-link
              >
              <nuxt-link active-class="nuxt-link-exact-active" to="/Dronoport"
                >Дронопорт</nuxt-link
              >
              <nuxt-link active-class="nuxt-link-exact-active" to="/Equipment"
                >Оснащение</nuxt-link
              >
              <nuxt-link
                active-class="nuxt-link-exact-active"
                to="/Infrastructure"
                >Инфраструктура</nuxt-link
              >
            </nav>
            <div class="header__account">
              <img src="../assets/img/fd-logo.png" />
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script></script>
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
</style>
