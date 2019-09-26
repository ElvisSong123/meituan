<template>
    <div class="search">
        <div class="input">
            <el-row class = "searchHead">
                <el-col :span="5" class = "logol"><div class="grid-content bg-purple">
                        <img src="//s0.meituan.net/bs/fe-web-meituan/2fecdcf/img/logo.png" alt="美团">
                    </div>
                </el-col>
                <el-col :span="19" class = "searchInput">
                    <div class="grid-content bg-purple-light">
                        <input type="text" placeholder="搜索商家或地点" v-model="inputVal" @input="changeInput" @focus="myFocus" @blur="myBlur"><el-button class = 'button' type="primary" icon="el-icon-search"></el-button>
                        <ul class = "slideMenu" v-if="flag">
                            <li>热门搜索</li>
                            <li>
                                <router-link style="padding:0 5px" :to="{name:'productDetail',params:{id:item}}" v-for="(item,index) in recommentList" :key="index">{{item}}</router-link>
                            </li>
                        </ul>
                        <ul class = "slideMenuInput" v-if="inputFlag">
                            <li>
                                 <router-link to = "/s">西瓜</router-link>
                            </li>
                            <li>
                                 <router-link to = "#">苹果</router-link>
                            </li>
                            <li>
                                 <router-link to = "#">栗子</router-link>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
            <el-row class = "recommend">
                <el-col :span="24" class = "content">
                    <div class="grid-content bg-purple-light">
                        <router-link @click="turnTo(item)" :to="{name:'productDetail',params:{id:item}}" v-for="(item,index) in recommentList" :key="index">{{item}}</router-link>

                    </div>
                </el-col>
            </el-row>   
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            flag:false,
            inputFlag:false,
            inputVal:null,
            recommentList:['肯德基','尚一特连锁酒店','古茗','黄记煌三汁焖锅']
        }
    },
    methods:{
        myFocus(){
            console.log(this.inputVal)
            if(!this.inputVal){
                 this.flag = true;
                 this.inputFlag = false;
            }else{
                this.flag = false;
                this.inputFlag = true;
            }
        },
        myBlur(){
            let self = this;
            setTimeout(()=>{
                 self.flag = false;
                 self.inputFlag = false;
            },200)
           
        },
        changeInput(){
            console.log(this.inputVal);
            if(this.inputVal){
                this.flag = false;
                this.inputFlag = true
            }else{
                this.flag = true;
                this.inputFlag = false;
            }
        },
    }
}
</script>
<style scoped>
    .search{
        width:100%;
        background:#fff;
        padding-bottom: 20px;
        box-shadow: 0px 4px 8px 1px #ddd
    }
    .input{
        width:90%;
        margin:0 auto;
    }
    .searchHead .logol{
        text-align: left;
        padding:28px 40px 0px 0px;
    }
    .grid-content img{
        display: inline-block;
        width:126px;
        height:46px;
    }
    .searchInput{
        text-align:left;
        padding:28px 0px 0px 0px;
    }
    .searchInput .grid-content{
        position: relative;
        width:580px;
        height:40px;
        border: 1px solid #13D1BE;
        background: #fff;
        border-radius: 4px;
        
    }
    .searchInput .grid-content .slideMenu,
    .searchInput .grid-content .slideMenuInput{
        box-sizing: border-box;
        position:absolute;
        top:40px;
        left:0;
        margin-top:1px;
        width:500px;
        background-color: #fff;
        box-shadow: 0 1px 3px 1px #eee;
        z-index:100;
    }
    .searchInput .grid-content .slideMenu{
        padding:5px 10px;
    }
    .searchInput .grid-content .slideMenu a:hover,
    .searchInput .grid-content .slideMenuInput a:hover{
        color:#13D1BE
    }
     .searchInput .grid-content .slideMenu li,
     .searchInput .grid-content .slideMenuInput li{
         width:100%;
         color:#666;
      
     }
     .searchInput .grid-content .slideMenu li{
         padding:5px 0px;
     }
     .searchInput .grid-content .slideMenuInput a{
         box-sizing: border-box;
         display: inline-block;
         width:100%;
         height:100%;
         padding:5px 10px;
     }
      .searchInput .grid-content .slideMenuInput li a:hover{
          background-color:#f8f8f8;
      }
     .searchInput .grid-content .slideMenu li:nth-of-type(1){
         color:#aaa
     }
    @media screen and (max-width:1200px){
         .input{
            width:960px;
            margin:0 auto;
        }
        .searchInput .grid-content{
            width:420px;
        }
         .searchInput input{
             box-sizing: border-box;
            border:none;
            padding:10px 10px;
            outline: none;
            width:360px;
         }
         .searchInput .button{
             width:60px;
            background-color:#13D1BE;
            border:none;
            border-radius:0px;
            height:100%;
         }
    }
    @media screen and (min-width:1200px){
        .searchInput input{
                box-sizing: border-box;
                border:none;
                padding:10px 10px;
                outline: none;
                width:500px;
            }
            .searchInput .button{
                width:80px;
                background-color:#13D1BE;
                border:none;
                border-radius:0px;
                height:100%;
            }
    }
 
    .recommend .logol{
        margin-right:50px;
    }
    .recommend .content{
        margin-left: 22%;
        text-align: left;
    }
    .recommend .grid-content a{
        padding:10px 5px;
    }
    .recommend .grid-content a:hover{
        color:#31BBAC
    }
</style>

