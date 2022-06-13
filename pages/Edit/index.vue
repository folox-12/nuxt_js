<template>
  <div class="edit-area">
    <fdInput
      :closeIcon="true"
      :type="'edit'"
      :placeholder="'Address'"
      v-model="platformInfo.address"
    ></fdInput>

    <fdInput
      :closeIcon="true"
      :type="'edit'"
      :placeholder="'Droneport'"
      v-model="platformInfo.quantityOfDroneports"
    ></fdInput>

    <fdInput
      :closeIcon="true"
      :type="'edit'"
      :placeholder="'Postamat'"
      v-model="platformInfo.quantityOfPostamats"
    ></fdInput>
  </div>
</template>

<script>
import fdInput from "@/components/UI/fd-input.vue";

export default {
  data() {
    return {
      platformInfo: {
        address: "",
        quantityOfDroneports: "",
        quantityOfPostamats: "",
      },
    };
  },

  components: {
    fdInput,
  },

  headerData: {
    title: "Edit list of landing areas",
    link: "/",
  },

  computed: {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
