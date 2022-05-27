<template>
  <div class="page">
    <div class="card">
      <Imagecard :img="img" :titleImg="titleImg" @DeleteImg="DeleteImg"></Imagecard>
      <hr />
      <div class="card__main card-main">
        <div class="card-main__title">
          <h2>Камера</h2>
        </div>

        <Tablecard
          :title="title"
          :description="description"
          @changeInfo="changeData"
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
      titleImg: ["Вид слева", "Вид сверху", "Вид справа"],
      title: [
        "Регистрационный номер",
        "Размеры (мм)",
        "Напряжение питания (В)",
        "Угол обзора (°)",
        "Качество видео (p)",
        "Фокусное расстояние(мм)",
        "Количество видео-входов",
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
    };
  },
  headerData: {
    title: "Камера -  AHD M300",
  },
  methods: {
    changeData(number, value) {
      this.description[number] = value;
    },
     DeleteImg(index){
      this.img.splice(index, 1)
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
