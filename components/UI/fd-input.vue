<template>
  <div class="fd-input">
    <img src="../../assets/img/ico/search.svg" alt="" class="search-icon" />
    <input
      type="search"
      :value="value"
      @input="input"
      :placeholder="$t('search-by-address')"
    />
    <button class="clear-input" id="clear-input" @click="clearInput()">
      <img src="../../assets/img/ico/close.svg" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  name: "fd-input",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
  },
  methods: {
    input(e) {
      let value = e.target.value;
      this.$emit("input", value);
    },
    clearInput() {
      this.value = "";
      this.$emit("input", "");
    },
  },
};
</script>

<style lang="scss">
.fd-input {
  background-color: #fff;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
  gap: 10px;
  height: 48px;
  filter: drop-shadow(2px 4px 20px rgba(3, 3, 3, 0.1));
  .search-icon {
    position: absolute;
    left: 0px;
    pointer-events: none;
    opacity: 0.5;
    padding-left: 18px;
    height: 30%;
  }
  input {
    height: 100%;
    width: 100%;
    background-color: #f7f7f9;
    padding: 10px 0px 10px 55px;
    border-radius: 10px;
  }
  input:focus {
    outline: 1px solid #9c42f5;
    box-shadow: 0 0 0 4px rgba(156, 66, 245, 0.12);
    transition: 0.4s;
  }
  input:hover {
    outline: 1px solid #9c42f5;
    transition: 0.15s;
  }
  button {
    padding-right: 15px;
    position: absolute;
    display: flex;
    background-color: transparent;
    cursor: pointer;
    align-items: center;
    img {
    }
  }
}
</style>
