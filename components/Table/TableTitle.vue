<template>
  <thead>
    <tr class="table-title">
      <th
        v-for="(name, value) in title"
        :key="name"
        @click="getNameForSort(value)"
      >
        {{ name }}
      </th>
    </tr>
  </thead>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    title: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("table", ["getSortFlag"]),
  },
  methods: {
    ...mapActions("table", ["changeSort"]),
    getNameForSort(value) {
      this.changeSort(value);
    },
  },
};
</script>

<style></style>
