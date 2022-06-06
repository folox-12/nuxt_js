<template>
<div class="error-message">
    <div class="error-message-parent">
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.7706 17.9688L11.6144 0.390625C11.463 0.129395 11.2018 0 10.9381 0C10.6744 0 10.4108 0.129395 10.2618 0.390625L0.105599 17.9688C-0.194694 18.4912 0.181283 19.1406 0.781869 19.1406H21.0944C21.695 19.1406 22.0709 18.4912 21.7706 17.9688ZM10.1569 7.22656C10.1569 7.11914 10.2448 7.03125 10.3522 7.03125H11.5241C11.6315 7.03125 11.7194 7.11914 11.7194 7.22656V11.7188C11.7194 11.8262 11.6315 11.9141 11.5241 11.9141H10.3522C10.2448 11.9141 10.1569 11.8262 10.1569 11.7188V7.22656ZM10.9381 15.8203C10.6315 15.8141 10.3395 15.6878 10.1248 15.4687C9.91015 15.2497 9.78992 14.9552 9.78992 14.6484C9.78992 14.3417 9.91015 14.0472 10.1248 13.8281C10.3395 13.609 10.6315 13.4828 10.9381 13.4766C11.2448 13.4828 11.5368 13.609 11.7514 13.8281C11.9661 14.0472 12.0863 14.3417 12.0863 14.6484C12.0863 14.9552 11.9661 15.2497 11.7514 15.4687C11.5368 15.6878 11.2448 15.8141 10.9381 15.8203V15.8203Z" fill="white"/>
    </svg>
    <span>{{title}}</span>
    <div class="error-message__line"></div>
    </div>
</div>

</template>

<script>

export default {
    props:{
        title:{
            type: String
        }
    }

}

</script>
<style scoped lang="scss">
.error-message{
    width:295px;
    height:46px;
    background-color: #FF4444;
     position: fixed;
  top:0;
  right:50%;
  transform: translateX(50%);
  z-index:9999;
padding:15px;
 
  padding:15px;
    span{
        font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 100%;
color: #FFFFFF;
    }
   &__line{
       position:absolute;
       bottom:15px;
       width:100%;
       background-color: black;
       height:1px;
       right:15px;
       animation: timer 2s ease-out alternate ;
   }
}
.error-message-parent{
     display: flex;
   gap:15px;
   position:relative;
  width:295px;
    height:46px;
}
@keyframes timer {
from {width: 100%}
to {width: 0}
}
</style>

