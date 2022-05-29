<template>
  <div class="page">
    <div class="card">
      <Imagecard
        :img="img"
        :titleImg="titleImg"
        @DeleteImg="DeleteImg"
      ></Imagecard>
      <hr />
      <div class="card__main card-main">
        <div class="card-main__title">
          <h2>{{ $t("camera-info-title") }}</h2>
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
        require("@/assets/img/camera1.jpg"),
        require("@/assets/img/camera2.jpg"),
        require("@/assets/img/camera3.jpg"),
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
        "viewing-angle-table-card",
        "camera-resolution",
        "focal-length",
        "number-of-inputs-outputs",
      ],
      description: [
        "450n-144-vc67PST",
        "290 x 150 x 80",
        "12",
        "85",
        "1080",
        "3,6",
        "4",
      ],
         type:[
        'text',
        'three quantity',
        'number',
        'number',
         'number',
        'number',
        'number',
        'number',
        
        
      ]
    };
  },
  headerData: {
    title: "camera-title-page",
  },
  methods: {
    changeData(number, value) {
      this.description[number] = value;
    },

     DeleteImg(index){
      this.img.splice(index, 1)
    },
    clearInput(index){
      this.description[index] = ''
    }

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
