<template>
  <div class="page">
    <div class="card">
      <Imagecard
        :img="img"
        :titleImg="titleImg"
        :type="type"
        @addPhoto="addPhoto"
        @DeleteImg="DeleteImg"
      ></Imagecard>
      <hr />
      <div class="card__main card-main">
        <div class="card-main__title">
          <h2>{{ $t("motions-sensors-title") }}</h2>
        </div>

        <Tablecard
          :title="title"
          :description="description"
          @changeInfo="changeData"
          @clearInput='clearInput'
        ></Tablecard>
      </div>
    </div>
  </div>
</template>
<script>
import Imagecard from "@/components/ImgCard.vue";
import Tablecard from "@/components/TableCard/TableCard.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import OpenCard from "@/components/buttonCardOpen.vue";
export default {
  layout: "card",
  components: {
    Imagecard,
    Tablecard,
    ModalWindow,
    OpenCard,
  },
  data() {
    return {
      img: [
        require("@/assets/img/sensor1.jpg"),
        require("@/assets/img/sensor2.jpg"),
        require("@/assets/img/sensor3.jpg"),
      ],
      titleImg: ["Вид слева", "Вид сверху", "Вид справа"],
      title: [
        "registration-num-table-card",
        "dimensions-table-card-mm",
        "voltage-table-card",
        "weight-table-card",
         "alowable-temp-table-card",
        "viewing-angle-table-card",
        "motion-sensor-speed-table-card",
        "detection-range-table-card",
      ],
      description: [
        "450n-144-vc67PST",
        "110 x 65 x 50",
        "3",
        "1",
        "от 0,3 до 2",
        "1",
        "90",
        "12",
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
        
        
      ]
    };
  },
  headerData: {
    title: "motion-sensor-title-page",
  },
  methods: {
    changeData(number, value) {
      this.description[number] = value;
       localStorage.setItem('DataPostamatSensor', JSON.stringify(this.description))
    },

     DeleteImg(index){
      this.img.splice(index, 1)
    },
    clearInput(index){
      this.description[index] = ''
      localStorage.setItem('DataPostamatSensor', JSON.stringify(this.description))
    },
     addPhoto(value){
      this.img.push(value)
    }

  ,
 TakeDataFromLocalSensor(){
       const DataLocalSensor = localStorage.getItem('DataSensorLocal')
      if(DataLocalSensor != null){
      this.description = JSON.parse(DataLocalSensor)
     
      }
    }

  },
  beforeMount(){
    this.TakeDataFromLocalSensor()
   
     },
};
</script>

<style lang="scss">
@import "@/assets/scss/card-area";
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
