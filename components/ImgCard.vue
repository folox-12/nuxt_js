<template>
<div class="card__images card-images">
                <div class="card-images__image"><img :src="Thumbnail[0].thumbnail" alt="No photo"><button class="card-images__loop"><img src="../assets/img/ico/loop.svg" alt=""></button></div>
                <div class="card-images__image"><img  :src="Thumbnail[1].thumbnail" alt="No photo"><button class="card-images__loop"><img src="../assets/img/ico/loop.svg" alt=""></button></div>
                <div class="card-images__image"><img  :src="Thumbnail[2].thumbnail" alt="No photo"><button class="card-images__loop"><img src="../assets/img/ico/loop.svg" alt=""></button></div>
        </div>
</template>
    <script>
export default {
 
 
  props: {
    Thumbnail: {
      type: Array,
      required: true,
    },
  },
  
};
</script>

<style lang="scss" scoped>

</style>
