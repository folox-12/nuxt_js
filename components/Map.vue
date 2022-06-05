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
            :options="{ zoomControl: false, attributionControl: false }"
            :zoom="MapOptions[0].zoom"
            :center="MapOptions[3].Center"
            :max-zoom="MapOptions[1].MaxZoom"
            :min-zoom="MapOptions[2].MinZoom"
          >
            <l-tile-layer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            ></l-tile-layer>

            <l-polygon :lat-lngs="polygon.latlngs" :color="polygon.color"></l-polygon>

            <div class="Markers-area">
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
    <button @click="showRadius = true">Показать</button>
  </div>
</template>

<script>
import fdInput from "../components/UI/fd-input.vue";
import { mapGetters } from "vuex";


export default {
  layout: "map",

  components: {
    fdInput,
  },

  data() {
    return {
      UserCoord: false,
      iconUrlCustom: require("../assets/img/Marker.png"),
      valueInput: "",

      showDescr: false,
      showRadius:true,

      MapOptions: [
        { id: "Zoom", zoom: 13 },
        { id: "MaxZoom", MaxZoom: 18 },
        { id: "MinZoom", MinZoom: 10 },
        { id: "Center", Center: [55.673, 37.2733], },
      ],

      polygon:{
        latlngs:[
            [55.657595, 37.232727], [55.658888, 37.232706], [55.659013, 37.233039], [55.659902, 37.233092], [55.660732, 37.23857], [55.66127, 37.238681], 
            [55.662875, 37.245219], [55.663764, 37.244071], [55.665889, 37.250655], [55.666597, 37.249263], [55.667405, 37.24485], [55.66796, 37.243845], 
            [55.666563, 37.226464], [55.669916, 37.224666], [55.671036, 37.222979], [55.672723, 37.222294], [55.675708, 37.23167], [55.674178, 37.233538], 
            [55.675016, 37.23764], [55.678604, 37.243322], [55.680736, 37.241849], [55.685081, 37.245037], [55.687708, 37.248039], [55.688478, 37.249279], 
            [55.688921, 37.245977], [55.686621, 37.243625], [55.687691, 37.240393], [55.68902, 37.241019], [55.690494, 37.243226], [55.689547, 37.246053], 
            [55.689458, 37.247116], [55.689776, 37.249499], [55.691631, 37.246465], [55.69252, 37.248623], [55.691896, 37.25074], [55.690138, 37.253715], 
            [55.690736, 37.258132], [55.689888, 37.265035], [55.688975, 37.268882], [55.687002, 37.272187], [55.687065, 37.273879], [55.690887, 37.272804], 
            [55.691316, 37.275399], [55.691766, 37.276493], [55.692342, 37.27918], [55.686847, 37.281827], [55.686777, 37.282472], [55.689134, 37.291574], 
            [55.690618, 37.290708], [55.693616, 37.293794], [55.69453, 37.296462], [55.694248, 37.302329], [55.693266, 37.302539], [55.692422, 37.30379], 
            [55.691945, 37.306187], [55.690653, 37.308538], [55.690602, 37.310313], [55.688391, 37.310495], [55.687609, 37.30983], [55.687024, 37.310058], 
            [55.687104, 37.31056], [55.684519, 37.312762], [55.68351, 37.310806], [55.682411, 37.310937], [55.681962, 37.311214], [55.682157, 37.312502], 
            [55.683773, 37.319081], [55.684697, 37.321376],             
            [55.686188, 37.324147], [55.691561, 37.320986], [55.691948, 37.322267], [55.692193, 37.322573], [55.692775, 37.322841], [55.693305, 37.322729], 
            [55.695366, 37.321406], [55.695723, 37.319579], [55.697734, 37.317973], [55.698039, 37.31709], [55.699009, 37.317168], [55.700653, 37.317825], [55.702824, 37.317706], 
            [55.707714, 37.316749], [55.708021, 37.330373], [55.70166, 37.326511], [55.701664, 37.326193], [55.700007, 37.325131], [55.697402, 37.324235], [55.695538, 37.334874], 
            [55.694454, 37.333253], [55.693433, 37.334169], [55.693815, 37.337152], [55.685986, 37.328855], [55.68414, 37.333949], [55.683196, 37.333545], [55.682426, 37.334737], 
            [55.681991, 37.334022],
            [55.682832, 37.33246], [55.681687, 37.331258], [55.683108, 37.326895], [55.685583, 37.329466], [55.685705, 37.329031], [55.682999, 37.326243], [55.681495, 37.331208], 
             [55.680261, 37.334128], [55.676267, 37.345737], [55.678841, 37.348907], [55.677635, 37.353372], [55.675354, 37.357002], [55.673241, 37.353562], [55.672683, 37.348848],
             [55.668834, 37.348289], 
             [55.664924, 37.344554], [55.667099, 37.335361], [55.668043, 37.335723], [55.667084, 37.342332], [55.670498, 37.342804], [55.670862, 37.341099], [55.670826, 37.339757], 
             [55.670256, 37.339554], [55.670662, 37.33655], [55.671663, 37.336828], [55.67199, 37.337204], [55.672815, 37.335284], [55.67279, 37.333588], [55.673809, 37.333352], 
             [55.673785, 37.332269], 
             [55.674427, 37.331239], [55.674305, 37.330988], [55.674434, 37.329799], [55.675035, 37.329581], [55.676461, 37.32653], [55.677121, 37.327251], [55.676747, 37.322919], 
             [55.673456, 37.322765], [55.672818, 37.32468], [55.670814, 37.324168], [55.67091, 37.31968], [55.67339, 37.319763], [55.673708, 37.317777], [55.674235, 37.317698], 
             [55.674372, 37.317437], [55.674801, 37.317795], 
             [55.674993, 37.317294], [55.675138, 37.315421], [55.677113, 37.316813], [55.677607, 37.314655], [55.680195, 37.309785], [55.681168, 37.308559], [55.680484, 37.305329],              
             [55.67681, 37.305757],
             [55.673173, 37.305423], [55.672964, 37.305717], [55.672338, 37.30536], [55.670327, 37.303163], [55.67098, 37.301953], [55.671327, 37.30227], 
             [55.671659, 37.301189], [55.671556, 37.301092], 
             [55.671741, 37.300485], [55.671123, 37.299838], [55.671591, 37.297265], [55.670233, 37.296085], [55.66872, 37.295827], [55.665421, 37.295672], [55.664394, 37.295372], 
             [55.663505, 37.296236], [55.663463, 37.29581], [55.662937, 37.295095], [55.662957, 37.294414], [55.663307, 37.293803], [55.661675, 37.289296], [55.660876, 37.290093], 
             [55.659324, 37.289649], [55.658092, 37.287529],              
             [55.655615, 37.289704], [55.655502, 37.289344], [55.65059, 37.262615], [55.649984, 37.258427], [55.649113, 37.254187], [55.648121, 37.250655], [55.648534, 37.250005], 
             [55.648577, 37.248527], [55.65124, 37.243086], [55.651621, 37.241742], [55.652367, 37.240154], [55.654228, 37.238897], [55.653414, 37.235861], [55.654021, 37.234943], 
             [55.65379, 37.23445], [55.654106, 37.233956],             
             [55.653719, 37.232882], [55.653727, 37.225273], [55.657902, 37.225295], [55.657058, 37.236349],              
             [55.654633, 37.23863], [55.656733, 37.241269], [55.656933, 37.241805], [55.656303, 37.242588], 
             [55.657059, 37.244735], [55.657667, 37.243925], [55.658133, 37.245604],               
             [55.658442, 37.247581], [55.658673, 37.247516],
              [55.658465, 37.245694], [55.659654, 37.244579], [55.659172, 37.243393], [55.659296, 37.242806], [55.659987, 37.242989], [55.660097, 37.241604], [55.659036, 37.241255], 
              [55.658165, 37.239296], [55.657934, 37.240209], [55.657438, 37.240873], [55.656897, 37.240196], [55.657135, 37.238661]
        ],
        color: '#1E90FF'
      },

    };
  },

  props: {
    coordinate: {
      type: Array,
      default: [55.673, 37.2733],
    },
  },
  mounted() {},
  watch: {
    coordinate() {
      if (this.coordinate) {
        return (this.MapOptions[3].Center = this.coordinate);
      }
    },
  },
  computed: {
    ...mapGetters("Map", ["getCoordinate"]),
    Coordinate() {
      return this.getCoordinate[this.valueInput];
    },
  },

  methods: {

    ChangeCenter() {
      if (this.Coordinate) {
        this.MapOptions[3].Center = this.Coordinate;
      } else {
        this.MapOptions[3].Center = this.coordinate;
      }
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
    min-height: 48px;
    min-width: 240px;
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
