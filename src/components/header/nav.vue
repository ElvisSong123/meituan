<template>
    <div class="navi">
        <div class="container">
            <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <left-nav></left-nav>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <right-nav></right-nav>
                </div>
            </el-col>
        </el-row>
        </div>
    </div>
</template>
<script>
import leftNav from './leftNav';
import rightNav from './rightNav'
export default {
    components:{
        leftNav,
        rightNav
    }
}
</script>
<style scoped>
    .navi{
        background: #F8F8F8;
        width: 100%;
        color: #999;
        height:40px;
        line-height: 40px;
    }
    .container{
        width:1200px;
        margin:0 auto
    }
    @media screen and (max-width: 1200px){
        .container{
            width:960px;
            margin:0 auto;
        }
    }
</style>


