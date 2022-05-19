<template>
  <div class="jl">
    <!-- <div class="save-btn">
      <button @click="showModal = true">Фото</button>
      <ModalWindow v-show="showModal" @close-modal="showModal = false" />
      <selectComponent />
    </div> -->
    <filters
      :view-format="'table'"
      :data="dataAboutDronoport"
      :itemsOnPage="5"
      :placeHolder="placeHolder"
    >
      <template
        #default="{
          viewFormat,
          showOption,
          switchTypeOfView,
          tableDescription,
          tableTitle,
          itemsOnPage,
          lenghtSearchedData,
          onChangePage,
        }"
      >
        <div class="left-main-content">
          <tableView
            v-if="viewFormat === 'table'"
            :tableDescription="tableDescription"
            :tableTitle="tableTitle"
          >
            <pagination
              :itemsOnPage="itemsOnPage"
              :countOfallDronoport="lenghtSearchedData"
              @UpdatedPage="onChangePage"
            />
          </tableView>
          <div v-else-if="viewFormat === 'map'">
            <Map></Map>
          </div>
        </div>
        <div class="right-main-content">
          <rightSide
            class="option"
            v-if="showOption"
            style="background-color: #fff display: flex; flex-wrap: wrap; gap: 10px"
            @changeViewFormat="switchTypeOfView"
          >
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
  flex: 0 0 20%;
}
.left-main-content {
  flex: 1 0 80%;
}
</style>
