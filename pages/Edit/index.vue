<template>
  <div class="edit-area">
    <TitleOfPage
      :headerData="headerData"
      v-if="headerData"
      @click="ChangeEditStatus"
      :buttonValue="$t('accept-edit-btn')"
    />
    <div class="plate">
      <fdInput
        :closeIcon="true"
        :type="'edit'"
        :placeholder="'address-edit'"
        v-model="platformInfo.address"
      ></fdInput>
      <div class="infr-holder">
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

        <fdButton
          :text="'добавить и перейти'"
          :type="'white'"
          @click="AddAndGoClick"
        />
      </div>
    </div>
    <!-- <h5>{{ this.len }}</h5> -->
  </div>
</template>

<script>
import fdInput from "@/components/UI/fd-input.vue";
import TitleOfPage from "@/components/TitleOfPage.vue";
import fdButton from "@/components/UI/fd-button.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      platformInfo: {
        address: "",
        quantityOfDroneports: "",
        quantityOfPostamats: "",
      },
      headerData: {
        title: "edit-page-title",
        link: "/",
      },
    };
  },

  components: {
    fdInput,
    fdButton,
    TitleOfPage,
  },

  computed: {
    ...mapGetters("dronoports", ["getLenght"]),
    lenOfPlatforms: function () {
      return this.getLenght + 1;
    },
  },

  methods: {
    ...mapActions("dronoports", ["addPlatform", "deletePlatform"]),
    addInfo(value) {
      console.log(this.geth);
      if (value.includes(undefined) || value.includes("")) {
        /*
        this.modalError = true;
        setTimeout(() => {
          this.modalError = false;
        }, 2000);
        */
      } else {
        let object = {
          address: value[0],
          dronoport: value[1],
          postamat: value[2],
        };
        this.addPlatform(object);
      }
    },
    AddAndGoClick() {
      this.headerData.link = "/Platfrom" + this.lenOfPlatforms;
      this.ChangeEditStatus();
    },
    ChangeEditStatus() {
      this.$store.commit(
        "setChangestatus",
        !this.$store.getters["GetChangestatus"]
      );
      this.addInfo([
        this.platformInfo.address,
        this.platformInfo.quantityOfDroneports,
        this.platformInfo.quantityOfPostamats,
      ]);
      if (this.headerData.link) this.$router.push(this.headerData.link);
    },
    deletePoint(value) {
      this.deletePlatform(value.id);
    },
    removeObjProperty(obj, prop_name) {
      const arr = Object.entries(obj);
      const filtered_arr = arr.filter(function ([key, value]) {
        return key != prop_name;
      });
      const filteredObj = Object.fromEntries(filtered_arr);
      return filteredObj;
    },
  },
};
</script>

<style lang="scss" scoped>
.plate {
  margin-top: 3rem;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  gap: 15px;
  background: transparent;
  box-shadow: 5px 7px 13px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
}
.infr-holder {
  display: flex;
  gap: 1rem;
}
</style>
