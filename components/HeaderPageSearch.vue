<template>
  <div class="header-page__search header-page-search">
    <div class="header-page-search__input">
      <img src="../assets/img/ico/search.svg" alt="" class="search-icon" />
      <input type="text" v-model="inputValue"
        placeholder="Какой-то поиск"
        id="input-main"
      />
      <button class="clear-input" id="clear-input" v-on:click="clearInput()">
        <img src="../assets/img/ico/close.svg" alt="" />
      </button>
    </div>
    <div class="header-page-search__buttons">
      <button id="filter-btn" v-on:click="openFilter()">
        <svg svg id = "svg" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.58203 4.02393C1.58203 6.289 6.06234 10.8029 8.35978 12.9674C9.20255 13.7514 9.67565 14.7865 9.68385 15.8643V21.2913L14.3135 19.2598V15.8643C14.3135 14.7866 14.8007 13.7566 15.6375 12.9674C17.9361 10.8029 22.4153 6.29002 22.4153 4.02393" stroke="#7D7B84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.9987 5.77092C17.7516 5.77092 22.4153 4.86141 22.4153 3.73946C22.4153 2.61752 17.7516 1.70801 11.9987 1.70801C6.24571 1.70801 1.58203 2.61752 1.58203 3.73946C1.58203 4.86141 6.24571 5.77092 11.9987 5.77092Z" stroke="#7D7B84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </button>
      <button id="settings-btn" v-on:click="openSettings()">
        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2554 25H10.5818C10.289 25 10.0049 24.9026 9.77675 24.7239C9.54859 24.5452 9.39003 24.296 9.32736 24.0175L8.80479 21.6625C8.10767 21.3651 7.44666 20.9933 6.83391 20.5538L4.47527 21.285C4.19609 21.3717 3.89485 21.3628 3.62159 21.2598C3.34832 21.1568 3.11947 20.9659 2.97304 20.7188L0.63109 16.78C0.486188 16.5327 0.431796 16.2448 0.476812 15.9634C0.521827 15.6821 0.663585 15.424 0.878894 15.2313L2.70854 13.6063C2.62533 12.8701 2.62533 12.1274 2.70854 11.3912L0.878894 9.77C0.66328 9.57722 0.521329 9.31884 0.476307 9.03723C0.431284 8.75561 0.48586 8.46746 0.63109 8.22L2.9679 4.27875C3.11434 4.03164 3.34319 3.84074 3.61645 3.73773C3.88972 3.63473 4.19095 3.62583 4.47013 3.7125L6.82877 4.44375C7.14206 4.21875 7.46818 4.00875 7.80458 3.81875C8.12942 3.64125 8.46325 3.48 8.80479 3.33625L9.32864 0.98375C9.39101 0.705247 9.54927 0.45586 9.77719 0.276936C10.0051 0.0980123 10.289 0.000299957 10.5818 0H15.2554C15.5482 0.000299957 15.8321 0.0980123 16.06 0.276936C16.2879 0.45586 16.4462 0.705247 16.5086 0.98375L17.0375 3.3375C17.3971 3.4925 17.7489 3.66625 18.0891 3.86C18.4062 4.03875 18.7131 4.235 19.0084 4.44625L21.3683 3.715C21.6474 3.62865 21.9483 3.63771 22.2213 3.7407C22.4943 3.84369 22.7229 4.03441 22.8693 4.28125L25.2061 8.2225C25.504 8.73125 25.4013 9.375 24.9583 9.77125L23.1287 11.3962C23.2119 12.1324 23.2119 12.8751 23.1287 13.6112L24.9583 15.2362C25.4013 15.6337 25.504 16.2763 25.2061 16.785L22.8693 20.7262C22.7229 20.9734 22.494 21.1643 22.2207 21.2673C21.9475 21.3703 21.6462 21.3792 21.3671 21.2925L19.0084 20.5612C18.3962 21.0004 17.7355 21.3719 17.0388 21.6687L16.5086 24.0175C16.4459 24.2958 16.2876 24.5449 16.0597 24.7236C15.8318 24.9022 15.548 24.9998 15.2554 25ZM12.9135 7.5C11.5514 7.5 10.245 8.02678 9.28187 8.96447C8.31871 9.90215 7.77762 11.1739 7.77762 12.5C7.77762 13.8261 8.31871 15.0979 9.28187 16.0355C10.245 16.9732 11.5514 17.5 12.9135 17.5C14.2756 17.5 15.5819 16.9732 16.5451 16.0355C17.5082 15.0979 18.0493 13.8261 18.0493 12.5C18.0493 11.1739 17.5082 9.90215 16.5451 8.96447C15.5819 8.02678 14.2756 7.5 12.9135 7.5Z" fill="#7D7B84"/>
</svg>
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
      const filter_btn = document.getElementById("filter-btn");

      if (filter_btn.classList.contains("active")) {
        filter_btn.classList.remove("active");

        document.getElementById("table").style.width = "100%";
        document.getElementById("myDropdown").classList.remove('active');
        filter_btn.firstChild.firstChild.style.stroke = "#7D7B84";
        filter_btn.firstChild.lastChild.style.stroke = "#7D7B84";

      } else {
        filter_btn.classList.add("active");
        
        document.getElementById("myDropdown").classList.add('active');
        document.getElementById("table").style.width = "70%";
        filter_btn.firstChild.firstChild.style.stroke = '#9B42F5';
        filter_btn.firstChild.lastChild.style.stroke = '#9B42F5';
      }
    },
    openSettings() {
      const settings_btn = document.getElementById('settings');
       if (settings_btn.classList.contains("active")) {
        settings_btn.classList.remove("active");
        settings_btn.firstChild.firstChild.style.fill = "#7D7B84";
        } else {
        settings_btn.classList.add("active");
          settings_btn.firstChild.firstChild.style.fill = '#9B42F5';

        }
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
      border: 1px solid #9c42f5;
      box-shadow: 0 0 0 4px rgba(156, 66, 245, 0.12);
      transition: 0.40s;
    }
    input:hover {
      border: 1px solid #9c42f5;

      transition: 0.15s;
      padding-left: 54px;


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
