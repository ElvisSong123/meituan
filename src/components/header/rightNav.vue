<template>
  <div class="rightNav">
    <ul class="myApp">
      <li class="myMT">
        <router-link to="/">我的美团</router-link>
        <dl>
          <dd>
            <router-link to="/">我的订单</router-link>
          </dd>
          <dd>
            <router-link to="/">我的收藏</router-link>
          </dd>
          <dd>
            <router-link to="/">抵用卷</router-link>
          </dd>
          <dd>
            <router-link to="/">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li class="myMT">
        <router-link to="/">手机app</router-link>
      </li>
      <li class="myMT">
        <router-link to="/">商家中心</router-link>
        <dl>
          <dd>
            <router-link to="/">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link to="/">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link to="/"> 我想合作</router-link>
          </dd>
          <dd>
            <router-link to="/">手机免费开店</router-link>
          </dd>
          <dd>
            <router-link to="/">餐饮代理商招募</router-link>
          </dd>
          <dd>
            <router-link to="/">商家申请开票</router-link>
          </dd>
          <dd>
            <router-link to="/">免费合作美团排队</router-link>
          </dd>
        </dl>
      </li>
      <li class="myMT">
        <router-link to="/">美团规则</router-link>
        <dl>
          <dd>
            <router-link to="/">规则中心</router-link>
          </dd>
          <dd>
            <router-link to="/"> 规则目录</router-link>
          </dd>
          <dd>
            <router-link to="/">规则评议院</router-link>
          </dd>
        </dl>
      </li>
      <li class="myMT">
        <router-link to="/">网站导航</router-link>
        <dl>
          <dd>
            <router-link to="/">我的订单</router-link>
          </dd>
          <dd>
            <router-link to="/">我的收藏</router-link>
          </dd>
          <dd>
            <router-link to="/">抵用卷</router-link>
          </dd>
          <dd>
            <router-link to="/">账户设置</router-link>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>

.rightNav {

  text-align: right;

}
  .myApp li {
  height: 100%;
  display: inline-block;
  /* border:1px solid black; */
  padding: 0 12px;

  position: relative;
  }
.myApp li dl{
    box-shadow: 0 3px 3px 1px #eee;
    display:none;
    position: absolute;
    top:40px;
    line-height: 0px;
    text-align:center;
    background-color:#fff;
    z-index:111;
}
.myApp li:hover{
    box-shadow: 0 -3px 3px 1px #eee;
    background-color:#fff
}
.myApp li a:hover{
  color:#31BBAC
}
.myApp li:nth-of-type(1):hover dl{
  display: block;
}
.myApp li:nth-of-type(2):hover{
  background-color:#F8F8F8;
  box-shadow: none
}
.myApp li:nth-of-type(3):hover dl{
  display: block;
}
.myApp li:nth-of-type(4):hover dl{
  display: block;
}
.myApp li:nth-of-type(5):hover dl{
  display: block;
}
.myApp li:nth-of-type(1) dl{
     left:0px;
    width:100%;
}
.myApp li:nth-of-type(3) dl{
    right:0px;
    width:120px;
}
.myApp li:nth-of-type(4) dl{
    right:0px;
    width:100%;
}
.myApp li:nth-of-type(5) dl{
    width:1200px;
    right:0px;
}
.myApp li dl dd{
    padding:18px 0px;
}

</style>
