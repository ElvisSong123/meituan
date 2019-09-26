<template>
  <div class="wrapper">
    <el-carousel height="240px" class = "slide">
      <el-carousel-item v-for="item in imgList" :key="item" class = "slide-item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data(){
        return {
            imgList:['https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png','http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg']
        }
    }
};
</script>

<style scoped>
    .wrapper{
        width:100%;
    }
    .slide{
        width:100%;
    }
    .slide-item{
        width:100%;
        height:100%
    }
    .slide-item img{
        width:100%;
        height:100%;
    }

</style>
