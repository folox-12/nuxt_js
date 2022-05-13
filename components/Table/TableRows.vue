<template>
  <tbody>
    <tr v-show="!rows.length" class="empty">
      <td colspan="4" style="text-align: center; font-size: 1.5rem">
        Ничего не найдено
      </td>
    </tr>
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
      default: [],
    },
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.empty {
  &__text {
  }
}
</style>
