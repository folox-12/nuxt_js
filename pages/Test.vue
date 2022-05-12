<template>
  <div class="jl">
    <div class="save-btn">
      <button @click="showModal = true">Фото</button>
      <ModalWindow v-show="showModal" @close-modal="showModal = false" />
      
    </div>
    
  </div>
  
</template>

<script>
import ModalWindow from '../components/ModalWindow.vue'

export default {
  layout: 'map',
  components: { ModalWindow },
  data() {
    return {
      showModal: false,
    }
  },
}
</script>

<style>
main{min-height:200vh}
</style>