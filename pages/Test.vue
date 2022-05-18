<template>
  <div class="jl">
    <!-- <div class="save-btn">
      <button @click="showModal = true">Фото</button>
      <ModalWindow v-show="showModal" @close-modal="showModal = false" />
      <selectComponent />
    </div> -->
    <filters
      :view-formats="['table', 'map']"
      :view-format="'table'"
      @updateValue="updateValue"
    >
      <template #default="{ viewFormat, showOption, switchTypeOfView }">
        <rightSide
          class="option"
          v-if="showOption"
          style="background-color: #fff display: flex; flex-wrap: wrap; gap: 10px"
          @changeViewFormat="switchTypeOfView"
        >
        </rightSide>
        <tableView v-if="viewFormat === 'table'">
          <pagintaion :countItemInTable="countItemInTable" />
        </tableView>
        <div v-else-if="viewFormat === 'map'">Карта</div>
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
import pagination from "../components/pagination.vue";
export default {
  layout: "map",
  components: {
    ModalWindow,
    selectComponent,
    filters,
    tableView,
    pagination,
    rightSide,
  },
  computed: {},
  data() {
    return {
      showModal: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style></style>
