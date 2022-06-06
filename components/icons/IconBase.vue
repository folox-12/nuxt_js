<template>
  <span
    class="icon"
    :style="{
      'background-color': backgroundColor,
      width: width,
      height: height,
    }"
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

    <svg
      viewBox="0 0 11 11"
      :fill="'rgba(0, 0, 0, 0)'"
      xmlns="http://www.w3.org/2000/svg"
      v-else-if="iconType === 'close'"
    >
      <rect
        width="13.9022"
        height="1.44644"
        transform="matrix(0.71176 -0.702422 0.71176 0.702422 0.0742188 9.98389)"
        :fill="fill"
      />
      <rect
        width="13.9022"
        height="1.44644"
        transform="matrix(0.71176 0.702422 -0.71176 0.702422 1.03125 0)"
        :fill="fill"
      />
    </svg>

    <svg
      viewBox="0 0 24 23"
      fill="none"
      v-else-if="iconType === 'filter'"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.58203 4.02393C1.58203 6.289 6.06234 10.8029 8.35978 12.9674C9.20255 13.7514 9.67565 14.7865 9.68385 15.8643V21.2913L14.3135 19.2598V15.8643C14.3135 14.7866 14.8007 13.7566 15.6375 12.9674C17.9361 10.8029 22.4153 6.29002 22.4153 4.02393"
        :stroke="fill"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9987 5.77092C17.7516 5.77092 22.4153 4.86141 22.4153 3.73946C22.4153 2.61752 17.7516 1.70801 11.9987 1.70801C6.24571 1.70801 1.58203 2.61752 1.58203 3.73946C1.58203 4.86141 6.24571 5.77092 11.9987 5.77092Z"
        :stroke="fill"
        stroke-width="2"
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
      default: "48px",
    },
    height: {
      type: [Number, String],
      default: "48px",
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
      width: 100%;
      height: 100%;
    }
  }
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
