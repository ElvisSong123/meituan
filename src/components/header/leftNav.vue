<template>
    <div class="leftNav">
        <span class="posi">
            <i class = "el-icon-location"></i>
            {{$store.state.position}}
        </span>
        <router-link class = "changecity" :to="{name:'chooseCity'}">切换城市</router-link>
        <div class="localcity">
             [
                <router-link class = "downcity" :to="{name:'downCity'}">临澧</router-link>
                <router-link class = "downcity" :to="{name:'downCity'}">石门</router-link>
                <router-link class = "downcity" :to="{name:'downCity'}">公安</router-link>
            ]
        </div>
       <div class="user">
           <router-link class = "login" :to="{name:'login'}" v-if="!$store.state.alreadyLogin">立即登陆</router-link>
           <router-link class = "register" :to="{name:'register'}" v-if="!$store.state.alreadyLogin">注册</router-link>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .leftNav{
        text-align: left;
        
    }
    .posi{
        margin-right:3px;
        color:#000
    }
    .localcity,.user{
        display:inline-block
    }
    .user{
        margin-left:12px;
    }
    .downcity,.changecity,.user a{
        color:#999;
        text-decoration: none;
        padding:0 3px
    }
    .user .login{
        color:#31BBAC
    }
    .changecity{
        border:1px solid #ccc;
        color:#333
    }
</style>


