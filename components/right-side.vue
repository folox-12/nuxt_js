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

<style></style>
