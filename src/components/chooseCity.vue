<template>
    <div class="wrapper">
        <div class="chooseInput">
            <span>按省份选择：</span>
            <my-select class = "mySelect" :myselect="selectPro" :myProvince='provinceName' @chooseCity="choosecity"></my-select>
            <my-select class = "mySelect" :myselect="selectCity" :myProvince='cityList'  @chooseCity="goFirstPage"></my-select>
            <span>直接搜索</span>
            <my-search></my-search>
        </div>
        <div class="hotCity">
            <dl>
                <dt>热门城市：</dt>
                <dd v-for="(item,index) in hotcityList" :key="index">{{item.name}}</dd>
            </dl>
        </div>
        <div class="recentInfo">
            <dl>
                <dt>最近访问：</dt>
                <dd v-for="(item,index) in recentList" :key="index">{{item.name}}</dd>
            </dl>
        </div>
        <div class="catelog">
            <my-catelog></my-catelog>
        </div>
    </div>
</template>

<script>
import mySelect from '../components/chooseCity/select';
import mySearch from '../components/chooseCity/searchFar';
import myCatelog from '../components/chooseCity/catelog';
import api from '@/api/index.js'
export default {
    data(){
        return {
            selectPro:'省份',
            selectCity:'城市',
            recentList:[],
            hotcityList:[],
            provinceName:[],
            cityList:[]
        }
    },
    methods:{
        choosecity(res){
            this.cityList = this.provinceName[res].cityInfoList;
        },
        goFirstPage(res){
            this.$router.push('/main');
            this.$store.dispatch('setPosition',this.cityList[res].name)
            console.log(this.$store.state.position)
        }
    },
    created(){
         api.getHotCity().then((res)=>{
             this.hotcityList = res.data.data;
         }) 
         api.getRecentCity().then((res)=>{
             this.recentList = res.data.data;
            
         })
          api.getProvinceList().then((res)=>{
             this.provinceName = res.data.data;
            //   console.log(this.provinceName)
         })
         
    },
    components:{
        mySelect,
        mySearch,
        myCatelog
        } 
    }
</script>

<style scoped>
    .wrapper{
        width:90%;
        background-color: #fff;
        margin:10px auto 0px;
        box-sizing: border-box;
        padding:0px 30px 10px;
    }
    .chooseInput,.hotCity,.recentInfo{
        width:100%;
        line-height: 70px;
        border-bottom:1px solid #ccc;
    }
    .chooseInput{
        text-align: left;
        line-height: 0px;
        padding:10px 0px;
    }
    .chooseInput span{
        font-size:16px;
        font-weight: bold;
        margin-right:10px;
    }
    .chooseInput .mySelect{
        width:20%;
        display: inline-block;
    }
    .hotCity dl,.recentInfo dl{
        width:100%;
        height:100%;
        text-align: left;
    }
    .hotCity dl dt,.recentInfo dl dt{
        font-size:16px;
        font-weight: bold;
        display: inline-block;
        margin-right:20px;
    }
    .hotCity dl dd,.recentInfo dl dd{
        display: inline-block;
        font-size: 14px;
        margin:0 10px;
    }
     .hotCity dl dd:hover,
     .recentInfo dl dd:hover{
         color:#13D1BE
     }
</style>
