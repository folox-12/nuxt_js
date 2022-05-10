<template>
  <tr class="table-title">
    <th v-for="value in title">
      {{ value }}
    </th>
  </tr>
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
