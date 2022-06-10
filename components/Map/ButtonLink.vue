<template>
    <div class="Marker-container__button">
        <button class="Marker-container__button-button" :to="localePath('/Platform1')">Открыть</button>
    </div>
</template>

<style lang="scss">

.Marker-container__button {
    position: absolute;
    z-index: 99999;
    margin-left: 100px;
    margin-top: 70px;
    &-button{
        background-color: rgb(255, 255, 255);
        height: 48px;
        width: 110px;
        box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        transition: 0s background-color;
        transition: width 0.4s ease, color 0.2s linear;
        &:hover {
            transform: 1s;
            color: blueviolet;
            background-color: #f7f7f9;
            transition: background 0.4s ease, color 0.2s linear;
        }
    }
    
}
</style>