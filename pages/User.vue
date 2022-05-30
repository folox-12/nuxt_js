<template>
  <div class="page">
    <div class="card">
      <div class="card__main card-main">
        <div class="card-main__title">
          <h2>{{ $t("user-information-title") }}</h2>
        </div>
        <Tablecard
          :title="title"
          :description="description"
          @changeInfo="changeData"
        ></Tablecard>
      </div>
    </div>
  </div>
</template>

<script>
import Tablecard from "@/components/TableCard/TableCard.vue";
export default {
  layout: "card",
  components: {
    Tablecard,
  },

  data() {
    return {
      title: ["name-table-card", "surname-table-card", "birth-date-table-card"],
      description: ["Иван", "Иванов", "25.07.2003"],
    };
  },
  headerData: {
    title: "user-profile-title-page",
  },
  methods: {
    changeData(number, value) {
      this.description[number] = value;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/card-area";
</style>
