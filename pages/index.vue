<template>
  <div class="Test">
    <filters
      :view-format="'table'"
      :data="dataAboutDronoport"
      :itemsOnPage="4"
      :placeHolder="placeHolder"
      :rightSideView="[
        { name: 'Filters', img: 'ico/filter.svg' },
        { name: 'Options', img: 'ico/settings.svg' },
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
        }"
      >
        <div class="left-main-content">
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
          <div v-else-if="viewFormat === 'map'">
            <Map></Map>
          </div>
        </div>
        <div class="right-main-content" v-if="showRightSide">
          <rightSide
            class="option"
            style="background-color: #fff display: flex; flex-wrap: wrap; gap: 10px"
            :title="typeViewOfRightSide"
            @changeViewFormat="switchTypeOfView"
          >
            <div
              class="right-side__option right-side-option"
              v-if="typeViewOfRightSide === 'Options'"
            >
              <div class="right-side-option__content">
                <spoiler :title="'Вид представления'">
                  <div
                    class="right-side-option__item"
                    :class="{
                      active: viewFormat === 'map',
                    }"
                    @click="switchTypeOfView('map')"
                  >
                    <button>
                      <img src="/ico/map.svg" alt="#" />
                    </button>
                    <span>Карта</span>
                  </div>
                  <div
                    class="right-side-option__item"
                    :class="{
                      active: viewFormat === 'table',
                    }"
                    @click="switchTypeOfView('table')"
                  >
                    <button>
                      <img src="/ico/table.svg" alt="#" />
                    </button>
                    <span>Таблица</span>
                  </div>
                </spoiler>
              </div>
            </div>
            <div
              class="right-side__filter"
              v-else-if="typeViewOfRightSide === 'Filters'"
            >
              filters
            </div>
          </rightSide>
        </div>
      </template>
    </filters>
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
import spoiler from "../components/spoiler.vue";

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
  },
  data() {
    return {
      placeHolder: "Введите адрес",
      showModal: false,
    };
  },
  headerData: {
    title: "landing-areas-list-title-page",
  },
  created() {},
  computed: {
    ...mapGetters("dronoports", {
      dataAboutDronoport: "getAllDronoport",
    }),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.right-main-content {
  flex: 0 0 35%;
}
.left-main-content {
  flex: 1 1 auto;
}
.right-side-option {
  &__content {
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    flex-wrap: wrap;
    gap: 15px;
  }
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
      img {
      }
    }
    &.active {
      button {
        background-color: rgba(155, 66, 245, 1);
      }
    }
  }
}
</style>
