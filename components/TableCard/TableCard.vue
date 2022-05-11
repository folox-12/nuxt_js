<template>
     <div class="card-main__list card-main-list">
                <ul>
                    <div  v-for="item,index in title" class="card-main-list__el"  >
                    <hr>
                    <li><div class="card-main-list__point"><h4>{{title[index]}}</h4><span>{{description[index]}}</span></div></li>
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