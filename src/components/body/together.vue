
<template>
    <div class="mainContent">
        <pord-class></pord-class>
        <my-content/>
    </div>
</template>

<script>
import pordClass from './classify';
import myContent from './content'
export default {
    components:{
        pordClass,
        myContent
    }
}
</script>

<style scoped>
    .mainContent{
        width:100%;
    }
</style>
