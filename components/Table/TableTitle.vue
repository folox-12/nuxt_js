<template>
  <thead>
    <tr class="table-title">
      <th v-for="value in title" :key="value.id">
        {{ value }}
      </th>
    </tr>
  </thead>
</template>

<script>
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
  methods: {},
};
</script>

<style></style>
