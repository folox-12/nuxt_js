<template>
  <div class="right-side">
    <slot></slot>
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

<style lang="scss" scoped>
.right-side {
  background-color: #fff;
  height: 100%;
  padding: 15px;
}
</style>
