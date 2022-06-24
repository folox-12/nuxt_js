<template>
  <div v-if="$store.getters['GetChangestatus'] == true" class="inputForm">
    <div class="fd-input">
      <select @change="changeOption($event)" v-if="typeOfForm == infrastructure" name="" id="" class='dropdown_infr'>
        <option selected disabled>Тип инфраструктуры</option>
        <option v-for="(point, index) in listOfInfrustructure" :key="index" :value="point">{{point}}</option>
      </select>
      </div>
    <InputForm v-for="n in LengthInput" :key="n" @input="input" :id="n - 1" />
    <iconBase
      class="addBtn"
      @mouseover="fillColor = '#9b42f2'"
      @mouseleave="fillColor = 'grey'"
      @click="$emit('addInfo', info, infoFromOption)"
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
      infoFromOption: '',

      fillColor: "grey",
      listOfInfrustructure:[
        "Дронопорт",
        "Постамат",
        "Камера",
        "Датчики движения",
        "Освещение",
        "Ограждение"
      ]
    };
  },

  props: {
    LengthInput: {
      type: Number,
      required: true,
    },
    typeOfForm:{
      type: String,
    },
  },
  methods: {
    input(value, n) {
      Vue.set(this.info, n, value);
    },
    changeOption(event){
     this.infoFromOption = event.target.value,
     console.log(this.infoFromOption)
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
  .fd-input {
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
  gap: 10px;
  height: 48px;
  filter: drop-shadow(2px 4px 20px rgba(3, 3, 3, 0.1));
  }
  .dropdown_infr{
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
</style>
