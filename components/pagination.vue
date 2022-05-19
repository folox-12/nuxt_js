<template>
  <div class="table__paginator table-paginator">
    <div class="table-paginator__row">
      <div class="table-paginator__ul">
        <li
          class="table-paginator__li"
          v-for="page in pages"
          :key="page"
          :class="{ 'table-paginator__li active': page === pageNumber }"
          @click="clickPage(page)"
        >
          {{ page }}
        </li>
      </div>
      <div class="table-paginator__total">
        <span>Найдено всего {{ countOfLists }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  proops: {
    countItemInTable: {
      type: [String, Number],
      default: 5,
    },
  },
  computed: {
    pages() {
      if (this.sortedByName.length < this.countPage) {
        this.pageNumber = 1;
      }
      return Math.ceil(this.tableDescription.length / this.countPage);
    },
    indexForNumberOfRow() {
      return this.countPage * (this.pageNumber - 1);
    },
  },
};
</script>

<style></style>
