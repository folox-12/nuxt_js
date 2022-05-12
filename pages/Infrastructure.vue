<template>
  <div class="main-area" id="main-area">
    <div class="main-area__content">
      <div class="infrastructure"></div>
    </div>
    <FilterFD />
  </div>
</template>

<script>
import FilterFD from "../components/FilterFD.vue";

export default {
  components: {
    FilterFD,
  },
};
</script>

<style lang="scss" scoped>
.main-area {
  width: 100%;
  height: 30rem;
  display: flex;
  gap: 1rem;
  &__content {
    width: 100%;
    transition: all 0.5s ease;
    // background: red;
  }
}
</style>
