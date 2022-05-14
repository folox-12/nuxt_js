<template>
  <div class="page">
    <div class="card">
      


       
        <Imagecard :img="img"
        :titleImg="titleImg" ></Imagecard>
        <hr>
        <div class="card__main card-main">
            <div class="card-main__title">
                <h2>Постамат</h2>
            </div>
          
            <Tablecard :title="title"
            :description="description"></Tablecard>

            </div>
  
  </div>
  </div>
</template>
<script>




import Imagecard from '../components/ImgCard.vue';
import Tablecard from '../components/TableCard/TableCard.vue'
import ModalWindow from '../components/ModalWindow.vue'
import OpenCard from '../components/buttonCardOpen.vue'
export default {

    layout: 'card',
    components: {
        Imagecard,
        Tablecard,
        ModalWindow,
        OpenCard
        
        },
    data(){
        return{
          
            img:[

            require("../assets/img/postamat1.jpg"),
            require("../assets/img/postamat2.jpg"),
             require("../assets/img/postamat3.jpg")
            ],
            titleImg:[
              'Вид слева',
              'Вид сверху',
              'Вид справа'
            ],
            title:[
                "Регистрационный номер",
                "Размеры (мм)",
                "Напряжение питания (В)",
                "Вес (кг)",
                "Время выдачи заказа (мин.)",
                "Максимальная скорость ветра (м/с)",
                "Диапазон рабочих температур (C°)",
                "Время обслуживания дрона (мин.)",
            ],
            description:[
                "450n-144-vc67PST",
                "2045 x 1145 x 565",
                "220",
                "1600",
                "1",
                "15",
                "от 0 до 40",
                "5"

            ],
           

           

        }
    },
}
  



</script>

<style lang="scss" >
@import "../assets/scss/card-area";
::-webkit-scrollbar{
    width: 5px;
}

::-webkit-scrollbar-track {
   
    background: #FFFFFF;
    border-radius: 6px;
}

::-webkit-scrollbar-thumb {
    background: #9B42F5;
    border-radius: 6px;
}


progress::-webkit-progress-bar {
 color: #9B42F5;
  }
  
  progress::-webkit-progress-value {
    color: #9B42F5;
  }

  progress {
    color: #9B42F5;
  }
</style>
