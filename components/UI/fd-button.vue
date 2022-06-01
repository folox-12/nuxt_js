<template>
  <button @click="click" class="fd-button" :class="type">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Редактировать",
    },
    type: {
      default: "primary",
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
button.fd-button {
  height: 48px;
  min-width: 200px;
  font-family: "Montserrat", serif;
  &.primary {
    border: none;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: all 0.2s;
    background: linear-gradient(90deg, #0094ff 3.2%, #9b42f5 73.28%);
    color: white;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      color: rgba(255, 255, 255, 0.6);
    }
  }
  &.white {
    border: none;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: all 0.2s;
    background: #fff;
    color: #9b42f5;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    &:hover {
      transform: translateY(-3px);
    }
  }
}
</style>
