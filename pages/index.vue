<template>
  <div class="Test">
    <!-- <div class="save-btn">
      <button @click="showModal = true">Фото</button>
      <ModalWindow v-show="showModal" @close-modal="showModal = false" />
      <selectComponent />
    </div> -->
    <filters
      :view-format="'table'"
      :data="dataAboutDronoport"
      :itemsOnPage="4"
      :placeHolder="placeHolder"
      :rightSideView="[
        { name: 'Options', img: 'ico/settings.svg' },
        { name: 'Filters', img: 'ico/filter.svg' },
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
        }"
      >
        <div class="left-main-content">
          <tableView
            v-if="viewFormat === 'table'"
            :tableDescription="tableDescription"
            :tableTitle="tableTitle"
            :pageNumber="pageNumber"
            :itemsOnPage="itemsOnPage"
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
            <div class="buttons" v-if="typeViewOfRightSide === 'Options'">
              <button @click="switchTypeOfView('map')">
                <img src="/ico/map.svg" alt="#" />
              </button>
              <button @click="switchTypeOfView('table')">
                <img src="/ico/table.svg" alt="#" />
              </button>
            </div>
            <div class="filter" v-else-if="typeViewOfRightSide === 'Filters'">
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

import { mapGetters } from "vuex";
export default {
  layout: "map",
  components: {
    ModalWindow,
    selectComponent,
    filters,
    tableView,
    Map,
    pagination,
    rightSide,
  },
  data() {
    return {
      placeHolder: "Введите адрес",
      showModal: false,
    };
  },
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
</style>
