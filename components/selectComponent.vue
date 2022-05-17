<template>
  <div class="v-select">
    <p class="v-select__title">select</p>
    <div class="v-select__options">
      <span v-for="option in options" :key="option.id">{{ option.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { id: 1, value: "Магазино" },
        { id: 2, value: "Касса" },
      ],
    };
  },
};
</script>

<style></style>
