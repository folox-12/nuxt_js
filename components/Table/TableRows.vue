<template>
  <tbody>
    <tr class="table-el" v-for="(index, row) in rows" :key="row.id">
      <td>{{ row + 1 }}</td>
      <td v-for="(key, value) in index" :class="value" :key="key.id">
        {{ key }}
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    rows: {
      type: Array,
      required: true,
    },
  },
  methods: {},
  computed: {},
};
</script>

<style></style>
