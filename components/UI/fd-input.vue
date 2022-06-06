<template>
  <div class="fd-input" :class="type">
    <iconBase
      v-if="icon"
      :src="icon"
      alt=""
      class="search-icon"
      :class="{ focus: focus }"
      :iconType="'search'"
      :width="'34px'"
      :height="'34px'"
    />
    <input
      type="text"
      :value="value"
      @input="input"
      @focus="toggleLeftIcon"
      @blur="toggleLeftIcon"
      :placeholder="$t(placeholder)"
      :class="{ icon: icon }"
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
import iconBase from "../icons/IconBase.vue";
export default {
  data() {
    return {
      focus: false,
    };
  },
  components: {
    iconBase,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
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
    type: {
      type: String,
      default: "primary",
    },
    id: {
      type: Number,
    },
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
  &.primary {
    input {
      height: 100%;
      width: 100%;
      background-color: #fff;
      padding: 10px 15px 10px 15px;
      border-radius: 10px;
      &:focus {
        outline: 1px solid #9c42f5;
        box-shadow: 0 0 0 4px rgba(156, 66, 245, 0.12);
        transition: 0.4s;
        color: #292c33;
      }
      &:hover {
        outline: 1px solid #9c42f5;
        transition: 0.15s;

        color: #292c33;
      }
      &.icon {
        padding: 10px 45px 10px 45px;
        &:focus {
          padding-left: 10px;
        }
      }
    }
  }
  &.edit {
    input {
      height: 100%;
      width: 100%;
      min-width: 66px;
      background: #f7f7f9;
      line-height: 100%;
      padding: 19px 20px 19px 8px;
      &:focus {
      }
      &:hover {
      }
      &.icon {
        padding: 10px 45px 10px 45px;
        &:focus {
        }
      }
    }
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
