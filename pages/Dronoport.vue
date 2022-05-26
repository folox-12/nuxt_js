<template>
  <div class="page">
    <div class="card">
      <Imagecard :img="img" :titleImg="titleImg"></Imagecard>
      <hr />
      <div class="card__main card-main">
        <div class="card-main__title">
          <h2>{{ $t("droneport") }}</h2>
        </div>

        <Tablecard
          :title="title"
          :description="description"
          @changeInfo="changeData"
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
            </tr>
            <tr v-for="(equipment, index) in computedObj" v-bind:key="index">
              <td>{{ equipment.id }}</td>
              <td>{{ equipment.by }}</td>
              <td>{{ equipment.name }}</td>
            </tr>
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
            v-if="$store.getters['GetChangestatus'] == true"
            class="spoiler__reset_button"
          >
            + Добавить
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card__main card-main">
        <div class="card-main__title">
          <h2>Обслуживаемые дроны</h2>
        </div>
        <div class="card-main__table">
          <table>
            <tr>
              <th style="padding-bottom: 15px">Производитель</th>
              <th style="padding-bottom: 15px">Модель</th>
              <th style="padding-bottom: 15px"></th>
            </tr>
            <tr>
              <td>DJI</td>
              <td>Matrice 300 RTK</td>
              <td><OpenCard></OpenCard></td>
            </tr>
          </table>
          <button
            v-if="$store.getters['GetChangestatus'] == true"
            class="spoiler__reset_button"
          >
            + Добавить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Imagecard from "../components/ImgCard.vue";
import Tablecard from "../components/TableCard/TableCard.vue";
import ModalWindow from "../components/ModalWindow.vue";
import OpenCard from "../components/buttonCardOpen.vue";
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
      equipments: [
        { id: "1", name: "Метеостанция", by: "DJI" },
        { id: "2", name: "Модуль WIFI", by: "DJI" },
        { id: "3", name: "Модуль климат контроля", by: "DJI" },
        { id: "4", name: "Модуль контроля неба", by: "DJI" },
        { id: "5", name: "Модуль посадки", by: "DJI" },
      ],
      limit: 3,
      img: [
        require("../assets/img/dronoport1.jpg"),
        require("../assets/img/dronoport2.jpg"),
        require("../assets/img/dronoport3.jpg"),
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
        "weight-table-card",
        "battery-table-card",
        "wind-speed-table-card",
        "alowable-temp-table-card",
        "maintence-time-table-card",
      ],
      description: [
        "450n-144-vc67PST",
        "2800 x 1840 x 140 ",
        "230",
        "6",
        "1600",
        "17",
        "15",
        "от -20 до 40",
        "5",
      ],
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
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/card-area";
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
