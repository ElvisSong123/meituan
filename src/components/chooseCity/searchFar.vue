<template>
    
        <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
 
</template>

<script>
export default {
    data(){
        return {
            searchList:['北京','上海'],
            searchWord:'',
            loading:false,
            searchable:true,
            states:['北京','上海','广州','深圳','天津']
        }
    },
    methods:{
        remoteMethod(e){
        console.log(e)
    }
    }
    
}
</script>

<style scoped>
    .container{
        width:30%;
        display: inline-block;
    }
</style>
