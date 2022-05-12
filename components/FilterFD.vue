<template>
    <div class="filter-block">
        <div id="myDropdown" class="dropdown-content">
            <div class = "spoiler-main" id = "spoiler-main">
                <div class="title_dropdown">
                    <div class="name_title">
                        <h3>Фильтр</h3>
                    </div>
                </div>
                <div class = "spoiler__item">
                    <div class = "spoiler__title">Город</div>
                    <div class = "spoiler__content">
                        <div class="input-spoiler-content"> 
                            <input type="text" placeholder = "Город" id = "input-filter" class = "input-filter" v-model="inputFilter">
                            <button class="clear-input" id = "clear-input-filter" v-on:click="inputFilterClear()"> 
                                <svg width="20" height="20" viewBox="0 0 24 23" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <hr>
                <div class = "spoiler__item">
                    <div class = "spoiler__title">Дронопорт</div>
                    <div class = "spoiler__content">
                        <div class = "spoiler__content-radio-filter">
                            <div class = "radio-filter__item">
                                <input type = "radio" class = "radio__input" id = "radio_first" value = "radio_first" v-model="pickedRadio">
                                <label for = "radio_first" class = "radio__label" >Ни одного</label>
                            </div>
                            <div class = "radio-filter__item">
                                <input type = "radio" class = "radio__input" id = "radio_second" value ="radio_second" v-model="pickedRadio">
                                <label for = "radio_second" class = "radio__label" >Несколько </label>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class = "spoiler__item">
                    <div class = "spoiler__title">Обслуживаемые дроны</div>
                    <div id="v-model-select-dynamic" class="spoiler__selector">
                    <select v-model="selected" class="spoiler__selector-select">
                        <option v-for="option in options" v-bind:value="option.value" class = "spoiler__selector-option">
                            <div class="test">
                                {{ option.text }}
                            </div>
                        </option>
                    </select>
                    </div>
                </div>
                <div class = "spoiler__item">
                    <div class = "spoiler__reset">
                        <button class="spoiler__reset_button">Очистить</button>
                    </div>
                    <div class = "spoiler__apply">
                        <button class="spoiler__apply_button">Применить</button>
                    </div>
                </div>
                <hr>
            </div>
        </div>
	</div>
</template>

<script>
export default {
    data() {
    return {
      selected: 'A',
      options: [
        { text: '3D Robotics Iris+', value: 'A' },
        { text: 'DJI Phantom 4', value: 'B' },
        { text: 'AOVO W Pro', value: 'C' }
      ],
      inputFilter: "",
      pickedRadio: "radio_first",
    };
  },
    methods:{
        inputFilterClear() {
      this.inputFilter = "";
    },
    }
}

</script>
<style scoped lang="scss">
@import "../assets/scss/_nullstyle";
@import "../assets/scss/fonts";

    .filter-block {
        width: 100%;
        background:white;
        
    }
    .dropdown-content {
        transition: all 1s ease;
        display: none;
        opacity: 0;
        margin: 1rem;
        width: 0;
        &.active {
            width: 100%;
            opacity: 1;
            display: block;
        }
    }
    .spoiler-main {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-start;
        padding: 3% 10%;
        padding: 10px;
        gap: 30px;
    }
    .spoiler__item {
        margin:0px 0px 20px 0px;
    }

    .spoiler__reset{
        margin-bottom: 15px;
        &_button{
        background: rgba(20, 16, 41, 0.05);
        color: black;
        height: 48px;
        width: 280px;
        min-width: 200px;
        font-family: "Montserrat", serif;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        -webkit-transition: 0.5s;
        transition: all 0.2s;
            &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            color: #9b42f5;
            }
        }
    }

    .spoiler__apply{
        &_button{
        background: linear-gradient(90deg, #0094ff 3.2%, #9b42f5 73.28%);
        color: white;
        height: 48px;
        width: 280px;
        min-width: 200px;
        font-family: "Montserrat", serif;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        -webkit-transition: 0.5s;
        transition: all 0.2s;
            &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            color: rgba(255, 255, 255, 0.6);
            }
        }
    }

    
    
    
    .spoiler__title {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 15px;
    }

    .input-filter{
        background-color: rgba(20,16,41,.02);
        padding: 15px 15px 15px 15px;
        width: 280px;
    }
    
    .input-spoiler-content{
    position: relative;
    width: 100%;    
    }

    .clear-input{
        position: absolute;
        background-color: inherit;
        top: 18px;
        right: 30px;
        
    }
    
    .radio-filter__item{
        display: flex;
        align-items: center;
        background: rgba(20,16,41,.02);
        padding: 12px 20px 12px 12px;
        margin-top: 5px;
        width: 280px;
    }

    .radio__input{
    width: 24px;
    height: 24px;
    margin-right: 12px;
    background: rgba(20,16,41,.06);
    border: 10px solid rgba(20,16,41,.06);


    &:checked{
        background: rgba(20,16,41,.06);
        width: 24px;
        height: 24px;
        -webkit-appearance: none;
        appearance: none;
        border-radius: 50%;
        border: 7px solid $purple;
        margin-right: 12px;
        transition: border-color .25s,background .25s
    }
    }

    .spoiler__selector {
    &-select{
        background-color: rgba(20, 16, 41, 0.05);
        width: 280px;
        padding: 15px 15px 15px 15px;
    }
    &-option{
        background-color: #ffffff;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
            &:hover{
            background: rgba(20, 16, 41, 0.05);
            color: #9b42f5;
            }
    }
    }



</style>

