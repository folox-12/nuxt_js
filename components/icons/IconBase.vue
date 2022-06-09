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
    @mouseover="mouseover"
    @mouseleave="mouseleave"
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
    <svg
      v-else-if="iconType == 'plus-circle'"
      viewBox="0 0 100 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 0C77.6125 0 100 22.8353 100 51C100 79.1647 77.6125 102 50 102C22.3875 102 0 79.1647 0 51C0 22.8353 22.3875 0 50 0ZM50 6.375C25.8375 6.375 6.25 26.3543 6.25 51C6.25 75.6457 25.8375 95.625 50 95.625C74.1625 95.625 93.75 75.6457 93.75 51C93.75 26.3543 74.1625 6.375 50 6.375ZM50 25.5C50.8288 25.5 51.6237 25.8358 52.2097 26.4336C52.7958 27.0314 53.125 27.8421 53.125 28.6875V47.8125H71.875C72.7038 47.8125 73.4987 48.1483 74.0847 48.7461C74.6708 49.3439 75 50.1546 75 51C75 51.8454 74.6708 52.6561 74.0847 53.2539C73.4987 53.8517 72.7038 54.1875 71.875 54.1875H53.125V73.3125C53.125 74.1579 52.7958 74.9686 52.2097 75.5664C51.6237 76.1642 50.8288 76.5 50 76.5C49.1712 76.5 48.3763 76.1642 47.7903 75.5664C47.2042 74.9686 46.875 74.1579 46.875 73.3125V54.1875H28.125C27.2962 54.1875 26.5013 53.8517 25.9153 53.2539C25.3292 52.6561 25 51.8454 25 51C25 50.1546 25.3292 49.3439 25.9153 48.7461C26.5013 48.1483 27.2962 47.8125 28.125 47.8125H46.875V28.6875C46.875 27.8421 47.2042 27.0314 47.7903 26.4336C48.3763 25.8358 49.1712 25.5 50 25.5V25.5Z"
        :fill="fill"
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
    fillActive: {
      type: String,
      default: "#000000",
    },
  },
  methods: {
    mouseover() {
      this.$emit("mouseover");
    },
    mouseleave() {
      this.$emit("mouseleave");
    },
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
