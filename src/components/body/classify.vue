<template>
    <div class="topContent">
        <div class="wrapper">
            <router-link to="#" class = "classify">美团外卖</router-link>
            <router-link to="#" class = "classify">猫眼电影</router-link>
            <router-link to="#" class = "classify">美团酒店</router-link>
            <router-link to="#" class = "classify">民宿／公寓</router-link>
            <router-link to="#" class = "classify">商家入驻</router-link>
            <router-link to="#" class = "classify">美团公益</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .topContent{
        width:100%;
        background:#fff;
        box-shadow: 0 6px 6px -5px #ccc
    }
    .topContent .wrapper{
        width:45%;
        margin-left: 320px;
        font-size: 16px;
        display:flex;
        justify-content: space-between;
        padding-bottom:15px;
        padding-top:10px;
    }
     .topContent .wrapper .classify{
         color:#222;
         font-weight: bold;
     }
     .topContent .wrapper .classify:nth-of-type(1):hover,
        .topContent .wrapper .classify:nth-of-type(4):hover{
         color:#fbc700
     }
     .topContent .wrapper .classify:nth-of-type(2):hover,
      .topContent .wrapper .classify:nth-of-type(3):hover,
       .topContent .wrapper .classify:nth-of-type(6):hover
     {
         color:#ed1e24;
     }
     .topContent .wrapper .classify:nth-of-type(5):hover{
         color:#31BBAC;
     }

  
</style>
