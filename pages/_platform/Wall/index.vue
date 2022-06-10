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
          <h2>{{ $t("wall-title") }}</h2>
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
        require("@/assets/img/wall1.jpg"),
        require("@/assets/img/wall2.jpg"),
        require("@/assets/img/wall3.jpg"),
      ],
      titleImg: [
        "left-view-table-card",
        "top-view-table-card",
        "right-view-table-card",
      ],
      title: [
        "infrastructure-manufacturer",
        "height-table-card",
        "cell-dimensions-table-card",
      ],
      description: ["Россия", "50 x 1 x 50", "1500"],
       type:[
        'addres',
        'three quantity',
        'number',
      ]
    };
    
    
  },
  headerData: {
    title: "wall-desc-title",
  },
  methods: {
    changeData(number, value) {
      this.description[number] = value;
      localStorage.setItem('DataPostamatWall', JSON.stringify(this.description))
    },

     DeleteImg(index){
      this.img.splice(index, 1)
    },
    clearInput(index){
      this.description[index] = ''
        localStorage.setItem('DataPostamatWall', JSON.stringify(this.description))
    },
     addPhoto(value){
      this.img.push(value)
    }

  ,
 TakeDataFromLocalWall(){
       const DataLocalWall = localStorage.getItem('DataSensorWall')
      if(DataLocalWall != null){
      this.description = JSON.parse(DataLocalWall)
     
      }
    }

  },
  beforeMount(){
    this.TakeDataFromLocalWall()
   
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
