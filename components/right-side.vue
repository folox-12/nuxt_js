<template>
  <div class="right-side">
    <div class="right-side__title">
      {{ title }}
    </div>
    <div class="right-side__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    changeViewFormat(value) {
      this.$emit("changeViewFormat", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.right-side {
  background-color: #fff;
  height: 100%;
  padding: 15px 30px;
  &__title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 15px;
  }
  &__content {
    padding-left: 15px;
  }
}
</style>
