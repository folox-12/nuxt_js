<template>
  <div v-if="$store.getters['GetChangestatus'] == true" class="inputForm">
    <InputForm v-for="n in LengthInput" :key="n" @input="input" :id="n - 1" />
    <iconBase
      class="addBtn"
      @mouseover="fillColor = '#9b42f2'"
      @mouseleave="fillColor = 'grey'"
      @click="$emit('addInfo', info)"
      :fill="fillColor"
      :iconType="'plus-circle'"
      :backgroundColor="'rgba(0, 0, 0, 0)'"
    />
  </div>
</template>

<script>
import InputForm from "@/components/UI/fd-input.vue";
import iconBase from "./icons/IconBase.vue";
import Vue from "Vue";
export default {
  components: {
    InputForm,
    iconBase,
  },

  data() {
    return {
      info: new Array(this.LengthInput),

      fillColor: "grey",
    };
  },

  props: {
    LengthInput: {
      type: Number,
      required: true,
    },
  },
  methods: {
    input(value, n) {
      Vue.set(this.info, n, value);
    },
  },
};
</script>

<style lang="scss" scoped>
.inputForm {
  display: flex;
  gap: 15px;
  div {
    flex-basis: 33%;
  }
  span {
    flex-basis: auto;
  }
}
</style>
