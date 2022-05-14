<template>
  <nav class="header-page__navigation header-page-navigation">
    <div class="header-page-navigation__item">
      <div class="header-page-navigation__link">
        <a href="/">Главная</a>
      </div>
      <div class="header-page-navigation__splitter">></div>
    </div>
  </nav>
</template>

<script>
export default {};
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
