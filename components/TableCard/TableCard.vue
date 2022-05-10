<template>
     <div class="card-main__list card-main-list">
                <ul>
                    <div  v-for="item,index in title" class="card-main-list__el"  >
                    <hr>
                    <li><div class="card-main-list__point"><h4>{{title[index]}}</h4><span>{{description[index]}}</span></div></li>
                    </div>
                    <!-- <hr>
                    <li><div class="card-main-list__point"><h4>Регистрационный номер</h4><span>450n-144-vc67</span></div></li>
                    <hr>
                    <li><div class="card-main-list__point"><h4>Дата создания</h4><span>08.02.22</span></div></li>
                    <hr>
                    <li><div class="card-main-list__point"><h4>Размеры(м)</h4><span>5 х 5</span></div></li>
                    <hr>
                    <li><div class="card-main-list__point"><h4>Рабочая температура(С°)</h4><span>от -10 до 30 </span></div></li>
                    <hr>
                    <li><div class="card-main-list__point"><h4>Режим эксплуатации</h4><span>24/7</span></div></li> -->
                </ul>
            </div>
</template>
<script>


export default {
 


props:{
 title:{
   type: Array,
      required: true,

 },
 description:{
     type: Array,
      required: true,
 }
}
};
</script>

<style lang="scss" scoped>

</style>