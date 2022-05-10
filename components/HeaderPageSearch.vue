<template>
  <div class="header-page__search header-page-search">
    <div class="header-page-search__input">
      <img src="static/img/ico/search.svg" alt="" class="search-icon" />
      <input type="text" placeholder="Какой-то поиск" id="input-main" />
      <button class="clear-input" id="clear-input" onclick="clearInput()">
        <img src="static/img/ico/close.svg" alt="" class="filter-icon2" />
      </button>
    </div>
    <div class="header-page-search__buttons">
      <button class="button_filter" id="filter">
        <svg xmlns = "http://www.w3.org/2000/svg" with = "24px" height = "24px" viewBox="0 0 24 24" role = "pesentation" fill ="#72707c">
          <g><path d="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z"/></g>	
        </svg>
      </button>
      <button class="button_settings" id="settings">
        <svg xmlns = "http://www.w3.org/2000/svg" with = "24px" height = "24px" viewBox="0 0 24 24" role ="pesentation" fill ="#72707c">
          <g><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/></g>	
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
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
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
  margin-top: 30px;

  &__input {
    height: auto;
    width: 70%;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: end;
    gap: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    flex: 1 0 auto;
    .search-icon {
      position: absolute;
      left: 0px;
      top: 0px;
      pointer-events: none;
      top: 1.4rem;
      padding-left: 21px;
    }
    input {
      height: 100%;
      width: 100%;
      background-color: #f7f7f9;
      padding-left: 5px;
      padding: 15px 0px 15px 55px;
      border: none;
      margin-right: 0px;
      border-radius: 10px;
    }
    input:focus {
      border-bottom: 2px solid rgb(12, 12, 12);
      padding: 15px 0px 13px 55px;
    }
    button {
      position: absolute;
      right: 0px;
      top: 0px;
      top: 1.3rem;
      padding-right: 15px;
      background-color: transparent;
      cursor: pointer;
    }
  }

  &__buttons {
    display: flex;
    gap: 15px;

    button {
      position: relative;
      max-width: 100%;
      height: auto;
      padding: 15px 15px;
      background: rgba(254, 254, 255, 0.5);
      box-shadow: 2px 4px 20px rgba(3, 3, 3, 0.1);
      border-radius: 10px;
      color: #72707c;
      
    }

  }
}

</style>
