<template>
  <div class="title-of-page">
    <div class="header-page">
      <div class="header-page__mainblok">
        <div class="header-page__title">
          <h1>Список посадочных площадок</h1>
          <div class="header-page__button">
            <button class="btn">Применить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-page {
  &__title {
    display: flex;
    justify-content: space-between;
    h1 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #141029;
    }
  }

  &__button {
    button {
      background: linear-gradient(90deg, #0094ff 3.2%, #9b42f5 73.28%);
      color: white;
      height: 48px;
      min-width: 200px;
      font-family: "Montserrat", serif;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      -webkit-transition: 0.5s;
      transition: all 0.2s;
    }
    button:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      color: rgba(255, 255, 255, 0.6);
    }
  }

}
</style>
