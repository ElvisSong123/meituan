<template>
  <div class="wrapper">
    <div class="wrapperMenu">
        <div class="leftBar">
           <menu-bar />
        </div>
        <div class="rightContent">
          <el-row class = "top-row"> 
            <el-col :span="14" class="slideImg">
              <div class="grid-content bg-purple">
                <slider />
              </div>
            </el-col>
            <el-col :span="4" class="recomImg">
              <div class="grid-content bg-purple-light">
                <img :src="img1" alt />
              </div>
            </el-col>
            <el-col :span="6" class="loginImg">
              <div class="grid-content bg-purple-light">
                <div class="login">
                  <p class="img">
                    <img src="https://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt />
                  </p>
                  <p>Hi,{{$store.state.userName?$store.state.userName:'你好！'}}</p>
                  <p>
                    <el-button round class="button" v-if="!$store.state.alreadyLogin">注册</el-button>
                  </p>
                  <p>
                    <el-button round class="button" v-if="!$store.state.alreadyLogin">立即登陆</el-button>
                  </p>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="14" class = "left-col">
              <div class="wrapperImg">
                <div class = "image">
                  <a href="#">
                    <img
                      src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
                      alt
                    />
                  </a>
                </div>
                <div class = "image">
                  <a href="#">
                    <img
                      src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
                      alt
                    />
                  </a>
                </div>
              </div>
            </el-col>
            <el-col :span="4" class = "midd-col">
              <div class="wrapperImg">
                <div class="image">
                    <a href="">
                      <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="">
                    </a>
                </div>
              </div>
            
            </el-col>
            <el-col :span="6" class = "right-col">
              <div class="wrapperInfo">
                <p class="image">
                  <img src="//s1.meituan.net/bs/fe-web-meituan/2fecdcf/img/download-qr.png" alt="下载APP">
                </p>
                <h3>美团APP手机版</h3>
                <p>
                  <span class="active">1元起</span>
                  <span>吃喝玩乐</span>
                </p>
              </div>
            </el-col>
          </el-row>
        </div>
    </div>
    
    <div class="classify-detail">
        <detail-info></detail-info>
        <detail-info></detail-info>

    </div>
  </div>
</template>

<script>
import menuBar from "./menuBar";
import slider from "../slide/slide";
import detailInfo from './detailInfo'
export default {
  data() {
    return {
      img1:
        "http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg",
      img2: ""
    };
  },
  components: {
    menuBar,
    slider,
    detailInfo
  }
};
</script>

<style scoped>
@import url('../../assets/css/content.css');
</style>
