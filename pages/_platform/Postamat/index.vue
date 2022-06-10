<template>
  <div class="page">
    <div class="card">
      <Imagecard
        :img="img"
        :titleImg="titleImg"
        @addPhoto="addPhoto"
        @DeleteImg="DeleteImg"
      ></Imagecard>
      <hr />
      <div class="card__main card-main">
        <div class="card-main__title">
          <h2>{{ $t("postamat-title-page") }}</h2>
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
        require("@/assets/img/postamat1.jpg"),
        require("@/assets/img/postamat2.jpg"),
        require("@/assets/img/postamat3.jpg"),
      ],
      titleImg: [
        "left-view-table-card",
        "top-view-table-card",
        "right-view-table-card",
      ],
      title: [
        "registration-num-table-card",
        "dimensions-table-card-mm",
        "voltage-table-card",
        "weight-table-card",
        "alowable-temp-table-card",
        "time-order-table-card",
        "wind-speed-table-card",
        "maintence-time-table-card",
      ],
      description: [
        "450n-144-vc67PST",
        "2045 x 1145 x 565",
        "220",
        "1600",
         "от 0 до 40",
        "1",
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
        
        
      ]
    };
  },
  headerData: {
    title: "postamat-title",
  },
  methods: {
    changeData(number, value) {
      this.description[number] = value;
      localStorage.setItem('DataPostamatLocal', JSON.stringify(this.description))
    },
     DeleteImg(index){
      this.img.splice(index, 1)
    },
    clearInput(index){
      this.description[index] = ''
          localStorage.setItem('DataPostamatLocal', JSON.stringify(this.description))
    },
     addPhoto(value){
      this.img.push(value)
    },
 TakeDataFromLocalPostamat(){
       const DataLocalPostamat = localStorage.getItem('DataPostamatLocal')
      if(DataLocalPostamat != null){
      this.description = JSON.parse(DataLocalPostamat)
     
      }
    }

  },
  beforeMount(){
    this.TakeDataFromLocalPostamat()
   
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
