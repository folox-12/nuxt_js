<template>
     <div v-if="$store.getters['GetChangestatus'] ==  false" class="card-main__list card-main-list">
                <ul>
                    <div  v-for="item,index in title" :key ="item" class="card-main-list__el"  >
                    <hr>
                    <li><div class="card-main-list__point"><h4>{{title[index]}}</h4><span>{{description[index]}}</span></div></li>
                    </div>
                    
                </ul>
            </div>
            <div v-else class="card-main__list card-main-list">
                <ul>
                    <div class="card-main-list__el"  >
                
                    <li><div class="card-main-list__point"><h4>{{title[0]}}</h4><input type="text" class = "card-main-list__input card-main-list__addres " v-bind:value = description[0]><img src = '../../assets/img/ico/smallClear.svg' alt = ''></div></li>
                    </div>
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