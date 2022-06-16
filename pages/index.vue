<template>
  <div class="Test">
    <filters
      :view-format="'table'"
      :data="dataAboutDronoport"
      :itemsOnPage="5"
      :icon="'search'"
      :placeHolder="placeHolder"
      :rightSideView="[
        { name: 'Filters', img: 'filter' },
        { name: 'Options', img: 'setting' },
      ]"
    >
      <template
        #default="{
          viewFormat,
          showRightSide,
          typeViewOfRightSide,
          switchTypeOfView,
          tableDescription,
          tableTitle,
          itemsOnPage,
          lenghtSearchedData,
          onChangePage,
          UpdatedPageNumber,
          pageNumber,
          getNameForSort,
          updateItemsOnPage,
          updateFilter,
        }"
      >
        <tableView
          v-if="viewFormat === 'table'"
          :tableDescription="tableDescription"
          :tableTitle="tableTitle"
          :pageNumber="pageNumber"
          :itemsOnPage="itemsOnPage"
          @onSorted="getNameForSort"
        >
          <pagination
            :itemsOnPage="itemsOnPage"
            :countOfallDronoport="lenghtSearchedData"
            @UpdatedPageSlice="onChangePage"
            @UpdatedPageNumber="UpdatedPageNumber"
          />
        </tableView>
        <Map
          v-else-if="viewFormat === 'map'"
          :coordinate="Coordinate"
          @LayerDescription="funcLayerDescription"
        ></Map>
        <keep-alive>
          <rightSide
            v-if="showRightSide"
            class="option"
            :title="typeViewOfRightSide"
            @changeViewFormat="switchTypeOfView"
          >
            <div
              class="right-side__option right-side-option"
              v-show="typeViewOfRightSide === 'Options'"
            >
              <div class="right-side-option__content">
                <spoiler :title="$t('representation-type')">
                  <div
                    class="right-side-option__item"
                    :class="{
                      active: viewFormat === 'map',
                    }"
                    @click="switchTypeOfView('map')"
                  >
                    <button>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5853 2.40348L10.0852 0.233687C9.98105 0.183405 9.86614 0.157227 9.74963 0.157227C9.63311 0.157227 9.5182 0.183405 9.414 0.233687L5.25 2.24219L1.08525 0.233687C0.970878 0.178572 0.843793 0.152569 0.716067 0.158148C0.588341 0.163726 0.464215 0.200701 0.355477 0.26556C0.246739 0.330419 0.157 0.421009 0.0947843 0.528725C0.0325683 0.636442 -5.95123e-05 0.757709 8.14884e-08 0.881008V10.2834C8.14884e-08 10.5575 0.1605 10.8078 0.41475 10.9308L4.91475 13.1005C5.01895 13.1508 5.13386 13.177 5.25037 13.177C5.36689 13.177 5.4818 13.1508 5.586 13.1005L9.75 11.092L13.9147 13.0998C14.0288 13.1555 14.1558 13.1818 14.2835 13.1764C14.4112 13.1709 14.5352 13.1338 14.6437 13.0687C14.865 12.9364 15 12.7042 15 12.4532V3.0508C15 2.77668 14.8395 2.52643 14.5853 2.40348V2.40348ZM6 3.49777L9 2.05125V9.83645L6 11.283V3.49777ZM1.5 2.05125L4.5 3.49777V11.283L1.5 9.83645V2.05125ZM13.5 11.283L10.5 9.83645V2.05125L13.5 3.49777V11.283Z"
                        />
                      </svg>
                    </button>
                    <span>{{ $t("Map") }}</span>
                  </div>
                  <div
                    class="right-side-option__item"
                    :class="{
                      active: viewFormat === 'table',
                    }"
                    @click="switchTypeOfView('table')"
                  >
                    <button>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8558 11.1231H4.32692C4.2476 11.1231 4.18269 11.1868 4.18269 11.2646V12.2553C4.18269 12.3331 4.2476 12.3968 4.32692 12.3968H14.8558C14.9351 12.3968 15 12.3331 15 12.2553V11.2646C15 11.1868 14.9351 11.1231 14.8558 11.1231ZM14.8558 1.07519H4.32692C4.2476 1.07519 4.18269 1.13888 4.18269 1.21671V2.20736C4.18269 2.28519 4.2476 2.34888 4.32692 2.34888H14.8558C14.9351 2.34888 15 2.28519 15 2.20736V1.21671C15 1.13888 14.9351 1.07519 14.8558 1.07519ZM14.8558 6.09916H4.32692C4.2476 6.09916 4.18269 6.16284 4.18269 6.24068V7.23132C4.18269 7.30915 4.2476 7.37284 4.32692 7.37284H14.8558C14.9351 7.37284 15 7.30915 15 7.23132V6.24068C15 6.16284 14.9351 6.09916 14.8558 6.09916ZM2.16346 10.274H0.0721154C0.0324519 10.274 0 10.3058 0 10.3448V10.9462C0 10.9851 0.0324519 11.017 0.0721154 11.017H1.3774V11.3796H0.733774C0.694111 11.3796 0.661659 11.4115 0.661659 11.4504V12.0518C0.661659 12.0908 0.694111 12.1226 0.733774 12.1226H1.3774V12.5029H0.0721154C0.0324519 12.5029 0 12.5348 0 12.5737V13.1752C0 13.2141 0.0324519 13.2459 0.0721154 13.2459H2.16346C2.20313 13.2459 2.23558 13.2141 2.23558 13.1752V10.3448C2.23558 10.3058 2.20313 10.274 2.16346 10.274ZM0.0721154 1.00443H0.757212V3.12724C0.757212 3.16615 0.789663 3.198 0.829327 3.198H1.55048C1.59014 3.198 1.6226 3.16615 1.6226 3.12724V0.367594C1.6226 0.289758 1.55769 0.226074 1.47837 0.226074H0.0721154C0.0324519 0.226074 0 0.257916 0 0.296834V0.933675C0 0.972593 0.0324519 1.00443 0.0721154 1.00443ZM2.16346 5.25004H0.0721154C0.0324519 5.25004 0 5.28188 0 5.3208V5.95764C0 5.99656 0.0324519 6.0284 0.0721154 6.0284H1.30529L0.0378605 7.40291C0.0139555 7.42926 0.000515912 7.46317 0 7.49844V8.1512C0 8.19012 0.0324519 8.22196 0.0721154 8.22196H2.16346C2.20313 8.22196 2.23558 8.19012 2.23558 8.1512V7.51436C2.23558 7.47544 2.20313 7.4436 2.16346 7.4436H0.930289L2.19772 6.06908C2.22162 6.04274 2.23506 6.00883 2.23558 5.97356V5.3208C2.23558 5.28188 2.20313 5.25004 2.16346 5.25004Z"
                        />
                      </svg>
                    </button>
                    <span>{{ $t("Table") }}</span>
                  </div>
                </spoiler>
                <spoiler
                  :title="$t('representation-settings')"
                  v-if="viewFormat === 'table'"
                >
                  <button
                    class="count"
                    @click="updateItemsOnPage(5)"
                    :class="{ active: itemsOnPage == 5 }"
                  >
                    5
                  </button>
                  <button
                    class="count"
                    @click="updateItemsOnPage(10)"
                    :class="{ active: itemsOnPage == 10 }"
                  >
                    10
                  </button>
                </spoiler>
              </div>
            </div>
            <div
              class="right-side__filter"
              v-show="typeViewOfRightSide === 'Filters'"
            >
              <spoiler :title="$t('droneport-table-title')">
                <radioButton
                  :valuesRadio="{
                    1: 1,
                    5: 5,
                  }"
                  :name="'dronoport'"
                  :closeIconForInput="true"
                  :custom="true"
                  @radioValue="updateFilter"
                />
              </spoiler>
              <spoiler :title="$t('postamat-title-page')">
                <radioButton
                  :valuesRadio="{ 1: 1, 2: 2 }"
                  :custom="true"
                  :name="'postamat'"
                  @radioValue="updateFilter"
                />
              </spoiler>
              <spoiler :title="$t('city-filter')" v-if="viewFormat === 'map'">
                <radioButton
                  @click="GetValueCheckbox()"
                  :valuesRadio="getCoordinate"
                  @radioValue="getFilterForMapCity"
                />
              </spoiler>
            </div>
          </rightSide>
        </keep-alive>
      </template>
    </filters>
    <div class="Layout-Description" v-if="showLayerDescription">
      <div class="Layout-Description-head">
        <div class="Layout-Description-head__title">
          <h1>Информация по выбранным слоям</h1>
        </div>
        <div class="Layout-Description-head__close">
          <button @click="showLayerDescription = false">
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
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div class="Layout-Description-container">
        <div
          class="Layout-Description-container__cityBlock Layout-Description-container-cityBlock"
        >
          <div class="cityBlock-title">
            <h1>Город Одинцово</h1>
          </div>
          <div class="cityBlock-container">
            <h2>Площадки</h2>
            <span> - Северная улица, 5к2</span>
            <span> - Акуловская улица, 1А</span>
            <span> - б-р Маршала Крылова, 20</span>
            <h2>Центр</h2>
            <span>55,678 N</span>
            <span>37,2777 E</span>
          </div>
          <div class="cityBlock-footer">
            <fd-button
              :type="'white'"
              :text="'Показать площадки'"
              @click="showPlatforDescr = true"
            ></fd-button>
          </div>
        </div>
      </div>
      <div
        class="Layout-Description-container__platfomBlock Layout-Description-container-platfomBlock"
        v-if="showPlatforDescr"
      >
        <div class="platfomBlock__title">
          <h1>Посадочная площадка №1</h1>
        </div>
        <div class="platfomBlock__container">
          <h2>Адрес</h2>
          <span>г. Одинцово, б-р Маршала Крылова, 20</span>
          <h2>Регистрационный номер</h2>
          <span>450n-144-vc67</span>
          <h2>Дата создания</h2>
          <span>08.02.22</span>
          <h2>Рабочая температура(C°)</h2>
          <span>от -10 до 30</span>
        </div>
        <div class="platfomBlock__footer">
          <nuxt-link no-prefetch :to="localePath('/Platform1')">
            <fd-button :type="'white'" :text="'Открыть'"></fd-button>
          </nuxt-link>
        </div>
      </div>
      <!-- <div
        class="Layout-Description-container__platfomBlock Layout-Description-container-platfomBlock"
        v-if="showPlatforDescr"
      >
        <div class="platfomBlock__title">
          <h1>Посадочная площадка №1</h1>
        </div>
        <div class="platfomBlock__container">
          <h2>Адрес</h2>
          <span>г. Одинцово, б-р Маршала Крылова, 20</span>
          <h2>Регистрационный номер</h2>
          <span>450n-144-vc67</span>
          <h2>Дата создания</h2>
          <span>08.02.22</span>
          <h2>Рабочая температура(C°)</h2>
          <span>от -10 до 30</span>
        </div>
        <div class="platfomBlock__footer">
          <nuxt-link no-prefetch :to="localePath('/Platform1')">
            <fd-button :type="'white'" :text="'Открыть'"></fd-button>
          </nuxt-link>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import ModalWindow from "../components/ModalWindow.vue";
import selectComponent from "../components/selectComponent.vue";
import filters from "../components/filters";
import rightSide from "../components/right-side.vue";
import tableView from "../components/table-view.vue";
import Map from "../components/Map.vue";
import pagination from "../components/pagination.vue";
import spoiler from "../components/UI/spoiler.vue";
import radioButton from "../components/UI/radio-button.vue";
import fdButton from "../components/UI/fd-button.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    ModalWindow,
    selectComponent,
    filters,
    tableView,
    Map,
    pagination,
    rightSide,
    spoiler,
    radioButton,
    fdButton,
  },
  data() {
    return {
      getCheckboxValue: "",
      placeHolder: "search-by-address",
      showModal: false,
      showPlatforDescr: false,
      showLayerDescription: false,
      Coordinate: [55.673, 37.2733],
    };
  },

  headerData: {
    title: "landing-areas-list-title-page",
    link: "/Edit",
  },
  created() {},
  computed: {
    ...mapGetters("dronoports", {
      dataAboutDronoport: "getAllDronoport",
    }),
    ...mapGetters("Map", ["getCoordinate"]),
  },
  methods: {
    funcLayerDescription() {
      this.showLayerDescription = !this.showLayerDescription;
    },
    GetValueCheckbox() {
      alert("hello");
    },
    getFilterForMapCity(value) {
      this.Coordinate = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.count {
  width: 30px;
  height: 30px;
  margin-right: 15px;
  border-radius: 20px;
}
.count.active {
  background-color: rgba(155, 66, 245, 1);
  color: #fff;
}
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.right-side-option {
  &__item {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    &:last-child() {
      margin-bottom: 0;
    }
    cursor: pointer;
    button {
      display: flex;
      width: 30px;
      height: 30px;
      justify-content: center;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      align-items: center;
      justify-content: center;
      svg {
        fill: grey;
      }
    }
    &.active {
      button {
        background-color: rgba(155, 66, 245, 1);
        svg {
          fill: #fff;
        }
      }
    }
  }
}
.Layout-Description {
  h1 {
    font-weight: 600;
    font-size: 22px;
    margin-right: 16px;
    color: black;
    display: flex;
    justify-content: center;
  }
  h2 {
    font-weight: 600;
    font-size: 18px;
    margin-right: 16px;
    color: black;
  }
  span {
    font-size: 16px;
    font-weight: 500;
  }
  overflow-y: scroll;
  background-color: white;
  width: 25%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  padding: 0px 20px 0px 20px;
  .Layout-Description-head {
    height: 200px;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    display: flex;
    position: fixed;
    width: 322px;
    line-height: 30px;
    background-color: rgb(255, 255, 255);
    padding: 0px 0px 0px 20px;
    height: 100px;

    .Layout-Description-head__title {
      display: flex;
      justify-items: center;
    }
    .Layout-Description-head__close {
      top: 0;
      right: 0;
      display: flex;
      justify-content: end;
      button {
        background-color: inherit;
      }
    }
  }
  .Layout-Description-container {
    background-color: rgb(48, 121, 232, 0.2);
    border: 1px dashed #3079e8;
    height: fit-content;
    padding: 20px;
    margin-top: 120px;
    &-cityBlock {
      .cityBlock-container {
        height: fit-content;
        margin-top: 20px;
        margin-bottom: 20px;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .cityBlock-footer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &-platfomBlock {
      border: 1px dashed rgb(130, 130, 130);
      margin-top: 40px;
      padding: 20px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      background-color: rgba(232, 232, 232, 0.2);
      border-radius: 20px;
      .platfomBlock__title {
        margin-right: 16px;
        justify-content: center;
        align-items: center;
        display: flex;
      }
      .platfomBlock__container {
        height: fit-content;
        margin-top: 20px;
        margin-bottom: 20px;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .platfomBlock__footer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
::-webkit-scrollbar {
  width: 5px;
  height: 10px;
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
