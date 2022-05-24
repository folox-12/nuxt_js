<template>
  <div v-bind:class="$store.getters['GetChangestatus'] ==  true ? 'card-images-editing' : 'card__images card-images'" >
    <div v-for="(item, index) in img" :key="item" class="card-images__image">
      <img :src="img[index]" /><button v-if="$store.getters['GetChangestatus'] ==  false" 
        @click="(showModal = true),
            showModal1(img[index]),
            showModal2(titleImg[index])"
        class="card-images__loop"
      >
        <img src="../assets/img/ico/loop.svg" alt="" />
      </button>
      <button v-else 
        class="card-images__loop"
      >
        <img src="../assets/img/ico/delete.svg" alt="" />
      </button>
      
    </div>
     <button v-if="$store.getters['GetChangestatus'] ==  true" class="card-images-editing__button">
    <img src="../assets/img/add-photo.png" alt="">
    </button>
    <ModalWindow
      v-show="showModal"
      @close-modal="showModal = false"
      :image="image"
      :titleImage="titleImage"
    />
   
  </div>
</template>
<script>
import ModalWindow from "../components/ModalWindow.vue";
export default {
  components: { ModalWindow },

  data() {
    return {
      showModal: false,
      image: "",
      titleImage: "",
      status : this.$store.getters['GetChangestatus'] ,
    };
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
    showModal1(data) {
      this.image = data;
    },
    showModal2(date) {
      this.titleImage = date;
    },
  },
};
</script>

<style lang="scss" scoped></style>
