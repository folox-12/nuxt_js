<template>
  <div class="radio-button">
    <div
      class="radio-button__item"
      v-for="(item, index) in allRadioInput"
      :key="index"
      @click="checkButton(item)"
    >
      <input
        type="checkbox"
        class="custom-checkbox"
        name="radio"
        :class="{ checked: item === radioValue }"
      />
      <label for="radio">
        {{ $t(index) }}
      </label>
    </div>
    <fd-input
      v-model="inputValue"
      class="custom"
      v-if="radioValue === 'custom'"
      @input="$emit('radioValue', inputValue, name)"
      :closeIcon="closeIconForInput"
      :placeholder="$t('enter-value')"
    />
    <fd-button
      :text="showALl ? $t('hide-all-btn') : $t('show-all-btn')"
      :type="'white'"
      @click="showALl = !showALl"
      v-if="lengthAllRadioInput"
    />
  </div>
</template>

<script>
import fdInput from "./fd-input.vue";
import fdButton from "./fd-button.vue";
export default {
  data() {
    return {
      radioValue: "",
      inputValue: 0,
      showALl: false,
    };
  },

  components: {
    fdInput,
    fdButton,
  },
  props: {
    name: {
      type: String,
    },
    valuesRadio: {
      required: true,
    },
    custom: {
      type: Boolean,
      default: false,
    },
    closeIconForInput: {
      type: Boolean,
      default: false,
    },
    lengthRadio: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    lengthAllRadioInput() {
      return Object.keys(this.valuesRadio).length > this.lengthRadio;
    },
    allRadioInput() {
      let obj = { ...this.valuesRadio };
      if (this.lengthAllRadioInput & !this.showALl) {
        obj = Object.fromEntries(
          Object.entries(obj).slice(0, this.lengthRadio)
        );
      }
      if (this.showALl) {
        obj = { ...this.valuesRadio };
      }
      if (this.custom) {
        obj["several-filter"] = "custom";
      }
      return obj;
    },
  },
  methods: {
    checkButton(value) {
      if (this.radioValue == value) {
        this.radioValue = "";
        value = null;
      } else {
        this.radioValue = value;
        if (value === "custom") {
          return;
        }
      }

      this.$emit("radioValue", value, this.name);
    },
  },
};
</script>
<style lang="scss" scoped>
.radio-button {
  display: flex;
  flex-direction: column;
  gap: 15px;
  &__item {
    cursor: pointer;
    &:hover {
      color: #9b42f2;
    }
  }
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}
.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 1px;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.custom-checkbox.checked + label::before {
  border-color: #9b42f2;
  background-color: #9b42f2;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
</style>
