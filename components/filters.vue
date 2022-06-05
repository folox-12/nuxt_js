<template>
  <keep-alive>
    <div class="filters">
      <div class="header-page__search header-page-search">
        <fd-input
          v-model="inputValue"
          :placeholder="placeHolder"
          :icon="icon"
        ></fd-input>
        <div class="header-page-search__buttons">
          <button
            v-for="key in sortedRightSideViews"
            :key="key.name"
            @click="toggleShowRightSide(key.name)"
            :class="isBtnActive(key.name)"
          >
            <img :src="key.img" alt="#" />
          </button>
        </div>
      </div>
      <div class="filter-content">
        <slot
          :viewFormat="viewFormat"
          :showRightSide="showRightSide"
          :switchTypeOfView="switchTypeOfView"
          :tableDescription="tableDataPaginated"
          :lenghtSearchedData="tableDataSearched.length"
          :tableTitle="data[0]"
          :itemsOnPage="itemsOnPage"
          :onChangePage="updatedPage"
          :pageNumber="pageNumber"
          :UpdatedPageNumber="updatedIndexRow"
          :typeViewOfRightSide="typeViewOfRightSide"
          :getNameForSort="sortByName"
          :updateItemsOnPage="updateItemsOnPage"
          :updateFilter="updateFilter"
        >
        </slot>
      </div>
    </div>
  </keep-alive>
</template>

<script>
import fdInput from "./UI/fd-input.vue";
export default {
  data() {
    return {
      filters: {},
      filteredData: [],
      sortName: "",
      inputValue: "",
      to: this.itemsOnPage,
      from: 0,
      showRightSide: false,
      typeViewOfRightSide: null,
      pageNumber: 1,
      sortFlag: "",
    };
  },
  components: {
    fdInput,
  },
  props: {
    rightSideView: {
      type: Array,
      default: ["Filters", "Options"],
    },
    itemsOnPage: {
      type: Number,
      dafault: 5,
    },
    viewFormat: {
      type: String,
      default: "table",
    },
    data: {
      type: Array,
      required: true,
    },
    placeHolder: {
      type: String,
      default: "Поиск по адресу",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  computed: {
    sortedRightSideViews() {
      return this.rightSideView.sort((a, b) => a.name > b.name);
    },
    inputValueUpdated() {
      return this.inputValue
        .trim()
        .toLowerCase()
        .replace(/[\s.,\s]/g, "");
    },
    tableDataSearched() {
      let querySearch = this.inputValueUpdated;
      let data = [...this.data[1]];
      if (this.sortName) {
        if (this.sortFlag) {
          data = data.sort((a, b) => a[this.sortName] < b[this.sortName]);
        } else {
          data = data.sort((a, b) => a[this.sortName] > b[this.sortName]);
        }
      }
      let dataForFilter = data.filter((elem) => {
        return elem.address
          .toLowerCase()
          .replace(/[\s.,\s]/g, "")
          .includes(querySearch, 0);
      });
      let filters = { ...this.filters };
      let filterKeys = Object.keys(filters);
      return dataForFilter.filter(function (eachObj) {
        return filterKeys.every(function (eachKey) {
          if (!filters[eachKey].length) {
            return true;
          }
          return filters[eachKey] <= eachObj[eachKey];
        });
      });
    },
    tableDataPaginated() {
      return this.tableDataSearched.slice(this.from, this.to);
    },
  },
  watch: {
    filters() {
      let data = [...this.tableDataSearched];
      let filters = { ...this.filters };
      console.log(filters);
      let filterKeys = Object.keys(filters);
      console.log(filterKeys);
      return (this.filteredData = data.filter(function (eachObj) {
        return filterKeys.every(function (eachKey) {
          if (!filters[eachKey].length) {
            return true;
          }
          return filters[eachKey] <= eachObj[eachKey];
        });
      }));
    },
  },
  methods: {
    toggleShowRightSide(value) {
      if (value == this.typeViewOfRightSide) {
        this.showRightSide = !this.showRightSide;
        this.typeViewOfRightSide = null;
      } else if (this.typeViewOfRightSide == null) {
        this.typeViewOfRightSide = value;
        this.showRightSide = !this.showRightSide;
      } else {
        this.typeViewOfRightSide = value;
      }
    },
    updatedPage(from, to) {
      this.from = from;
      this.to = to;
    },
    updatedIndexRow(value) {
      this.pageNumber = value;
    },
    updateFilter(value, key) {
      this.$set(this.filters, key, [value]);
    },
    clearInput() {
      this.inputValue = "";
    },
    switchTypeOfView(value) {
      this.viewFormat = value;
    },
    sortByName(value, arrowDirection) {
      this.sortName = value;
      this.sortFlag = arrowDirection;
    },
    isBtnActive(btn_name) {
      if (btn_name == this.typeViewOfRightSide) {
        return "active";
      }
    },
    updateItemsOnPage(value) {
      this.itemsOnPage = value;
      this.to = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-content {
  display: flex;
  gap: 15px;
  flex-direction: row;
}
.filter-content > :nth-child(1) {
  flex: 1 1 auto;
  min-width: 325px;
}

.filter-content > :nth-child(2) {
  flex: 0 0 35%;
}
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
      outline: 1px solid #9c42f5;
      box-shadow: 0 0 0 4px rgba(156, 66, 245, 0.12);
      transition: 0.4s;
    }
    input:hover {
      outline: 1px solid #9c42f5;
      transition: 0.15s;
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
      &:hover {
        transform: translateY(-3px);
        box-shadow: 2px 4px 20px rgba(1, 1, 1, 0.1);
      }
      &.active {
        // background: rgba(238, 238, 238, 0.541);
        box-shadow: inset 2px 4px 20px rgba(1, 1, 1, 0.1);
      }
    }
  }
}
</style>
