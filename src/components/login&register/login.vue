<template>
    <div class = 'wrapper'>
        <div class="header">
            <a class="site-logo" href="http://www.meituan.com">美团网</a>
        </div>
        <div class="body">
            <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
            <div class="page-login">
                <div class="input-info">
                    <div class="remindInfo" v-if="remindInfo">{{remindInfo}}</div>
                    <div class="login-way">
                        <span>账号登陆</span>
                        <span>手机状态码登陆</span>
                    </div>
                    <div class="number">
                        <input type="text" v-model="textVal" placeholder="手机号">
                    </div>
                    <div class="password">
                        <input type="password" v-model="passwordVal" placeholder="请输入密码">
                    </div>
                    <div class="forger">
                        <a href="#">忘记密码</a>
                    </div>
                    <div class="login">
                        <button @click="loginBtn">登陆</button>
                    </div>
                    <div class="register">
                        还没有账号？
                        <a href="#">免费注册</a>
                    </div>
                    <div class="bottom">
                        <span class = "decrale">用合作网站账号登陆</span>
                        <div class="other">
                            <div class="image">
                                <span></span>
                                <span></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
           <ul>
                <li class="first"><a rel="nofollow" href="https://about.meituan.com/about.html">关于美团</a></li>
                <li><a rel="nofollow" href="https://zhaopin.meituan.com/">加入我们</a></li>
                <li><a rel="nofollow" href="http://emis.meishi.meituan.com/merchantsSettled">商家入驻</a></li>
                <li><a rel="nofollow" href="https://www.meituan.com/help/faq">帮助中心</a></li>
                <li class="last"><a href="http://meituan.com/mobile">美团手机版</a></li>
            </ul>
            <p>
                ©<span>2019</span>
                <a href="https://www.meituan.com">美团网团购</a>
                meituan.com
                <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP证070791号</a>
                京公网安备11010502025545号
            </p>
        </div>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data(){
        return {
            remindInfo:null,
            textVal:null,
            passwordVal:null
        }
    },
    methods:{
        loginBtn(){
            console.log(typeof this.textVal,this.passwordVal);
            api.login({
                params: {
                    userName: this.textVal,
                    password: this.passwordVal
                }
            }).then((res)=>{
                if (res.data.status == 'success') {
                    this.$router.push({name: 'mainPage'});
                    this.$store.commit('setLogin',true);
                    this.$store.commit('setUserName',this.textVal)
                } else {
                    this.remindInfo = res.data.msg;
                }
            })
        }
    }
}
</script>

<style scoped>
    .wrapper{
        width:100%;
    }
    .wrapper .header{
        width: 80%;
        height: auto;
        margin: 40px auto 30px
    }
    .header .site-logo{
        display: inline-block;
        margin: 0;
        width:82px;
        height:54px;
        background-position: -188px -808px;
        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
        background-size: initial;
        display: block;
        text-indent: -9999px;
        overflow: hidden;
    }
    .body{
        width:80%;
        height:auto;
        margin:0 auto;
        display:flex;
        justify-content: space-between;
        margin-bottom:100px;
    }
    .body img{
        width: 480px;
        height: 370px;
        margin-right: 100px;
    }
    .body .page-login{
        flex:1;
        height:370px;
    }
    .input-info .remindInfo{
        width:100%;
        height:30px;
        line-height: 30px;
        text-align: left;
        box-sizing: border-box;
        margin-bottom: 10px;
        border: 1px solid #f5d8a7;
        border-radius: 2px;
        background: #fff6db;
        font-size: 12px;
        padding-left: 26px;
    }
    .page-login .input-info{
        width:270px;
        height:100%;
        margin:0 auto;
    }
    .page-login .login-way{
        height:30px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 7px;
    }
    .input-info .number,.input-info .password{
        width:100%;
        margin-bottom:15px;
    }
     .input-info .number input,.input-info .password input{
         width:100%;
         height:30px; 
         outline-width: 1px;
         outline-color: #008177;
         padding:10px;
         box-sizing: border-box;
     }
     .forger{
         width:100%;
         height:20px;
         line-height: 20px;
         text-align:right;
         margin-bottom: 10px;
     }
     .forger a, .body .register a{
         color:#2bb8aa
     }
    .body .login{
        width:100%;
        height:30px;
    }
    .body .login button{
        width:100%;
        height:100%;
        background-color:#2bb8aa;
        color:#fff;
        text-align: center;
        outline: none;
        border:none;
    }
    .body .register{
        width:100%;
        height:30px;
        line-height: 30px;
        font-size: 14px;
        text-align: left;
    }
    .bottom{
        width:100%;
        position: relative;
    }
 
    .bottom .decrale{
        display: inline-block;
        height:20px;
        line-height: 20px;
        padding:0 10px;
        z-index:100;
        background-color:#fff;
        position:absolute;
        top:0;
        left:50%;
        transform: translate(-50%)
    }
    .bottom .other{
        width:100%;
        height:100px;
        position:absolute;
        top:10px;
        left:0px;
        border-top:1px solid #ccc;
        z-index: 10;
    }
    .bottom .other span{
        display: inline-block;
        margin-top:20px;
        width: 18px;
        height: 18px;
        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
    }
     .bottom .other span:nth-of-type(1){
        background-position: -1250px -599px;
     }
      .bottom .other span:nth-of-type(2){
         margin-right: 20px;
         background-position: -1250px -491px
     }
    .footer{
        width:80%;
        height:auto;
        margin:0 auto;
    }
    .footer ul{
        border-top:1px solid #eee;
        height:40px;
        width:100%;
        display:flex;
        justify-content: left;
        align-items: center
    }
    .footer ul li{
        height:16px;
        padding:0px 10px;
        border-right:1px solid #eee;
    }
    .footer ul li:last-of-type{
        border:none;
    }
    .footer p{
        border-top:1px solid #eee;
        width:100%;
        height:50px;
        line-height: 50px;
        text-align:left;
    }
</style>
