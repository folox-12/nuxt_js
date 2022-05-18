<template>
  <section class="table" id="table">
    <div class="table__data">
      <table class="table__responsive">
        <TableTitle :title="tableTitle"></TableTitle>
        <TableRows
          :rows="paginatedData"
          :selectedPage="indexForNumberOfRow"
        ></TableRows>
      </table>
    </div>
    <slot></slot>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import TableTitle from "./Table/TableTitle.vue";
import TableRows from "./Table/TableRows.vue";

export default {
  data() {
    return {
      countPage: 5,
      pageNumber: 1,
    };
  },
  props: {
    tableTitle: { type: Object, default: {} },
    tableDescription: { type: Array, default: [] },
  },
  components: {
    TableTitle,
    TableRows,
  },
  computed: {
    ...mapGetters("table", ["getSortName", "getSortFlag"]),
    countOfLists() {
      return this.tableDescription.length;
    },
    pages() {
      if (this.sortedByName.length < this.countPage) {
        this.pageNumber = 1;
      }
      return Math.ceil(this.tableDescription.length / this.countPage);
    },
    indexForNumberOfRow() {
      return this.countPage * (this.pageNumber - 1);
    },
    sortedByName() {
      let object = this.tableDescription;
      let sortName = this.getSortName;
      return object.sort((a, b) => {
        if (this.getSortFlag) {
          return a[sortName] > b[sortName];
        }
        return a[sortName] < b[sortName];
      });
    },
    paginatedData() {
      let from = (this.pageNumber - 1) * this.countPage;
      let to = from + this.countPage;
      return this.sortedByName.slice(from, to);
    },
  },
  methods: {
    ...mapMutations("table", ["updateQuery"]),
    clickPage(page) {
      this.pageNumber = page;
    },
  },
};
</script>

<style lang="scss">
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

  &-numerical {
  }
  &-address {
  }
  &-dronport {
  }
  &-postamat {
  }
  &-title {
  }

  &-el {
  }
}
table.table__responsive {
  min-width: 1140px;
  border-collapse: collapse;

  th,
  td {
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
      text-align: left;
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
