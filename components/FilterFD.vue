<template>
    <div class="filter-block">
        <div id="myDropdown" class="dropdown-content">
            <div class = "spoiler-main" id = "spoiler-main">
                <div class="title_dropdown">
                    <div class="name_title">
                        <h3>Фильтр</h3>
                    </div>
                    <div class="close-dropdown">
                        <button>
                            <img src="static/img/ico/close.svg"  alt="" class = "close-svg" >
                        </button>
                    </div>
                </div>
                <div class = "spoiler__item">
                    <div class = "spoiler__title">Город</div>
                    <div class = "spoiler__content">
                        <div class="input-spoiler-content">
                            <input type="text" placeholder = "Какой-то поиск" id = "input-filter" class = "input-filter">
                            <button class="clear-input" id = "clear-input-filter" onclick = "clearInput1()">
                                <span class="material-icons">✖</span>
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
        margin: 1rem;
        width: 100%;
        display: none;
    }
</style>