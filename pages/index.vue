<template>
  <div class="list-of-place">
    <Table :tableData="tableData"></Table>
    <FilterFD />
  </div>
</template>

<script>
import Table from "../components/Table/Table.vue";
import FilterFD from "../components/FilterFD.vue";

export default {
  components: {
    Table,
    FilterFD,
  },

  computed: {
    tableData() {
      return this.$store.getters["dronoports/getAllDronoport"];
    },
  },
};
</script>

<style lang="scss" scoped>
.list-of-place {
  display: flex;
  gap: 1rem;
}
</style>
