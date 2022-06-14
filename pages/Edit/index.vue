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

    <h5>{{ chek }}</h5>
  </div>
</template>

<script>
import fdInput from "@/components/UI/fd-input.vue";
import { mapActions } from "vuex";

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

  computed: {
    chek() {
      if (!this.$store.getters["GetChangestatus"]) {
        console.log("change");
        this.addInfo([
          this.platformInfo.address,
          this.platformInfo.quantityOfDroneports,
          this.platformInfo.quantityOfPostamats,
        ]);
      }
    },
  },

  methods: {
    ...mapActions("dronoports", ["addPlatform", "deletePlatform"]),
    addInfo(value) {
      if (value.includes(undefined) || value.includes("")) {
        this.modalError = true;
        setTimeout(() => {
          this.modalError = false;
        }, 2000);
      } else {
        let object = {
          id: 10,
          address: value[0],
          dronoport: value[1],
          postamat: value[2],
          infrastructure: [],
        };
        // console.log("f " + object.address);
        this.addPlatform(object);
      }
    },
    deletePoint(value) {
      //console.log(value.id);
      this.deletePlatform(value.id);
    },
    removeObjProperty(obj, prop_name) {
      const arr = Object.entries(obj);
      const filtered_arr = arr.filter(function ([key, value]) {
        return key != prop_name;
      });
      const filteredObj = Object.fromEntries(filtered_arr);
      // console.log(filteredObj);
      return filteredObj;
    },
  },
};
</script>

<style lang="scss" scoped></style>
