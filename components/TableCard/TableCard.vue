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
                
                    <li><div class="card-main-list__point"><h4>{{title[0]}}</h4><div class = 'card-main-list__addres'><input type="text" class = "card-main-list__input"
                     v-bind:value = description[0]><button @click="clearInput()"><img src = '../../assets/img/ico/smallClear.svg'  alt = ''></button></div></div></li>
                    </div>
                    <div class="card-main-list__el"  >
                
                    <li><div class="card-main-list__point"><h4>{{title[1]}}</h4><div><input type="text" class = "card-main-list__input"
                     v-bind:value = description[1]><button @click="clearInput()"><img src = '../../assets/img/ico/smallClear.svg'  alt = ''></button></div></div></li>
                    </div>
                    <div class="card-main-list__el"  >
                
                    <li><div class="card-main-list__point"><h4>{{title[2]}}</h4><div><input type="text" class = "card-main-list__input"
                     v-bind:value = description[2]><button @click="clearInput()"><img src = '../../assets/img/ico/smallClear.svg'  alt = ''></button></div></div></li>
                    </div>
                    <div v-if="description[3]" class="card-main-list__el"  >
                
                    <li><div class="card-main-list__point"><h4>{{title[3]}}</h4><div><input type="text" class = "card-main-list__input"
                     v-bind:value = description[3]><button @click="clearInput()"><img src = '../../assets/img/ico/smallClear.svg'  alt = ''></button></div></div></li>
                    </div>
                    <div v-if="description[4]" class="card-main-list__el"  >
                
                    <li><div class="card-main-list__point"><h4>{{title[4]}}</h4><div><input type="text" class = "card-main-list__input"
                     v-bind:value = description[4]><button @click="clearInput()"><img src = '../../assets/img/ico/smallClear.svg'  alt = ''></button></div></div></li>
                    </div>
                    <div v-if="description[5]" class="card-main-list__el"  >
                
                    <li><div class="card-main-list__point"><h4>{{title[5]}}</h4><div><input type="text" class = "card-main-list__input"
                     v-bind:value = description[5]><button @click="clearInput()"><img src = '../../assets/img/ico/smallClear.svg'  alt = ''></button></div></div></li>
                    </div>
                    <div v-if="description[6]" class="card-main-list__el"  >
                
                    <li><div class="card-main-list__point"><h4>{{title[6]}}</h4><div><input type="text" class = "card-main-list__input"
                     v-bind:value = description[6]><button @click="clearInput()"><img src = '../../assets/img/ico/smallClear.svg'  alt = ''></button></div></div></li>
                    </div>
                    <div v-if="description[7]" class="card-main-list__el"  >
                
                    <li><div class="card-main-list__point"><h4>{{title[7]}}</h4><div><input type="text" class = "card-main-list__input"
                     v-bind:value = description[7]><button @click="clearInput()"><img src = '../../assets/img/ico/smallClear.svg'  alt = ''></button></div></div></li>
                    </div>
                    <div v-if="description[7]" class="card-main-list__el"  >
                
                    <li><div class="card-main-list__point"><h4>{{title[8]}}</h4><div><input type="text" class = "card-main-list__input"
                     v-bind:value = description[8]><button @click="clearInput()"><img src = '../../assets/img/ico/smallClear.svg'  alt = ''></button></div></div></li>
                    </div>
                    <div v-if="description[9]" class="card-main-list__el"  >
                
                    <li><div class="card-main-list__point"><h4>{{title[7]}}</h4><div><input type="text" class = "card-main-list__input"
                     v-bind:value = description[9]><button @click="clearInput()"><img src = '../../assets/img/ico/smallClear.svg'  alt = ''></button></div></div></li>
                    </div>
                </ul>
            </div>

</template>
<script>


export default {
 
data(){
    return{
        property: 'sdada'
    }
},

props:{
 title:{
   type: Array,
      required: true,

 },
 description:{
     type: Array,
      required: true,
 }
},
methods:{
    clearInput(){
       
    }
}
};
</script>

<style lang="scss" scoped>

</style>