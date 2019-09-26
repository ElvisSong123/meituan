<template>
  <div class="footer">
    <div class="wrapper">
      <dl class="footerLeft">
        <dt></dt>
        <dd v-for="(item,index) in dataList1" :key="index">{{item}}</dd>
      </dl>
      <dl class="footerMiddLeft">
        <dt></dt>
        <dd v-for="(item,index) in dataList2" :key="index">{{item}}</dd>
      </dl>
      <dl class="footerMiddle">
        <dt></dt>
        <dd v-for="(item,index) in dataList3" :key="index">{{item}}</dd>
      </dl>
      <dl class="footerMiddRight">
        <dt></dt>
        <dd v-for="(item,index) in dataList4" :key="index">{{item}}</dd>
      </dl>
      <dl class="footerRight">
        <dt></dt>
        <dd v-for="(item,index) in dataList5" :key="index">{{item}}</dd>
      </dl>
    </div>
    <div class="bottomInfo">
      <p v-for="(item,index) in dataList5" :key="index">
        <a href="#">{{item}}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList1: [
        "用户帮助",
        "申请退款",
        "查看美团券密码",
        "常见问题",
        "用户协议",
        "隐私政策",
        "反诈骗公告",
        "消费者权益保障",
        "美团服务",
        "美团外卖",
        "美团酒店",
        "猫眼电影",
        "美团配送",
        "美团云",
        "大众点评",
        "榛果民宿",
        "无人配送"
      ],
      dataList2: [
        "商家合作",
        "美食商家入驻(非外卖)",
        "美团外卖开店申请",
        "美团收银官网",
        "外卖配送加盟申请",
        "美团点评餐饮学院",
        "酒店商家入驻",
        "境内度假商家入驻",
        "综合商家入驻",
        "榛果民宿房东商家入驻",
        "商家开票申请",
        "美团点评智能收银机",
        "聚宝盆餐饮开放平台",
        "美团点评收单",
        "免费使用美团排队",
        "快驴进货商家合作",
        "美团闪购商家入驻"
      ],
      dataList3: [
        "代理商加盟",
        "美团外卖代理商招募",
        "到店餐饮代理商招募",
        "非餐饮代理商招募",
        "美团联盟",
        "美团收银招募线上分销商",
        "美团点评5S服务商招募",
        "美团收单渠道代理商招募",
        "美团规则",
        "规则中心",
        "规则目录",
        "规则评议院"
      ],
      dataList4: [
        "关注美团",
        "美团新浪微博",
        "公司信息",
        "关于我们",
        "投资者关系",
        "加入我们",
        "商户诚信公约及管理办法",
        "保险经纪资质",
        "廉正举报",
        "廉政邮箱"
      ],
      dataList5: [
        "消费者服务热线",
        "外卖消费者：10109777",
        "猫眼消费者：10105335",
        "其他消费者：10107888",
        "商家服务热线",
        "外卖&餐饮商家：10105557",
        "休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107",
        "投诉举报热线",
        "违法和不良信息举报电话：4006018900",
        "举报邮箱：tousujubao@meituan.com",
        "商家自助入驻美团入口"
      ],
      dataList5: [
        "©美团网团购 meituan.com京ICP证070791号京ICP备10211739号",

        "广播电视节目制作经营许可证（京）字第03889号",

        "食品经营许可证互联网药品信息服务资格证",

        "医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号"
      ]
    };
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #f8f8f8;
  padding-top:30px;
}
 .wrapper {
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
.footer dl {
  display: inline-block;
  vertical-align: top;
  padding-bottom: 20px;
}
.footer dl dd {
  text-align: left;
  padding: 5px 0px;
}
.footer .footerLeft,
.footer .footerRight,
.footer .footerMiddLeft,
.footer .footerMiddle,
.footer .footerMiddRight {
  width: 16%;
}
.footer-copyright-left {
  float: left;
}
.footer-copyright-right {
  float: right;
  text-align: right;
}
.bottomInfo{
   margin-bottom:30px;
}
</style>
