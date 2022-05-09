<template>
  <tr class="table-el">
    <td v-for="i in rows.length" class="table-numerical">{{ i }}</td>
  </tr>
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
