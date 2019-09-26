<template>
    <div class="together">
        <my-nav/>
        <my-search/>
    </div>
</template>
<script>
import myNav from './nav.vue';
import mySearch from './search.vue';
export default {
    components:{
        myNav,
        mySearch
    }
}
</script>
<style scoped>
    .together{
        width:100%;
        height:100%;
        box-shadow: 0px 1px 3px 1px #ccc;
    }
</style>

