<template>
  <div class="radio-button">
    <input
      type="checkbox"
      class="custom-checkbox"
      id="happy"
      name="happy"
      value="yes"
      :class="{ checked: (value = valueRadio && pickedRadio) }"
    />
    <label for="happy" @click="checkButton(valueRadio)">Happy</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickedRadio: false,
      radioValue: "",
    };
  },
  props: {
    valueRadio: {
      required: true,
    },
  },
  methods: {
    checkButton(value) {
      if (this.radioValue == value) {
        this.pickedRadio = false;
        this.radioValue = "";
      } else {
        this.pickedRadio = true;
        this.radioValue = this.valueRadio;
      }
    },
  },
};
</script>
<style lang="scss">
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
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
