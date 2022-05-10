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
            address: "г. Одинцово, ул. Северная, 5",
            dronopot: 2,
            postamat: 2,
          },
          {
            address: "г. Одинцово, ул. Северная, 4",
            dronopot: 4,
            postamat: 1,
          },
          {
            address: "г. Одинцово, ул. Северная, 3",
            dronopot: 4,
            postamat: 1,
          },
          {
            address: "г. Одинцово, ул. Северная, 44",
            dronopot: 4,
            postamat: 1,
          },
          {
            address: "г. Одинцово, ул. Северная, 42",
            dronopot: 4,
            postamat: 1,
          },
          {
            address: "г. Одинцово, ул. Северная, 41",
            dronopot: 4,
            postamat: 1,
          },
          {
            address: "г. Одинцово, ул. Северная, 40",
            dronopot: 4,
            postamat: 1,
          },
          {
            address: "г. Одинцово, ул. Северная, 39",
            dronopot: 4,
            postamat: 1,
          },
          {
            address: "г. Одинцово, ул. Северная, 38",
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
