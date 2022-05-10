<template>
  <div class="header-page__search header-page-search">
    <div class="header-page-search__input">
      <img src="../assets/img/ico/search.svg" alt="" class="search-icon" />
      <input
        type="text"
        v-model="inputValue"
        placeholder="Какой-то поиск"
        id="input-main"
      />
      <button class="clear-input" id="clear-input" v-on:click="clearInput()">
        <img src="../assets/img/ico/close.svg" alt="" />
      </button>
    </div>
    <div class="header-page-search__buttons">
      <button id="filter" v-on:click="openFilter()">
        <img src="../assets/img/ico/filter.svg" alt="" />
      </button>
      <button id="settings" v-on:click="openSettings()">
        <img src="../assets/img/ico/settings.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  mounted() {},
  methods: {
    clearInput() {
      this.inputValue = "";
    },
    openFilter() {
      const filter_btn = document.getElementById("filter");
      if (filter_btn.classList.contains("active")) {
        filter_btn.classList.remove("active");
        document.getElementById("table").style.width = "100%";
      } else {
        filter_btn.classList.add("active");
        document.getElementById("table").style.width = "70%";
      }
    },
    openSettings() {
      alert("Opened Settings");
    },
  },
};
</script>

<style lang="scss" scoped>
.header-page {
  &__search {
    display: flex;
    margin-bottom: 30px;
    gap: 0 15px;
  }
}
.header-page-search {
  color: #72707c;
  display: flex;
  justify-content: space-between;
  gap: 18px;
  margin-top: 30px;

  &__input {
    height: auto;
    width: 70%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    filter: drop-shadow(2px 4px 20px rgba(3, 3, 3, 0.1));
    flex: 1 0 auto;
    .search-icon {
      position: absolute;
      left: 0px;
      pointer-events: none;
      opacity: 0.5;
      padding-left: 18px;
      height: 30%;
    }
    input {
      height: 100%;
      width: 100%;
      background-color: #f7f7f9;
      padding: 10px 0px 10px 55px;
      border-radius: 10px;
    }
    input:focus {
      border-bottom: 2px solid rgba(12, 12, 12, 0.1);
      padding: 15px 0px 13px 55px;
    }
    button {
      position: absolute;
      right: 0px;
      top: 1.6rem;
      padding-right: 15px;
      background-color: transparent;
      cursor: pointer;
      align-items: center;
    }
  }

  &__buttons {
    display: flex;
    gap: 15px;

    button {
      position: relative;
      max-width: 100%;
      height: auto;
      width: 55px;
      padding: 15px 15px;
      background: rgba(254, 254, 255, 0.5);
      box-shadow: 2px 4px 20px rgba(3, 3, 3, 0.1);
      border-radius: 10px;
      color: #72707c;
      transition: all 0.3s ease;
      &.active {
        background: rgba(238, 238, 238, 0.541);
        box-shadow: 2px 4px 20px rgba(1, 1, 1, 0.1);
      }
    }
  }
}
</style>
