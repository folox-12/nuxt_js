<template>
  <div class="list-of-place">
    <Table :tableData="tableData"></Table>
  </div>
</template>

<script>
import Table from "../components/Table/Table.vue";
export default {
  components: {
    Table,
  },
  data() {
    return {
      tableData: [
        {
          numerical: "№",
          address: "Адресс",
          dronopot: "Дронопорт",
          postamat: "Постамат",
        },
        [
          {
            id: "place",
            address: "г. Одинцово, ул. Северная, 5",
            dronopot: 2,
            postamat: 2,
          },
          {
            id: "place",
            address: "г. Одинцово, ул. Северная, 4",
            dronopot: 4,
            postamat: 1,
          },
        ],
      ],
    };
  },
};
</script>

<style></style>
