<template>
  <div class="page">
    <div class="card">
      <Imagecard
        :img="img"
        :titleImg="titleImg"
        @DeleteImg="DeleteImg"
        @addPhoto="addPhoto"
      ></Imagecard>
      <hr />
      <div class="card__main card-main">
        <div class="card-main__title">
          <h2>{{ $t("lights-title-page") }}</h2>
        </div>

        <Tablecard
          :title="title"
          :description="description"
          :type="type"
          @changeInfo="changeData"
          @clearInput="clearInput"
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
        require("@/assets/img/light1.jpg"),
        require("@/assets/img/light2.jpg"),
        require("@/assets/img/light3.jpg"),
      ],
      titleImg: [
        "front-view-table-card",
        "back-view-table-card",
        "left-view-table-card",
      ],
      title: [
        "registration-num-table-card",
        "dimensions-table-card-mm",
        "voltage-table-card",
        "temp-color-table-card",
        "alowable-temp-table-card",
        "degree-protection-table-card",
        "luminous-flux-table-card",
        "led-type-table-card",

      ],
      description: [
        "450n-144-vc67PST",
        "455 x 180 x 49",
        "100",
        "5000",
        "от -40 до 50",
        "IP65",
        "12000",
        "SMD2835",
      ],
         type:[
        'text',
        'three quantity',
        'number',
        'number',
         'two quantity',
        'text',
        'number',
        'text',
        
        
      ]
    };
  },
  headerData: {
    title: "light-title",
  },
  methods: {
    changeData(number, value) {
      this.description[number] = value;
    },

    DeleteImg(index) {
      this.img.splice(index, 1);
    },
    clearInput(index) {
      this.description[index] = "";
    },
     addPhoto(value){
      this.img.push(value)
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
