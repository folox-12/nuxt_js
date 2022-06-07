<template>
  <div
    v-bind:class="
      $store.getters['GetChangestatus'] == true
        ? 'card-images-editing'
        : 'card__images card-images'
    "
  >
    <div v-for="(item, index) in img" :key="item" class="card-images__image">
      <img class="sizePhoto" :src="img[index]" />
      <iconBase
        class="card-images__loop"
        v-if="$store.getters['GetChangestatus'] == false"
        @click="(showModal = true), showModal1(img[index], titleImg[index])"
        :iconType="'search'"
        :backgroundColor="'#ffffff'"
      />
      <button
        @click="$emit('DeleteImg', index)"
        v-else
        class="card-images__loop"
      >
        <img src="@/assets/img/ico/delete.svg" alt="" />
      </button>
    </div>
    <h1
      class="card-images__noPhoto"
      v-if="img.length == 0 && $store.getters['GetChangestatus'] == true"
    >
      {{ $t("you-can-add-photo") }}
    </h1>
    <h1
      class="card-images__noPhoto"
      v-if="img.length == 0 && $store.getters['GetChangestatus'] == false"
    >
      {{ $t("no-photo") }}
    </h1>
    <button
      @click="showModal = true"
      v-if="$store.getters['GetChangestatus'] == true"
      class="card-images-editing__button"
    >
      <img src="@/assets/img/add-photo.png" alt="" />
    </button>
    <ModalWindow
      v-show="showModal"
      @close-modal="showModal = false"
      :image="image"
      :titleImage="titleImage"
      @addPhoto="addPhoto"
    />
  </div>
</template>
<script>
import IconBase from "./icons/IconBase.vue";
import ModalWindow from "@/components/ModalWindow.vue";
export default {
  components: { ModalWindow },

  data() {
    return {
      showModal: false,
      image: "",
      titleImage: "",
      status: this.$store.getters["GetChangestatus"],
    };
  },
  components: {
    IconBase,
  },
  props: {
    img: {
      type: Array,
      required: true,
    },
    titleImg: {
      type: Array,
      required: true,
    },
  },
  methods: {
    showModal1(data, date) {
      this.image = data;
      this.titleImage = date;
    },
    addPhoto(value) {
      this.$emit("addPhoto", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.sizePhoto {
  width: 242px;
  height: 242px;
}

.card-images__image {
}
</style>
