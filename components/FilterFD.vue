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
                            <input type="text" placeholder = "Какой-то поиск" id = "input-filter" class = "input-filter">
                            <button class="clear-input" id = "clear-input-filter">
                                <img src="../assets/img/ico/close.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>
                <hr>
                <div class = "spoiler__item">
                    <div class = "spoiler__title">Дронопорт</div>
                    <div class = "spoiler__content">
                        <div class = "spoiler__content-checkbox-filter">
                            <div class = "checkbox-filter__item">
                                <input type = "checkbox" class = "checkbox__input" id = "checkbox1">
                                <label class = "chechbox__label" for = "checkbox1">Ни одного</label>
                            </div>
                            <div class = "checkbox-filter__item">
                                <input type = "checkbox" class = "checkbox__input" id = "checkbox2">
                                <label class = "chechbox__label" for = "checkbox2">Несколько </label>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class = "spoiler__item">
                    <div class = "spoiler__title">Обслуживаемые дроны</div>
                    <div class = "spoiler__content">Какой-то фильтр</div>
                </div>
                <hr>
            </div>
        </div>
	</div>
</template>

<style scoped lang="scss">
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
    .spoiler__title {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }
    

</style>