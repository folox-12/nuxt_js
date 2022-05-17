<template>
  <div class="jl">
    <!-- <div class="save-btn">
      <button @click="showModal = true">Фото</button>
      <ModalWindow v-show="showModal" @close-modal="showModal = false" />
      <selectComponent />
    </div> -->
    <filters :view-formats="['table', 'map']" :view-fromat="table">
      <template #default="viewFormat">
        <Table v-if="viewFormat === 'table'">
          <pagintaion :countItemInTable="countItemInTable" />
        </Table>
        <div v-else-if="viewFormat === 'map'"></div>
      </template>
    </filters>
  </div>
</template>

<script>
import ModalWindow from "../components/ModalWindow.vue";
import selectComponent from "../components/selectComponent.vue";
import filters from "../components/filters";
import Table from "../components/Table/Table.vue";
import pagination from "../components/pagination.vue";
export default {
  layout: "map",
  components: { ModalWindow, selectComponent, filters, Table, pagination },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style></style>
