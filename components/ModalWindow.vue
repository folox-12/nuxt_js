<template>
<div class="ModalWindow">
    
    <div class="ModalWindow__container">
        <div class="Close" @click="$emit('close-modal')">
        <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect xmlns="http://www.w3.org/2000/svg" x="0.140625" y="18.3906" width="25.4384" height="2.6467" transform="rotate(-45 0.140625 18.3906)" fill="#6D6A7A"/>
        <rect xmlns="http://www.w3.org/2000/svg" x="1.87109" width="25.4384" height="2.6467" transform="rotate(45 1.87109 0)" fill="#6D6A7A"/>
        </svg>
    </div>
        <div class="ModalWindow__container-description">
            <h6>{{titleImage}}</h6>
        </div>
        <div class="ModalWindow__container-image ">
            <img :src='image' alt="Error">
            
        </div>
    </div>
</div>
</template>

<script>

  export default {
    props:{
 image:{
   type: Object,
      required: true,
      default: "../assets/img/platform1.jpg",

 },
 titleImage:{
   type: String,
   required: true
 }
},



}
</script>

<style scoped lang = "scss">

.ModalWindow {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index:9999;

  &__container{
  position: relative;
  text-align: center;
  background-color: rgb(255, 255, 255);
  height: 600px;
  width: 570px;
  margin-top: 5%;
  padding: 30px 30px;
  border-radius: 20px;

    &-description{
        display: flex;
        align-items: flex-start;
    }
    &-image{
    margin-top: 30px;
        img{
            width: 450px;
            height: 450px;
        }
      
    }
  }
}


.Close {
 position: absolute;
  cursor: pointer;
  right: 15px;
  top: 30px;

}

h6 {
    text-align: start;
  font-weight: 500;
  font-size: 28px;
}
@media (max-width:800px){
.ModalWindow {
  &__container{
    height: 300px;
  width: 270px;
  padding: 10px;
  &-image{
    margin-top: 20px;
        img{
            width: 100%;
            height: 230px;
        }
      
    }
  }
  
}
.Close {
 position: absolute;
  cursor: pointer;
  right: 7.5px;
  top: 15px;

}
h6 {
    text-align: start;
  font-weight: 400;
  font-size: 22px;
}
}

</style>