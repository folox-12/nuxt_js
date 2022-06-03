<template>
  <div class="fd-input">
    <img
      v-if="icon"
      :src="icon"
      alt=""
      class="search-icon"
      :class="{ focus: focus }"
    />
    <input
      type="search"
      :value="value"
      @input="input"
      @focus="toggleLeftIcon"
      @blur="toggleLeftIcon"
      :placeholder="placeholder"
    />
    <button
      v-if="closeIcon"
      class="clear-input"
      id="clear-input"
      @click="clearInput()"
    >
      <img src="/ico/close.svg" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focus: false,
    };
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    icon: {
      type: "String",
      default: "",
    },
    closeIcon: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    id:{
      type: Number,
    }
  },
  methods: {
    toggleLeftIcon() {
      this.focus = !this.focus;
    },

    input(e) {
      let value = e.target.value;
      this.$emit("input", value, this.id);
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
    left: -2px;
    pointer-events: none;
    opacity: 0.5;
    padding-left: 18px;
    height: 30%;
    &.focus {
      display: none;
    }
  }
  input {
    height: 100%;
    width: 100%;
    background-color: #f7f7f9;
    padding: 10px 45px 10px 45px;
    border-radius: 10px;
  }
  input:focus {
    outline: 1px solid #9c42f5;
    box-shadow: 0 0 0 4px rgba(156, 66, 245, 0.12);
    transition: 0.4s;
    padding-left: 10px;
  }
  input:hover {
    outline: 1px solid #9c42f5;
    transition: 0.15s;
  }
  button {
    position: absolute;
    right: 15px;
    display: flex;
    background-color: transparent;
    cursor: pointer;
    align-items: center;
    img {
    }
  }
}
</style>
