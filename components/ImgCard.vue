<template>
<div class="card__images card-images">
                <div class="card-images__image"><img :src='img[0].img'/><button class="card-images__loop"><img src="../assets/img/ico/loop.svg" alt=""></button></div>
                <div class="card-images__image"><img  :src='img[1].img'/><button class="card-images__loop"><img src="../assets/img/ico/loop.svg" alt=""></button></div>
                <div class="card-images__image"><img  :src='img[2].img'/><button class="card-images__loop"><img src="../assets/img/ico/loop.svg" alt=""></button></div>
        </div>
</template>
    <script>
export default {
 


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
