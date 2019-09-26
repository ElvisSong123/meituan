<template>
<div class="page">
    <div class="container">
        <div class="top">
            <my-header/> 
        </div>
        <div class="main">
            <router-view></router-view>

        </div>
        <div class="footer">
            <my-footer></my-footer>

        </div>
    </div>
</div>
   
</template>
<script>
import myHeader from './header/together.vue';
import myBody from './body/together.vue';
import myFooter from './footer/footer.vue'
export default {
    components:{
        myHeader,
        myBody,
        myFooter
    }
}
</script>
<style scoped>
    .page{
        width:100%;
    }
    .page .container{
        width:100%;
    }
    .elHeader{
        padding:0;
    }
    .main,.footer{
        background-color:#f8f8f8;
        padding:0;
    }
</style>


