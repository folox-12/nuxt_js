<template>
  <div class="buttons">
    <button @click="changeViewFormat('map')">Карта</button>
    <button @click="changeViewFormat('table')">Таблица</button>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    changeViewFormat(value) {
      this.$emit("changeViewFormat", value);
    },
  },
};
</script>

<style></style>
