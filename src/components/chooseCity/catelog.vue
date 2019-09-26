<template>
  <div class="container">
    <div class="header">
      <span class="name">按拼音首字母选择:</span>
      <a :href="'#city'+item" class="number" v-for="item in nameList" :key="item">{{item}}</a>
    </div>
    <div :id="'city'+index" class="cityName" v-for="(item,index) in newCityList" :key="item.id">
      <div class="firstPin">
           <span class="number">{{index}}</span>
      </div>
     <div class="cityDetail">
         <span v-for="ele in item" :key="ele.id">{{ele.name}}</span>
     </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      nameList: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [],
      newCityList:{
       A:[{
          acronym: "dl",
        }]
      },
      provinceName:[]
    };
  },
  created(){
      var self = this;
     api.getProvinceList().then((res)=>{
             this.provinceName = res.data.data;
              this.provinceName.forEach((item,index)=>{
             
              item.cityInfoList.forEach(ele =>{
              self.cityList.push(ele)
           })
         })
          self.cityList.forEach((ele,index)=>{
          if(!self.newCityList[ele.firstChar]){
             self.newCityList[ele.firstChar] = [];
          }
             self.newCityList[ele.firstChar].push(ele);
          
      })
     })
        
      console.log(this.newCityList)
    },
  }
</script>

<style scoped>
.container {
  width: 100%;
}
.container .header {
  width: 100%;
  height: 60px;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
.container .header .number {
  display: inline-block;
  font-size: 14px;
  width: 18px;
  height: 18px;
  margin-top: 18px;
  line-height: 18px;
  border-radius: 50%;
  text-align: center;
}
.container .header .number:hover {
  background-color: #ccc;
}
.container .header .name {
  font-size: 16px;
  font-weight: bold;
  line-height: 60px;
  margin: 0 10px 0 0;
}
.cityName {
  width: 100%;
  min-height: 100px;
  text-align: left;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  box-sizing: border-box;
}
.cityName .firstPin{
    width:40px;
    height:100px;
}
.cityName .cityDetail{
    flex:1;
    padding:5px 10px;
    border-bottom:1px solid #ccc;
    text-align:left;
}
.cityName .cityDetail span{
    display: inline-block;
     margin:5px 10px;
     padding:10px 0px;
}
.cityName .cityDetail span:hover{
  color: #13d1be;
  cursor: pointer;
}
.cityName:hover {
  background: #eee;
}
.cityName .number {
  display: inline-block;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  font-weight: bold;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #fff;
  background-color: #13d1be;
}
</style>
