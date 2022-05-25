<template>
  <section class="table" id="table">
    <div class="table__data">
      <table class="table__responsive">
        <thead>
          <tr class="table-title">
            <th
              v-for="(name, value) in tableTitle"
              :key="value"
              @click="getNameForSort(value)"
            >
              {{ name }}
              <svg
                v-if="sortedFlag == value"
                width="11"
                :class="{ reverse: flagDirection == false }"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.5 0C5.70835 0 5.90816 0.0724249 6.05548 0.201342C6.20281 0.330259 6.28557 0.505107 6.28557 0.687423V8.65191L9.65725 5.70011C9.73029 5.6362 9.817 5.5855 9.91243 5.55091C10.0079 5.51632 10.1101 5.49852 10.2134 5.49852C10.3167 5.49852 10.419 5.51632 10.5144 5.55091C10.6099 5.5855 10.6966 5.6362 10.7696 5.70011C10.8427 5.76403 10.9006 5.8399 10.9401 5.92341C10.9797 6.00692 11 6.09642 11 6.18681C11 6.2772 10.9797 6.3667 10.9401 6.45021C10.9006 6.53371 10.8427 6.60959 10.7696 6.6735L6.05619 10.798C5.98321 10.8621 5.89652 10.9129 5.80108 10.9475C5.70565 10.9822 5.60333 11 5.5 11C5.39667 11 5.29436 10.9822 5.19892 10.9475C5.10348 10.9129 5.01679 10.8621 4.94381 10.798L0.23038 6.6735C0.15734 6.60959 0.0994023 6.53371 0.0598737 6.45021C0.0203452 6.3667 0 6.2772 0 6.18681C0 6.09642 0.0203452 6.00692 0.0598737 5.92341C0.0994023 5.8399 0.15734 5.76403 0.23038 5.70011C0.377889 5.57103 0.577955 5.49852 0.786565 5.49852C0.889858 5.49852 0.992141 5.51632 1.08757 5.55091C1.183 5.5855 1.26971 5.6362 1.34275 5.70011L4.71443 8.65191V0.687423C4.71443 0.505107 4.79719 0.330259 4.94452 0.201342C5.09184 0.0724249 5.29165 0 5.5 0Z"
                  fill="#9B41F3"
                />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!countOfAllDronoport" class="empty">
            <td colspan="4" style="text-align: center; font-size: 1.5rem">
              Ничего не найдено
            </td>
          </tr>
          <tr
            class="table-el"
            v-for="(index, row) in tableDescription"
            :key="row.id"
          >
            <td>{{ row + indexForNumberOfRow }}</td>
            <td v-for="(key, value) in index" :class="value" :key="key.id">
              {{ key }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <slot></slot>
  </section>
</template>

<script>
export default {
  data() {
    return {
      to: "",
      sortedFlag: "",
      flagDirection: false,
    };
  },
  props: {
    tableTitle: { type: Object, default: {} },
    tableDescription: { type: Array, default: [] },
    pageNumber: { type: Number, default: 1 },
    itemsOnPage: { type: Number, required: true },
  },
  components: {},
  computed: {
    countOfAllDronoport() {
      return this.tableDescription.length;
    },
    indexForNumberOfRow() {
      return this.itemsOnPage * (this.pageNumber - 1) + 1; //row[0, 1] + countItem * (pageNumber -1) + 1
    },
  },
  methods: {
    UpdatedPageNumber(value) {
      this.pageNumber = value;
    },
    getNameForSort(value) {
      if (this.sortedFlag == value) {
        this.flagDirection = !this.flagDirection;
      } else {
        this.sortedFlag = value;
        this.flagDirection = true;
      }

      this.$emit("onSorted", value, this.flagDirection);
    },
  },
};
</script>

<style lang="scss" scoped>
svg.reverse {
  transform: rotate(180deg);
}
.table {
  background-color: #fff;
  width: 100%;
  max-width: 1140px;
  padding-bottom: 25px;
  max-height: 100%;
  transition: all 0.5s ease;
  &__data {
    width: 100%;
    height: fit-content;
    overflow-x: auto;
    margin-bottom: 16px;
  }

  &__responsive {
    width: 100%;
    overflow-x: auto;
  }
}
table.table__responsive {
  border-collapse: collapse;
  table-layout: fixed;
  th,
  td {
    text-align: center;
    padding: 22px 15px 22px 0px;
    &:first-child {
      padding-left: 30px;
    }
    &:last-child {
      padding-right: 30px;
    }
  }

  thead {
    cursor: pointer;
    &__title {
    }
    th {
      font-weight: bold;
      padding-bottom: 29px;
      padding-top: 30px;
      text-align: center;
    }
  }
  tbody {
    tr {
      &:hover {
        background-color: #ececec;
        // #f8f9fa
        cursor: pointer;
      }
    }
  }
}

.table-paginator {
  &__row {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
  }

  &__ul {
    display: flex;
    gap: 0 4px;
    ul {
      list-style-type: none;
    }
  }

  &__li {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 100%;
    &:hover {
      background-color: #f7f7f9;
    }
    &.active {
      background-color: #f7f7f9;
      color: #9b42f5;
    }
  }
  &__total {
    position: absolute;
    right: 25px;
    color: #6d6a7a;
    font-size: 17px;
    font-weight: 400;
  }
}
</style>
