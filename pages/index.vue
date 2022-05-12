<template>
  <div class="main-area" id="main-area">
    <div class="main-area__content" id="main-area-content">
      <div class="list-of-place">
        <Table :tableData="tableData"></Table>
      </div>
    </div>
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
