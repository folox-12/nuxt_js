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
            v-if="showInput"
            v-model="valueInput"
            @input="ChangeCenter"
            :placeholder="'Найти населенный пункт для полета'"
          />
        </div>
        <div class="TopShelf-items__inputClosed" v-show="showInputClosed">
          <button @click="hideTopShelfTools()">
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
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <div class="TopShelf-items__inputActive" v-show="showInputActive">
          <button @click="hideTopShelfTools">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="presentation"
              class="svg-icon svg-icon--default"
            >
              <!---->
              <g>
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <div class="TopShelf-items__filters" v-show="showTopFilters">
          <button
            class="TileShow"
            @click="showSettingsTile = !showSettingsTile"
          >
            <svg
            v-bind:class="
     showSettingsTile == true || TileValue != ''
        ? 'activeIconMapView'
        : ''"
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

          <button class="FigureBuild" @click="foo()">
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

          <button
            class="Settings"
            @click="showSettingsView = !showSettingsView"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
               v-bind:class="
      showSettingsView == true || showLayer == true || showRadius == true
        ? 'activeIconMap'
        : ''
    "
            >
              <path
                d="M12 10C12 11.1046 11.1046 12 10 12V14C12.2091 14 14 12.2091 14 10H12ZM10 12C8.89543 12 8 11.1046 8 10H6C6 12.2091 7.79086 14 10 14V12ZM8 10C8 8.89543 8.89543 8 10 8V6C7.79086 6 6 7.79086 6 10H8ZM10 8C11.1046 8 12 8.89543 12 10H14C14 7.79086 12.2091 6 10 6V8Z"
              />
              <path
                d="M13.2687 4.07658L12.7915 4.95535L12.7915 4.95535L13.2687 4.07658ZM17.6497 8.22126L18.1463 9.08922L17.6497 8.22126ZM18.2169 6.10414L17.3529 6.60753L18.2169 6.10414ZM16.8097 9.85577L17.8095 9.83462L16.8097 9.85577ZM17.6496 11.7788L18.1463 10.9108L18.1463 10.9108L17.6496 11.7788ZM16.8097 10.1443L17.8095 10.1654L16.8097 10.1443ZM18.2169 13.8958L17.3528 13.3924L17.3528 13.3924L18.2169 13.8958ZM15.3801 15.6763L14.8835 16.5443L14.8835 16.5443L15.3801 15.6763ZM17.5125 15.105L18.3765 15.6084L18.3765 15.6084L17.5125 15.105ZM13.5348 15.7711L14.0511 16.6275L14.0511 16.6275L13.5348 15.7711ZM13.2687 15.9234L13.746 16.8022L13.2687 15.9234ZM6.73157 15.9234L7.20883 15.0447L6.73157 15.9234ZM2.48784 15.105L1.62377 15.6084L1.62377 15.6084L2.48784 15.105ZM4.62018 15.6763L5.1168 16.5443L5.1168 16.5443L4.62018 15.6763ZM2.35065 11.7787L1.85402 10.9108L2.35065 11.7787ZM1.7834 13.8958L2.64746 13.3924L2.64746 13.3924L1.7834 13.8958ZM3.19056 10.1443L4.19034 10.1231L3.19056 10.1443ZM2.35063 8.22127L2.84725 7.3533L2.35063 8.22127ZM3.19056 9.85578L2.19078 9.83463L3.19056 9.85578ZM1.78337 6.10415L0.919305 5.60077L0.919305 5.60077L1.78337 6.10415ZM4.62015 4.32367L4.12352 5.19163L4.12352 5.19163L4.62015 4.32367ZM2.48779 4.89501L3.35185 5.39839L3.35185 5.39839L2.48779 4.89501ZM6.46547 4.22895L5.94919 3.37253L6.46547 4.22895ZM6.73157 4.07658L7.20883 4.95535L6.73157 4.07658ZM15.3801 4.32366L14.8835 3.45569L15.3801 4.32366ZM13.5348 4.22894L14.0511 3.37252L13.5348 4.22894ZM6.46547 15.7711L5.9492 16.6275L6.46547 15.7711ZM17.5125 4.89501L18.3766 4.39162L17.5125 4.89501ZM9.27081 2H10.7295V0H9.27081V2ZM6.98175 5.08537C7.05636 5.04039 7.13207 4.99703 7.20883 4.95535L6.25432 3.19782C6.15116 3.25384 6.04943 3.3121 5.94919 3.37253L6.98175 5.08537ZM2.64743 6.60754L3.35185 5.39839L1.62372 4.39163L0.919305 5.60077L2.64743 6.60754ZM4.18903 10C4.18903 9.95886 4.18947 9.91783 4.19034 9.87693L2.19078 9.83463C2.18962 9.88963 2.18903 9.94476 2.18903 10H4.18903ZM4.19034 10.1231C4.18947 10.0822 4.18903 10.0412 4.18903 10H2.18903C2.18903 10.0553 2.18962 10.1104 2.19078 10.1654L4.19034 10.1231ZM3.3519 14.6016L2.64746 13.3924L0.919333 14.3992L1.62377 15.6084L3.3519 14.6016ZM7.20883 15.0447C7.13207 15.003 7.05637 14.9596 6.98175 14.9146L5.9492 16.6275C6.04944 16.6879 6.15116 16.7462 6.25432 16.8022L7.20883 15.0447ZM10.7295 18H9.27081V20H10.7295V18ZM13.0185 14.9146C12.9439 14.9596 12.8682 15.003 12.7915 15.0447L13.746 16.8022C13.8491 16.7462 13.9508 16.6879 14.0511 16.6275L13.0185 14.9146ZM17.3528 13.3924L16.6484 14.6016L18.3765 15.6084L19.081 14.3992L17.3528 13.3924ZM15.8113 10C15.8113 10.0412 15.8108 10.0822 15.81 10.1231L17.8095 10.1654C17.8107 10.1104 17.8113 10.0552 17.8113 10H15.8113ZM15.81 9.87692C15.8108 9.91783 15.8113 9.95885 15.8113 10H17.8113C17.8113 9.94475 17.8107 9.88963 17.8095 9.83462L15.81 9.87692ZM16.6484 5.39839L17.3529 6.60753L19.081 5.60076L18.3766 4.39162L16.6484 5.39839ZM12.7915 4.95535C12.8682 4.99703 12.9439 5.04039 13.0185 5.08536L14.0511 3.37252C13.9508 3.31209 13.8491 3.25384 13.746 3.19782L12.7915 4.95535ZM13.746 3.19782C13.4108 3.01577 13.2705 2.74442 13.2705 2.54104H11.2705C11.2705 3.64708 11.976 4.51246 12.7915 4.95535L13.746 3.19782ZM18.1463 9.08922C19.3724 8.38766 19.7921 6.8214 19.081 5.60076L17.3529 6.60753C17.5049 6.86848 17.4152 7.20331 17.153 7.35329L18.1463 9.08922ZM17.8095 9.83462C17.8014 9.44965 17.9685 9.19094 18.1463 9.08922L17.153 7.35329C16.1907 7.9039 15.7903 8.94867 15.81 9.87692L17.8095 9.83462ZM18.1463 10.9108C17.9685 10.8091 17.8014 10.5504 17.8095 10.1654L15.81 10.1231C15.7903 11.0513 16.1907 12.0961 17.153 12.6467L18.1463 10.9108ZM19.081 14.3992C19.7921 13.1786 19.3724 11.6123 18.1463 10.9108L17.153 12.6467C17.4151 12.7967 17.5048 13.1315 17.3528 13.3924L19.081 14.3992ZM14.8835 16.5443C16.1073 17.2445 17.6668 16.8267 18.3765 15.6084L16.6484 14.6016C16.4916 14.8708 16.1471 14.9631 15.8767 14.8084L14.8835 16.5443ZM14.0511 16.6275C14.3854 16.426 14.6992 16.4389 14.8835 16.5443L15.8767 14.8084C14.916 14.2587 13.814 14.4351 13.0185 14.9146L14.0511 16.6275ZM13.2705 17.459C13.2705 17.2556 13.4108 16.9842 13.746 16.8022L12.7915 15.0447C11.976 15.4875 11.2705 16.3529 11.2705 17.459H13.2705ZM10.7295 20C12.1329 20 13.2705 18.8623 13.2705 17.459H11.2705C11.2705 17.7578 11.0283 18 10.7295 18V20ZM6.72978 17.459C6.72978 18.8623 7.86744 20 9.27081 20V18C8.97201 18 8.72978 17.7578 8.72978 17.459H6.72978ZM6.25432 16.8022C6.58952 16.9842 6.72978 17.2556 6.72978 17.459H8.72978C8.72978 16.3529 8.0243 15.4875 7.20883 15.0447L6.25432 16.8022ZM1.62377 15.6084C2.33352 16.8267 3.89301 17.2445 5.1168 16.5443L4.12355 14.8084C3.8532 14.9631 3.50869 14.8708 3.3519 14.6016L1.62377 15.6084ZM1.85402 10.9108C0.627885 11.6123 0.208224 13.1786 0.919333 14.3992L2.64746 13.3924C2.49544 13.1315 2.58516 12.7967 2.84727 12.6467L1.85402 10.9108ZM2.19078 10.1654C2.19893 10.5504 2.03179 10.8091 1.85402 10.9108L2.84727 12.6467C3.80957 12.0961 4.20997 11.0513 4.19034 10.1231L2.19078 10.1654ZM1.854 9.08923C2.03178 9.19095 2.19892 9.44966 2.19078 9.83463L4.19034 9.87693C4.20997 8.94868 3.80956 7.90391 2.84725 7.3533L1.854 9.08923ZM0.919305 5.60077C0.208189 6.82141 0.627852 8.38767 1.854 9.08923L2.84725 7.3533C2.58512 7.20332 2.49541 6.86849 2.64743 6.60754L0.919305 5.60077ZM5.11677 3.4557C3.89297 2.75548 2.33348 3.17333 1.62372 4.39163L3.35185 5.39839C3.50865 5.12925 3.85316 5.03694 4.12352 5.19163L5.11677 3.4557ZM5.94919 3.37253C5.61487 3.57407 5.30104 3.56113 5.11677 3.4557L4.12352 5.19163C5.08427 5.74134 6.18628 5.5649 6.98175 5.08537L5.94919 3.37253ZM6.72978 2.54104C6.72978 2.74442 6.58952 3.01577 6.25432 3.19782L7.20883 4.95535C8.0243 4.51246 8.72978 3.64708 8.72978 2.54104H6.72978ZM14.8835 3.45569C14.6992 3.56113 14.3854 3.57406 14.0511 3.37252L13.0185 5.08536C13.814 5.5649 14.916 5.74134 15.8768 5.19162L14.8835 3.45569ZM10.7295 2C11.0283 2 11.2705 2.24223 11.2705 2.54104H13.2705C13.2705 1.13766 12.1329 0 10.7295 0V2ZM5.1168 16.5443C5.30106 16.4389 5.61489 16.4259 5.9492 16.6275L6.98175 14.9146C6.18629 14.4351 5.08429 14.2587 4.12355 14.8084L5.1168 16.5443ZM18.3766 4.39162C17.6668 3.17332 16.1073 2.75547 14.8835 3.45569L15.8768 5.19162C16.1471 5.03693 16.4916 5.12924 16.6484 5.39839L18.3766 4.39162ZM9.27081 0C7.86744 0 6.72978 1.13766 6.72978 2.54104H8.72978C8.72978 2.24223 8.97201 2 9.27081 2V0Z"
              />
            </svg>
          </button>
        </div>
        <div class="SettingsMap" v-show="showSettingsTile">
          <div class="SettingsMap__Tile" v-click-outside="onClickOutsideTile">
            <radioButton
              @radioValue="getTileValue"
              :valuesRadio="{
                OSM: 0,
                Спутник: 1,
                Светлая: 2,
                Темная: 3,
              }"
            />
          </div>
        </div>
        <div class="SettingsMap" v-show="showSettingsView">
          <div
            class="SettingsMap__View SettingsMap-View"
            v-click-outside="onClickOutsideView"
          >
            <div class="SettingsMap-View__Layer">
              <h2>Отображение слоев</h2>
             
              <radioButton
                @radioValue="getViewLayerValue"
                :valuesRadio="{
                  Вкл: 1,
                }"
              />
              
            </div>
            <div class="SettingsMap-View__Rad">
              <h2>Радиус сигнала</h2>
              <radioButton
                @radioValue="getViewRadValue"
                :valuesRadio="{
                  Вкл: 1,
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="RightShelf">
      <div class="RightShelf-items">
        <div class="RightShelf-items__buttons">
          <button calss="Location" @click="createUserMarker()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M1.96481 11.8315L2.42882 10.9457L2.42882 10.9457L1.96481 11.8315ZM2.06372 8.59453L1.65467 7.68202L2.06372 8.59453ZM6.68509 15.1075L5.79925 15.5716L5.79925 15.5716L6.68509 15.1075ZM4.99779 13.4202L4.53378 14.3061L4.53378 14.3061L4.99779 13.4202ZM11.5108 18.0416L12.4233 18.4507L11.5108 18.0416ZM8.27379 18.1405L9.15962 17.6765L9.15962 17.6765L8.27379 18.1405ZM18.0054 3.55365L18.9179 3.96271L18.0054 3.55365ZM16.5517 2.09993L16.1426 1.18742L16.5517 2.09993ZM17.0929 3.1446L10.5983 17.6326L12.4233 18.4507L18.9179 3.96271L17.0929 3.1446ZM9.15962 17.6765L7.57092 14.6435L5.79925 15.5716L7.38796 18.6045L9.15962 17.6765ZM5.46179 12.5344L2.42882 10.9457L1.5008 12.7174L4.53378 14.3061L5.46179 12.5344ZM2.47278 9.50704L16.9607 3.01244L16.1426 1.18742L1.65467 7.68202L2.47278 9.50704ZM2.42882 10.9457C1.83719 10.6358 1.86333 9.78024 2.47278 9.50704L1.65467 7.68202C-0.478386 8.63822 -0.569892 11.6327 1.5008 12.7174L2.42882 10.9457ZM7.57092 14.6435C7.09883 13.7423 6.36305 13.0065 5.46179 12.5344L4.53378 14.3061C5.07453 14.5893 5.516 15.0308 5.79925 15.5716L7.57092 14.6435ZM10.5983 17.6326C10.3251 18.242 9.46952 18.2681 9.15962 17.6765L7.38796 18.6045C8.4726 20.6752 11.4671 20.5837 12.4233 18.4507L10.5983 17.6326ZM18.9179 3.96271C19.7072 2.20191 17.9034 0.398092 16.1426 1.18742L16.9607 3.01244C16.9962 2.99654 17.0123 2.99985 17.0189 3.00126C17.0317 3.00396 17.0522 3.01281 17.0724 3.03298C17.0925 3.05315 17.1014 3.07362 17.1041 3.0864C17.1055 3.09304 17.1088 3.10912 17.0929 3.1446L18.9179 3.96271Z"
                fill="#141029"
                fill-opacity="0.8"
              />
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
            <l-tile-layer :url="MapOptions[4].Url"></l-tile-layer>

            <l-polygon
              v-if="showLayer"
              :lat-lngs="polygon.latlngs"
              :color="polygon.color"
              @click="showLayerDescription()"
            ></l-polygon>

            <div class="Markers-area">
              <div class="Marker-container">
                <CustomMapMarker
                  v-for="item in Address"
                  :key="item"
                  :Adres="item"
                  :showRadius="showRadius"
                ></CustomMapMarker>
                <l-marker :lat-lng="[latt, longg]" v-if="showUserPos">
                  <l-popup>Вы здесь</l-popup>
                </l-marker>
              </div>
            </div>
          </l-map>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import fdInput from "../components/UI/fd-input.vue";
import { mapGetters } from "vuex";
import fdButton from "../components/UI/fd-button.vue";
import radioButton from "../components/UI/radio-button.vue";
import vClickOutside from "v-click-outside";

export default {
  layout: "map",

  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    fdInput,
    fdButton,
    radioButton,
  },

  methods: {
    foo() {
      alert("123");
    },
    createUserMarker() {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    },
    showPosition(position) {
      this.latt = position.coords.latitude;
      this.longg = position.coords.longitude;
      this.showUserPos = !this.showUserPos;
    },

    getTileValue(value) {
      this.TileValue = value;
      if (this.TileValue) {
        this.MapOptions[4].Url = this.tile[this.TileValue].Tile;
      } else {
        this.MapOptions[4].Url = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
      }
    },

    getViewRadValue(value) {
      this.RadValue = value;
      if ((this.RadValue = 1)) {
        this.showRadius = !this.showRadius;
      }
    },

    getViewLayerValue(value) {
      this.LayValue = value;
      if ((this.LayValue = 1)) {
        this.showLayer = !this.showLayer;
      }
    },

    ChangeCenter() {
      if (this.Coordinate) {
        this.MapOptions[3].Center = this.Coordinate;
      } else {
        this.MapOptions[3].Center = this.coordinate;
      }
      if (this.valueInput == "Odintsovo") {
        this.showLayer = true;
      } else {
        this.showLayer = false;
      }
    },
    showLayerDescription() {
      this.$emit("LayerDescription");
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

    onClickOutsideTile(event) {
      // this.showSettingsTile = false;
    },

    onClickOutsideView(event) {
      // this.showSettingsView = false;
    },
    hideTopShelfTools() {
      this.showInput = !this.showInput;
      this.showTopFilters = !this.showTopFilters;
      this.showInputClosed = !this.showInputClosed;
      this.showInputActive = !this.showInputActive;
    },
  },

  data() {
    return {
      latt: null,
      longg: null,

      TileValue: "",
      ViewLayerValue: "",
      ViewRadValue: "",
      UserCoord: false,
      RadValue: "",

      iconUrlCustom: require("../assets/img/Marker.png"),
      valueInput: "",
      Address: [
        [55.678, 37.2413],
        [55.668, 37.279],
        [55.686, 37.284],
      ],

      showDescr: false,
      showSettingsTile: false,
      showRadius: false,
      showSettingsView: false,
      showUserPos: false,
      showLayer: false,
      showLayoutDescription: false,
      showInput: false,
      showTopFilters: true,
      showInputClosed: true,
      showInputActive: false,

      MapOptions: [
        { zoom: 13 },
        { MaxZoom: 22 },
        { MinZoom: 10 },
        { Center: [55.673, 37.2733] },
        { Url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png" },
      ],

      tile: [
        { Tile: "http://{s}.tile.osm.org/{z}/{x}/{y}.png" }, //OSM
        {
          Tile: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        }, //Satellite
        {
          Tile: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
        }, //StadiamapsBright
        {
          Tile: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
        }, //Dark
      ],
      polygon: {
        latlngs: [
          [55.657595, 37.232727],
          [55.658888, 37.232706],
          [55.659013, 37.233039],
          [55.659902, 37.233092],
          [55.660732, 37.23857],
          [55.66127, 37.238681],
          [55.662875, 37.245219],
          [55.663764, 37.244071],
          [55.665889, 37.250655],
          [55.666597, 37.249263],
          [55.667405, 37.24485],
          [55.66796, 37.243845],
          [55.666563, 37.226464],
          [55.669916, 37.224666],
          [55.671036, 37.222979],
          [55.672723, 37.222294],
          [55.675708, 37.23167],
          [55.674178, 37.233538],
          [55.675016, 37.23764],
          [55.678604, 37.243322],
          [55.680736, 37.241849],
          [55.685081, 37.245037],
          [55.687708, 37.248039],
          [55.688478, 37.249279],
          [55.688921, 37.245977],
          [55.686621, 37.243625],
          [55.687691, 37.240393],
          [55.68902, 37.241019],
          [55.690494, 37.243226],
          [55.689547, 37.246053],
          [55.689458, 37.247116],
          [55.689776, 37.249499],
          [55.691631, 37.246465],
          [55.69252, 37.248623],
          [55.691896, 37.25074],
          [55.690138, 37.253715],
          [55.690736, 37.258132],
          [55.689888, 37.265035],
          [55.688975, 37.268882],
          [55.687002, 37.272187],
          [55.687065, 37.273879],
          [55.690887, 37.272804],
          [55.691316, 37.275399],
          [55.691766, 37.276493],
          [55.692342, 37.27918],
          [55.686847, 37.281827],
          [55.686777, 37.282472],
          [55.689134, 37.291574],
          [55.690618, 37.290708],
          [55.693616, 37.293794],
          [55.69453, 37.296462],
          [55.694248, 37.302329],
          [55.693266, 37.302539],
          [55.692422, 37.30379],
          [55.691945, 37.306187],
          [55.690653, 37.308538],
          [55.690602, 37.310313],
          [55.688391, 37.310495],
          [55.687609, 37.30983],
          [55.687024, 37.310058],
          [55.687104, 37.31056],
          [55.684519, 37.312762],
          [55.68351, 37.310806],
          [55.682411, 37.310937],
          [55.681962, 37.311214],
          [55.682157, 37.312502],
          [55.683773, 37.319081],
          [55.684697, 37.321376],
          [55.686188, 37.324147],
          [55.691561, 37.320986],
          [55.691948, 37.322267],
          [55.692193, 37.322573],
          [55.692775, 37.322841],
          [55.693305, 37.322729],
          [55.695366, 37.321406],
          [55.695723, 37.319579],
          [55.697734, 37.317973],
          [55.698039, 37.31709],
          [55.699009, 37.317168],
          [55.700653, 37.317825],
          [55.702824, 37.317706],
          [55.707714, 37.316749],
          [55.708021, 37.330373],
          [55.70166, 37.326511],
          [55.701664, 37.326193],
          [55.700007, 37.325131],
          [55.697402, 37.324235],
          [55.695538, 37.334874],
          [55.694454, 37.333253],
          [55.693433, 37.334169],
          [55.693815, 37.337152],
          [55.685986, 37.328855],
          [55.68414, 37.333949],
          [55.683196, 37.333545],
          [55.682426, 37.334737],
          [55.681991, 37.334022],
          [55.682832, 37.33246],
          [55.681687, 37.331258],
          [55.683108, 37.326895],
          [55.685583, 37.329466],
          [55.685705, 37.329031],
          [55.682999, 37.326243],
          [55.681495, 37.331208],
          [55.680261, 37.334128],
          [55.676267, 37.345737],
          [55.678841, 37.348907],
          [55.677635, 37.353372],
          [55.675354, 37.357002],
          [55.673241, 37.353562],
          [55.672683, 37.348848],
          [55.668834, 37.348289],
          [55.664924, 37.344554],
          [55.667099, 37.335361],
          [55.668043, 37.335723],
          [55.667084, 37.342332],
          [55.670498, 37.342804],
          [55.670862, 37.341099],
          [55.670826, 37.339757],
          [55.670256, 37.339554],
          [55.670662, 37.33655],
          [55.671663, 37.336828],
          [55.67199, 37.337204],
          [55.672815, 37.335284],
          [55.67279, 37.333588],
          [55.673809, 37.333352],
          [55.673785, 37.332269],
          [55.674427, 37.331239],
          [55.674305, 37.330988],
          [55.674434, 37.329799],
          [55.675035, 37.329581],
          [55.676461, 37.32653],
          [55.677121, 37.327251],
          [55.676747, 37.322919],
          [55.673456, 37.322765],
          [55.672818, 37.32468],
          [55.670814, 37.324168],
          [55.67091, 37.31968],
          [55.67339, 37.319763],
          [55.673708, 37.317777],
          [55.674235, 37.317698],
          [55.674372, 37.317437],
          [55.674801, 37.317795],
          [55.674993, 37.317294],
          [55.675138, 37.315421],
          [55.677113, 37.316813],
          [55.677607, 37.314655],
          [55.680195, 37.309785],
          [55.681168, 37.308559],
          [55.680484, 37.305329],
          [55.67681, 37.305757],
          [55.673173, 37.305423],
          [55.672964, 37.305717],
          [55.672338, 37.30536],
          [55.670327, 37.303163],
          [55.67098, 37.301953],
          [55.671327, 37.30227],
          [55.671659, 37.301189],
          [55.671556, 37.301092],
          [55.671741, 37.300485],
          [55.671123, 37.299838],
          [55.671591, 37.297265],
          [55.670233, 37.296085],
          [55.66872, 37.295827],
          [55.665421, 37.295672],
          [55.664394, 37.295372],
          [55.663505, 37.296236],
          [55.663463, 37.29581],
          [55.662937, 37.295095],
          [55.662957, 37.294414],
          [55.663307, 37.293803],
          [55.661675, 37.289296],
          [55.660876, 37.290093],
          [55.659324, 37.289649],
          [55.658092, 37.287529],
          [55.655615, 37.289704],
          [55.655502, 37.289344],
          [55.65059, 37.262615],
          [55.649984, 37.258427],
          [55.649113, 37.254187],
          [55.648121, 37.250655],
          [55.648534, 37.250005],
          [55.648577, 37.248527],
          [55.65124, 37.243086],
          [55.651621, 37.241742],
          [55.652367, 37.240154],
          [55.654228, 37.238897],
          [55.653414, 37.235861],
          [55.654021, 37.234943],
          [55.65379, 37.23445],
          [55.654106, 37.233956],
          [55.653719, 37.232882],
          [55.653727, 37.225273],
          [55.657902, 37.225295],
          [55.657058, 37.236349],
          [55.654633, 37.23863],
          [55.656733, 37.241269],
          [55.656933, 37.241805],
          [55.656303, 37.242588],
          [55.657059, 37.244735],
          [55.657667, 37.243925],
          [55.658133, 37.245604],
          [55.658442, 37.247581],
          [55.658673, 37.247516],
          [55.658465, 37.245694],
          [55.659654, 37.244579],
          [55.659172, 37.243393],
          [55.659296, 37.242806],
          [55.659987, 37.242989],
          [55.660097, 37.241604],
          [55.659036, 37.241255],
          [55.658165, 37.239296],
          [55.657934, 37.240209],
          [55.657438, 37.240873],
          [55.656897, 37.240196],
          [55.657135, 37.238661],
        ],
        color: "#1E90FF",
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
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/fonts";
.activeIconMap{
  path{
    fill:#9B42F5;
  }
}
.activeIconMapView{
  g{
    path{
    fill:#9B42F5;
  }
  }
}
.SettingsMap {
  max-width: 240px;
  min-width: 240px;
  height: fit-content;
  background-color: rgb(246, 246, 246);
  position: absolute;
  z-index: 30;
  top: 0;
  right: 0;
  margin: 45px 30px;
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

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
  margin-top: 200px;
  margin-right: 30px;
  right: 0;
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
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  &__inputClosed {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(255, 255, 255);
      border-radius: 5px;
      min-height: 48px;
      min-width: 48px;
      margin-left: 90px;
      margin-right: 30px;
      &:hover {
        color: blueviolet;
        svg {
          fill: blueviolet;
        }
      }
    }
  }
  &__inputActive {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border-radius: 5px;
      min-height: 48px;
      min-width: 48px;
      margin-left: 10px;
      &:hover {
        color: blueviolet;
        svg {
          fill: blueviolet;
        }
      }
    }
  }
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
  padding: 0px 20px 65px 20px;
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

.SettingsMap-View {
  display: flex;
  flex-direction: column;
  grid-gap: 15px;

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
  }
}
</style>
