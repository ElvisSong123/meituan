<template>
    <div class="wrapper">
        <el-select v-model="value" :placeholder="myselect" class ="el-select" @change="choosePro">
            <el-option
            v-for="(item,index) in myProvince"
             :key="item.provinceCode || item.id"
            :label="item.provinceName || item.name"
            :value="index">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    props:['myselect','myProvince'],
    data(){
       return {
        cities: [],
        value:''
       }
   },
   methods:{
     choosePro(){
       this.$emit('chooseCity',this.value)
     }
   }
}
</script>

<style scoped>
   
    .el-select-dropdown{
        top:211px;
    }
</style>
