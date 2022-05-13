<template>
  <div class="main-area" id="main-area">
    <div class="main-area__content" id="main-area-content">
      <div class="list-of-place">
        <Table
          :tableTitle="tableTitle"
          :tableDescription="tableDataSearched"
        ></Table>
      </div>
    </div>
    <FilterFD />
  </div>
</template>

<script>
import Table from "../components/Table/Table.vue";
import FilterFD from "../components/FilterFD.vue";

export default {
  data() {
    return {
      tableData: [],
    };
  },
  components: {
    Table,
    FilterFD,
  },
  props: {
    querySearch: {
      type: String,
      default: "",
    },
  },
  created() {
    this.tableData = this.$store.getters["dronoports/getAllDronoport"];
  },
  computed: {
    tableTitle() {
      return this.tableData[0];
    },
    tableDataSearched() {
      let querySearch =
        this.$store.getters["search/getStoreQuery"].toLowerCase();
      return this.tableData[1].filter((elem) => {
        console.log(this.querySearch);
        return elem.address.toLowerCase().includes(querySearch);
      });
    },
  },
  methods: {
    inputValue(value) {
      this.querySearch = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-area {
  width: 100%;
  display: flex;
  gap: 1rem;
  transition: all 0.5s ease;
  &__content {
    width: 100%;
    // background: red;
    transition: all 0.5s ease;
  }
}
</style>
