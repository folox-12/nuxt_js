<template>
  <div class="page">
    <WarningMessage v-show="this.modalError" :title='$t("titleforWarningMessage")'></WarningMessage>
    <div class="card">
      <Imagecard :img="img" :titleImg="titleImg" @DeleteImg="DeleteImg" @addPhoto="addPhoto"></Imagecard>
      <hr />
      <div class="card__main card-main">
        <div class="card-main__title">
          <h2>{{ $t("droneport") }}</h2>
        </div>

        <Tablecard
          :title="title"
          :description="description"
          :type="type"
          @changeInfo="changeData"
          @clearInput='clearInput'
        ></Tablecard>
      </div>
    </div>
    <div class="card">
      <div class="card__main card-main">
        <div class="card-main__title">
          <h2>{{ $t("equipment") }}</h2>
        </div>
        <div class="card-main__table">
          <table>
            <tr>
              <th>№</th>
              <th>{{ $t("equipment-name") }}</th>
              <th align="left">{{ $t("equipment-type") }}</th>
              <th v-if="$store.getters['GetChangestatus'] == true"></th>
            </tr>
            <tr v-for="(equipment, index) in computedObj" v-bind:key="index">
              <td>{{ equipment.id }}</td>
              <td>{{ equipment.by }}</td>
              <td>{{ equipment.name }}</td>
              <td v-if="$store.getters['GetChangestatus'] == true"><EditCard :propid="index" :Type="'string'" @deletePoint="deletePoint"></EditCard></td>
            </tr>
             <tr><td colspan="3" v-if='computedObj.length == 0'>{{$t("no-info")}}</td></tr>
            <tr><td colspan="3"> <AddCard v-show="addcardParam1" :LengthInput="3" @addInfo='addInfo'></AddCard></td></tr>
          </table>
          <div v-if="$store.getters['GetChangestatus'] == false">
            <button
              v-if="limit == 3"
              @click="limit = null"
              class="spoiler__reset_button"
            >
              {{ $t("show-all-btn") }}
            </button>
            <button v-else @click="limit = 3" class="spoiler__reset_button">
              {{ $t("hide-all-btn") }}
            </button>
          </div>
         
           <button
           v-onload="(this.limit = null)"
              v-if="$store.getters['GetChangestatus'] == true && addcardParam1 == false"
              class="spoiler__reset_button"
              @click="addcardParam1 = true"
            >
              {{ $t("add-btn-edit-platform") }}
            </button>
             <button
             v-onload="(this.limit = null)"
              v-else-if="$store.getters['GetChangestatus'] == true && addcardParam1 == true"
              class="spoiler__reset_button"
              @click="addcardParam1 = false"
            >
              {{ $t("add-btn-exit-platform") }}
            </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card__main card-main">
        <div class="card-main__title">
          <h2>{{ $t("serviced-drones") }}</h2>
        </div>
        <div class="card-main__table">
          <table>
            <tr>
              <th style="padding-bottom: 15px">
                {{ $t("infrastructure-manufacturer") }}
              </th>
              <th style="padding-bottom: 15px">
                {{ $t("infrastructure-model") }}
              </th>
              <th style="padding-bottom: 15px"></th>
            </tr>
            <tr v-for='(drone,index) in drones'
            :key="index">
              <td>{{drone.name}}</td>
              <td>{{drone.model}}</td>
              <td v-if="$store.getters['GetChangestatus'] == false"><OpenCard ></OpenCard></td>
              <td v-else><EditCard :propid="index" :Type="'string'" @deletePoint="deletePoint1"></EditCard></td>
            </tr>
            <tr><td colspan="3" v-if='drones.length == 0'>{{$t("no-info")}}</td></tr>
            <tr><td colspan="3"> <AddCard v-show="addcardParam" :LengthInput="2" @addInfo='addInfo1'></AddCard></td></tr>
          </table>
          <button
              v-if="$store.getters['GetChangestatus'] == true && addcardParam == false"
              class="spoiler__reset_button"
              @click="addcardParam = true"
            >
              {{ $t("add-btn-edit-platform") }}
            </button>
             <button
              v-else-if="$store.getters['GetChangestatus'] == true && addcardParam == true"
              class="spoiler__reset_button"
              @click="addcardParam = false"
            >
              {{ $t("add-btn-exit-platform") }}
            </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Imagecard from "../../../components/ImgCard.vue";
import Tablecard from "../../../components/TableCard/TableCard.vue";
import ModalWindow from "../../../components/ModalWindow.vue";
import OpenCard from "../../../components/buttonCardOpen.vue";
import AddCard from "@/components/formAddTable.vue"
import EditCard from "@/components/buttonCardEditing.vue";
import WarningMessage from "@/components/modalErrorInput.vue";
export default {
  layout: "card",
  components: {
    Imagecard,
    Tablecard,
    ModalWindow,
    OpenCard,
    AddCard,
    EditCard,
    WarningMessage
  },
  data() {
    

    return {
      modalError: false,
      addcardParam1 : false,
      addcardParam : false,
      titleforWarningMessage: "titleforWarningMessage",
      equipments: [
        { id: "1", name: "Метеостанция", by: "DJI" },
        { id: "2", name: "Модуль WIFI", by: "DJI" },
        { id: "3", name: "Модуль климат контроля", by: "DJI" },
        { id: "4", name: "Модуль контроля неба", by: "DJI" },
        { id: "5", name: "Модуль посадки", by: "DJI" },
      ],
      drones:[
        {name:'DJI',model:'Matrice 300 RTK'}
      ],
      limit: 3,
      img: [
        require("@/assets/img/dronoport1.jpg"),
        require("@/assets/img/dronoport2.jpg"),
        require("@/assets/img/dronoport3.jpg"),
      ],
      titleImg: [
        "left-view-modal-img",
        "top-view-modal-img",
        "right-view-modal-img",
      ],
      title: [
        "registration-num-table-card",
        "dimensions-table-card-mm",
        "voltage-table-card",
        "energy-consumption-table-card",
        "alowable-temp-table-card",
        "weight-table-card",
        "battery-table-card",
        "wind-speed-table-card",
        "maintence-time-table-card",
      ],
      description: [
        "450n-144-vc67",
        "2800 x 1840 x 140 ",
        "230",
        "6",
         "от -20 до 40",
        "1600",
        "17",
        "15",
        "5",
      ],
      type:[
        'text',
        'three quantity',
        'number',
        'number',
        'two quantity',
        'number',
        'number',
        'number',
        'number'
      ]
    };
  },
  headerData: {
    title: "droneport-title-page",
  },
  limitActive() {
    if ($store.getters["GetChangestatus"] == true) {
      this.limit = null;
    } else {
      this.limit = 3;
    }
  },
  computed: {
    computedObj() {
      return this.limit
        ? this.equipments.slice(0, this.limit)
        : this.equipments;
    },
  },
  methods: {
    changeData(number, value) {
      this.description[number] = value;
      localStorage.setItem('DataDroneportLocal', JSON.stringify( this.description))
    },
     DeleteImg(index){
      this.img.splice(index, 1)
    },
    clearInput(index){
      this.description[index] = ''
      localStorage.setItem('DataDroneportLocal', JSON.stringify( this.description))
    },
     addPhoto(value){
      this.img.push(value)
    },
    addInfo(value){
       if (
        value[0] == "" ||
        value[1] == "" ||
        value[2] == "" 
      ) {
        console.log(value);
        this.modalError = true;
        console.log(this.modalError);
        setTimeout(() => {
          this.modalError = false;
          console.log(this.modalError);
        }, 2000)
      }
        else{
      let object = {"id": value[0],"name": value[1],"by": value[2],};
      this.equipments.push(object)
       localStorage.setItem('DataDroneportLocaleequipments', JSON.stringify(this.equipments))
        }
    },
    addInfo1(value){
      if (
        value[0] == "" ||
        value[1] == "" 
      ) {
        console.log(value);
        this.modalError = true;
        console.log(this.modalError);
        setTimeout(() => {
          this.modalError = false;
          console.log(this.modalError);
        }, 2000)
      }
      else{
      let object = {"name": value[0],"model": value[1]};
       this.drones.push(object)
         localStorage.setItem('DataDroneportLocaledrones', JSON.stringify(this.drones))
      }
    },
    deletePoint(value){
      this.equipments.splice(value,1)
       localStorage.setItem('DataDroneportLocaleequipments', JSON.stringify(this.equipments))
    },
    deletePoint1(value){
      this.drones.splice(value,1)
      localStorage.setItem('DataDroneportLocaledrones', JSON.stringify(this.drones))
    },
    TakeDataFromLocalDroneport(){
    const DataLocalDroneport = localStorage.getItem('DataDroneportLocal')
      if(DataLocalDroneport != null){
      this.description = JSON.parse(DataLocalDroneport)
     
      }
  },
   TakeDataFromLocalDroneportquipments(){
    const DataLocalDroneportquipments = localStorage.getItem('DataDroneportLocaleequipments')
      if(DataLocalDroneportquipments != null){
      this.equipments = JSON.parse(DataLocalDroneportquipments)
     
      }
  },
   TakeDataFromLocalDroneportdrones(){
    const DataLocalDroneportdrones = localStorage.getItem('DataDroneportLocaledrones')
      if(DataLocalDroneportdrones != null){
      this.drones = JSON.parse(DataLocalDroneportdrones)
     
      }
  },
  },
  beforeMount(){
    this.TakeDataFromLocalDroneport(),
    this.TakeDataFromLocalDroneportquipments(),
    this.TakeDataFromLocalDroneportdrones()
   
     },
};
</script>

<style lang="scss">
@import "@/assets/scss/card-area";
.spoiler__reset {
  margin-bottom: 15px;
  &_button {
    background: rgba(20, 16, 41, 0.05);
    color: black;
    height: 48px;
    width: 280px;
    min-width: 200px;
    font-family: "Montserrat", serif;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      color: #9b42f5;
    }
  }
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  background: #9b42f5;
  border-radius: 6px;
}

progress::-webkit-progress-bar {
  color: #9b42f5;
}

progress::-webkit-progress-value {
  color: #9b42f5;
}

progress {
  color: #9b42f5;
}
</style>
