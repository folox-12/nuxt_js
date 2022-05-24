<template>
  <keep-alive>
    <div class="filters">
      <div class="header-page__search header-page-search">
        <div class="header-page-search__input">
          <img src="../assets/img/ico/search.svg" alt="" class="search-icon" />
          <input
            type="search"
            v-model="inputValue"
            :placeholder="placeHolder"
            id="input-main"
          />
          <button class="clear-input" id="clear-input" @click="clearInput()">
            <img src="../assets/img/ico/close.svg" alt="" />
          </button>
        </div>
        <div class="header-page-search__buttons">
          <button
            v-for="key in sortedRightSideViews"
            :key="key.name"
            v-on:click="toggleShowRightSide(key.name)"
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
        >
        </slot>
      </div>
    </div>
  </keep-alive>
</template>

<script>
export default {
  data() {
    return {
      sortName: "",
      inputValue: "",
      to: this.itemsOnPage,
      from: 0,
      showRightSide: false,
      typeViewOfRightSide: null,
      pageNumber: 1,
    };
  },
  components: {},
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
      let data = this.data[1];
      return data.filter((elem) => {
        return elem.address
          .toLowerCase()
          .replace(/[\s.,\s]/g, "")
          .includes(querySearch, 0);
      });
    },
    tableDataPaginated() {
      return this.tableDataSearched.slice(this.from, this.to);
    },
  },

  methods: {
    changeInputValue() {
      this.inputValue = inputValue;
    },
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
    clearInput() {
      this.inputValue = "";
    },
    switchTypeOfView(value) {
      this.viewFormat = value;
    },
    // searchedDataDescription(filters) {
    //   if (!filters) {
    //     return tableData[1];
    //   }
    //   let data = tableData[1];
    //   return data.filter((elem) => {
    //     for (const [key, value] of Object.entries(filters)) {
    //       return elem[key]
    //         .toLowerCase()
    //         .replace(/[\s.,\s]/g, "")
    //         .includes(
    //           value
    //             .trim()
    //             .toLowerCase()
    //             .replace(/[\s.,\s]/g, ""),
    //           0
    //         );
    //     }
    //   });
    // },

    sortByName(value, arrowDirection) {
      let sortName = this.sortName;
      return object.sort((a, b) => {
        if (this.getSortFlag) {
          return a[sortName] > b[sortName];
        }
        return a[sortName] < b[sortName];
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-content {
  width: 100%;
  display: flex;
  gap: 15px;
}
.filter-content :first-child() {
  flex: 1 1 63%;
}

.filter-content :last-child() {
  flex: 0 0 35%;
}
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
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
