<template>
  <span
    class="icon"
    :style="{ 'background-color': backgroundColor }"
    :class="{ pointer: backgroundColor }"
    @click="click"
  >
    <svg
      :fill="'rgba(0, 0, 0, 0)'"
      viewBox="0 0 31 29"
      xmlns="http://www.w3.org/2000/svg"
      v-if="iconType === 'search'"
    >
      <path
        d="M13.5569 24.2221C19.9396 24.2221 25.1138 19.2475 25.1138 13.1111C25.1138 6.97459 19.9396 2 13.5569 2C7.1742 2 2 6.97459 2 13.1111C2 19.2475 7.1742 24.2221 13.5569 24.2221Z"
        :stroke="fill"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.0028 27.0001L21.7188 20.9585"
        :stroke="fill"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </span>
</template>
<script>
export default {
  props: {
    backgroundColor: {
      type: String,
    },
    iconType: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: 48,
    },
    height: {
      type: [Number, String],
      default: 48,
    },
    fill: {
      type: String,
      default: "#000000",
    },
  },
  methods: {
    click() {
      if (this.backgroundColor) {
        this.$emit("click");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  &.pointer {
    padding: 15px;
    cursor: pointer;
    svg {
      object-fit: cover;
      width: fit-content;
      height: fit-content;
    }
  }
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
