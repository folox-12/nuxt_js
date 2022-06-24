<template>
  <div v-if="$store.getters['GetChangestatus'] == true" class="inputForm">
    <div class="fd-input" v-if="typeOfForm == 'infrastructure'">
      <select @change="changeOption($event)"  name="" id="" class='dropdown_infr'>
        <option selected disabled>Тип инфраструктуры</option>
        <option v-for="(point, index) in listOfInfrustructure" :key="index" :value="index">{{point}}</option>
      </select>
      </div>
      <div class="fd-input" v-if="typeOfForm == 'infrastructure'">
      <select @change="changeOptionModel($event)"  name="" id="" class='dropdown_infr'>
        <option selected disabled>Бренд</option>
        <option  disabled v-if="this.infoFromOption == ''">Выберите тип </option>
        <option  v-show="statusOfSelectedType" v-for="(point, index) in listOfInfrustructureBrand[idOfTypeInfrustructure]" :key="index" :value="point">{{point}}</option>
      </select>
      </div>
    <InputForm v-for="n in LengthInput" :key="n" @input="input" :id="n - 1" />
    <iconBase
      class="addBtn"
      @mouseover="fillColor = '#9b42f2'"
      @mouseleave="fillColor = 'grey'"
      @click="$emit('addInfo', info, infoFromOption, BrandOfInfrustructure)"
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
      statusOfSelectedType: false,
      idOfTypeInfrustructure: '',
      fillColor: "grey",
      BrandOfInfrustructure: '',
      listOfInfrustructure:[
        "Дронопорт",
        "Постамат",
        "Камера",
        "Датчики движения",
        "Освещение",
        "Ограждение"
      ],
       listOfInfrustructureBrand:[
        ['Hive','Rave', 'Mufe', 'Heve'],
        ['Ozon','Yandex', 'Sber', 'Amazon',],
        ['AHD','Sony', 'Canon', 'Samsung'],
        ['Ajax','Jquery', 'Vue', 'React'],
        ['Feron','Peron', 'Maton', 'Seron'],
        ['Wall','noWall', 'BigWall', 'SmallWall'],
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
       required: true,
    },
  },
  methods: {
    input(value, n) {
      Vue.set(this.info, n, value);
    },
    changeOption(event){
      let idOfType = event.target.value
      this.idOfTypeInfrustructure = idOfType
    let dataToAdd = this.listOfInfrustructure[idOfType] 
     this.infoFromOption = dataToAdd
     this.statusOfSelectedType = true
    },
    changeOptionModel(event){
      this.BrandOfInfrustructure = event.target.value
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
