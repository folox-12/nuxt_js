<template>
  <tbody>
    <tr class="table-el" v-for="i in rows.length">
      <td v-for="(name, value) in rows[i]">{{ name }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    rows: {
      type: Object,
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
