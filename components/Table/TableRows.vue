<template>
  <tbody>
    <tr class="table-el" v-for="row in rows" :key="row.id">
      <td v-for="(key, value) in row" :class="value" :key="key.id">
        {{ key }}
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
      required: true,
    },
  },
  methods: {
    showProps() {
      alert(this.rows);
    },
  },
};
</script>

<style></style>
