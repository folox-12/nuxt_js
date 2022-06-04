<template>
  <div class="map">
    <div class="TopShelf">
      <div class="TopShelf__descr">
        <h1>Маршрут/район полета</h1>
        <button
          class="ModalDescrButton"
          @mouseleave="hideDescr()"
          @mouseenter="showDescr = true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            role="presentation"
          >
            <g>
              <path
                d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"
              ></path>
            </g>
          </svg>
        </button>
        <div v-if="showDescr" class="Modal_descr">
          <div class="Modal_descr-figure">
            Введите название города в посковую строку
          </div>
        </div>
      </div>
      <div class="TopShelf-items">
        <div class="TopShelf-items__input">
          <fd-input
            v-model="valueInput"
            @input="ChangeCenter"
            :placeholder="'Найти населенный пункт для полета'"
          />
        </div>
        <div class="TopShelf-items__filters">
          <button class="LayoutShow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="svg-icon svg-icon--default"
            >
              <g>
                <path
                  d="M12 0L3 7L4.63 8.27L12 14L19.36 8.27L21 7L12 0M19.37 10.73L12 16.47L4.62 10.74L3 12L12 19L21 12L19.37 10.73M19.37 15.73L12 21.47L4.62 15.74L3 17L12 24L21 17L19.37 15.73Z"
                ></path>
              </g>
            </svg>
          </button>

          <button class="FigureBuild">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="presentation"
              class="svg-icon svg-icon--default"
            >
              <g>
                <path
                  d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3H2M4 5H6V7H4V5M18 7H20V9H18V7M18 15V18H15V20H18V23H20V20H23V18H20V15H18M8 17H10V19H8V17Z"
                ></path>
              </g>
            </svg>
          </button>

          <button class="MaxHeight">
            <span>>1000m</span>
          </button>

          <button class="Settings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="presentation"
              class="svg-icon svg-icon--default"
            >
              <g>
                <path
                  d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="RightShelf">
      <div class="RightShelf-items">
        <div class="RightShelf-items__buttons">
          <button calss="Location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="svg-icon svg-icon--default"
            >
              <g>
                <path
                  d="M19.07,4.93L17.66,6.34C19.1,7.79 20,9.79 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12C4,7.92 7.05,4.56 11,4.07V6.09C8.16,6.57 6,9.03 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12C18,10.34 17.33,8.84 16.24,7.76L14.83,9.17C15.55,9.9 16,10.9 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12C8,10.14 9.28,8.59 11,8.14V10.28C10.4,10.63 10,11.26 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.26 13.6,10.62 13,10.28V2H12A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,9.24 20.88,6.74 19.07,4.93Z"
                ></path>
              </g>
            </svg>
          </button>

          <button calss="FullScreen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="svg-icon svg-icon--default"
            >
              <g>
                <path
                  d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"
                ></path>
              </g>
            </svg>
          </button>
          <button class="Plus" @click="MaxZoomPlus()">+</button>
          <button class="Minus" @click="MaxZoomMinus()">-</button>
        </div>
      </div>
    </div>
    <div class="Layout">
      <div class="Map" id="map-wraper" style="height: 100%; width: 100%">
        <client-only>
          <l-map
            :options="{ zoomControl: false }"
            :zoom="MapOptions[0].zoom"
            :center="MapOptions[3].Center"
            :max-zoom="MapOptions[1].MaxZoom"
            :min-zoom="MapOptions[2].MinZoom"
          >
            <l-tile-layer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            ></l-tile-layer>

            <div class="Markers-area">
              <nuxt-link no-prefetch :to="localePath('/Platform1')">
                <ButtonLink v-if="showButtonLink"></ButtonLink>
              </nuxt-link>
              <div class="Marker-container">
                <CustomMapMarker :Adres="[55.668, 37.279]"></CustomMapMarker>
              </div>
              <div class="Marker-container">
                <CustomMapMarker :Adres="[55.678, 37.2413]"></CustomMapMarker>
              </div>
              <div class="Marker-container">
                <CustomMapMarker :Adres="[55.686, 37.284]"></CustomMapMarker>
              </div>
            </div>
          </l-map>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from "../components/Map/ButtonLink.vue";
import fdInput from "../components/UI/fd-input.vue";
import { mapGetters } from "vuex";

export default {
  layout: "map",

  components: {
    ButtonLink,
    fdInput,
  },

  data() {
    return {
      // longitude =  55.686,
      // latitude =  37.2840,
      UserCoord: false,
      cood: [55.686, 37.284],
      zoomControl: false,
      iconUrlCustom: require("../assets/img/Marker.png"),
      valueInput: "",

      showButtonLink: false,
      showDescr: false,

      MapOptions: [
        { id: "Zoom", zoom: 13 },
        { id: "MaxZoom", MaxZoom: 18 },
        { id: "MinZoom", MinZoom: 10 },
        { id: "Center", Center: [55.673, 37.2733] },
      ],
    };
  },

  props: {
    coordinate: {
      type: Array,
      default: [55.673, 37.2733],
    },
  },
  computed: {
    ...mapGetters("Map", ["getCoordinate"]),
    Coordinate() {
      return this.getCoordinate[this.valueInput];
    },
    selectedCenterFromRadioButton() {
      if (this.coordinate) {
        return (this.MapOptions[3].Center = this.coordinate);
      }
    },
  },

  methods: {
    Test() {
      this.showButtonLink = true;
    },
    ChangeCenter() {
      this.MapOptions[3].Center = this.Coordinate;
    },

    MaxZoomPlus() {
      this.MapOptions[0].zoom += 1;
    },
    MaxZoomMinus() {
      this.MapOptions[0].zoom -= 1;
    },

    hideDescr() {
      this.showDescr = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/fonts";

.Marker-container {
  position: relative;
}

.ModalButton {
  width: 100px;
  height: 48px;
}

h1 {
  margin-top: 15px;
  font-size: 18px;
  font-weight: 500;
}

.map {
  background-color: $white;
  width: 100%;
  position: relative;
  height: 780px;
  // margin-top: 30px;
}

svg {
  fill: rgba(20, 16, 41, 0.6);
}

.TopShelf__descr {
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 15px 15px;
  button {
    display: flex;
    align-items: center;

    svg {
      margin-top: 10px;
      margin-left: 15px;
    }
  }
}

.RightShelf-items__buttons {
  position: absolute;
  bottom: 1;
  margin-top: 100px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 2;
  button {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    font-size: 30px;
    &:hover {
      background-color: rgb(246, 246, 246);
      svg {
        fill: blueviolet;
      }
    }
  }
}

.TopShelf-items {
  position: absolute;
  margin-top: 10px;
  width: 100%;
  display: flex;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  &__input {
    width: 100%;
  }
  &__filters {
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    min-height: 44px;
    min-width: 230px;
    gap: 5px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
    span {
      font-size: 17px;
    }
    button {
      min-height: 40px;
      padding-left: 10px;
      padding-right: 10px;
      background-color: #fff;
      font-weight: 30px;
      &:hover {
        background-color: rgba(20, 16, 41, 0.02);
        color: blueviolet;
        svg {
          fill: blueviolet;
        }
      }
    }
  }
}

.Layout {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  .Map {
    width: 100%;
    height: 100%;
    position: relative;
  }
}

.Modal_descr {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  &-figure {
    z-index: 2;
    display: flex;
    position: relative;
    width: 200px;
    height: 100px;
    margin-left: 26px;
    background: rgb(0, 0, 0, 0.8);
    border-radius: 10px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    margin-left: 250px;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      top: 100%;
      right: calc(50% - 12px);
      border-top: 12px solid rgb(0, 0, 0, 0.8);
      border-right: 12px solid transparent;
      border-left: 12px solid transparent;
    }
  }
}

.ModalDescrButton {
  background-color: inherit;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ModalDescrButton:hover {
  svg {
    fill: blueviolet;
  }
}
</style>
