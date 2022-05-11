<template>
<div class="card__images card-images">
                <div v-for="item,index in img" class="card-images__image"><img :src='img[index]'/><button  @click="showModal = true"   v-on:click="Image"   class="card-images__loop"><img src="../assets/img/ico/loop.svg" alt=""></button></div>
                <ModalWindow v-show="showModal" @close-modal="showModal = false" />
               
        </div>
</template>
    <script>
    import ModalWindow from '../components/ModalWindow.vue'
export default {
 
components: { ModalWindow },
  data() {
    return {
      showModal: false,
    }
  },

props:{
 img:{
   type: Array,
      required: true,

 }
}
};
</script>

<style lang="scss" scoped>

</style>
