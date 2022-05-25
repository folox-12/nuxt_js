<template>
  <div class="paginator paginator">
    <div class="paginator__row">
      <div class="paginator__ul">
        <li
          class="paginator__li"
          v-for="page in pages"
          :key="page"
          :class="{ 'paginator__li active': page === pageNumber }"
          @click="changePage(page)"
        >
          {{ page }}
        </li>
      </div>
      <div class="paginator__total">
        <span>{{ $t("counter-table") + countOfallDronoport }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageNumber: 1,
      allPage: 0,
    };
  },
  props: {
    countItemInTable: {
      type: [String, Number],
      default: 5,
    },
    countOfallDronoport: {
      type: Number,
      required: true,
    },
    itemsOnPage: {
      type: Number,
      required: true,
    },
  },
  mounted() {},
  computed: {
    pages() {
      if (this.countOfallDronoport < this.itemsOnPage) {
        this.pageNumber = 1;
        this.$emit("UpdatedPageSlice", 0, this.itemsOnPage);
        this.$emit("UpdatedPageNumber", this.pageNumber);
      }
      return Math.ceil(this.countOfallDronoport / this.itemsOnPage);
    },
  },
  methods: {
    changePage(page) {
      this.pageNumber = page;
      let from = (page - 1) * this.itemsOnPage;
      let to = (page - 1) * this.itemsOnPage + this.itemsOnPage;
      this.$emit("UpdatedPageSlice", from, to);
      this.$emit("UpdatedPageNumber", page);
    },
  },
};
</script>

<style lang="scss">
.paginator {
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
