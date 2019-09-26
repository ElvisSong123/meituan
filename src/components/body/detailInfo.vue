<template>
  <div class="wrapper">
    <div class="top-side">
      <dl @mouseover="changeActive">
        <dt>有格调</dt>
        <dd :class="{active:kind === 'all'}" data-type = 'all'>全部</dd>
        <dd :class="{active:kind === 'party'}" data-type = "party">约会聚餐</dd>
        <dd :class="{active:kind === 'spa'}" data-type = "spa">丽人SPA</dd>
        <dd :class="{active:kind === 'movie'}" data-type = "movie">电影演出</dd>
        <dd :class="{active:kind === 'traval'}" data-type = "traval">品质出游</dd>
      </dl>
    </div>
    <div class="bottom-side">
    <ul class="ibody">
      <li v-for="(item, index) in resultsData" :key="index" @click='showDetail'>
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <span class="old-price">{{item.oldPrice}}</span>
               <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
       
          </div>
        </el-card>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
    props:[

    ],
    data(){
        return {
            kind:'all',
            resultsData:[
                {
                    image:'https://p1.meituan.net/msmerchant/edabcb17c64d979c2bebf568dab11598116805.jpg@368w_208h_1e_1c',
                    title:'中央电视塔空中观景旋转餐厅',
                    sub_title:'午餐+观光',
                    price:'248',
                    oldPrice:'门市价¥268',
                    address:'航天桥'
                },
                 {
                    image:'https://p0.meituan.net/msmerchant/f1f25e0a9f3876b1d7dfda6bdd7682f1271076.jpg@368w_208h_1e_1c',
                    title:'幸福西饼生日蛋糕（朝阳店）',
                    sub_title:'天天好吃花镜1个，约850克，圆形',
                    price:'139',
                    oldPrice:'门市价¥189',
                    address:'朝阳区'
                },
                {
                    image:'https://p0.meituan.net/msmerchant/1a8aaac8cfcf76fae83c2ecd6405bd4c1457315.jpg@368w_208h_1e_1c',
                    title:'北京饭店阳光咖啡厅',
                    sub_title:'特价自助晚餐',
                    price:'238',
                    oldPrice:'门市价¥298',
                    address:'王府井/东单'
                }
            ]
        }
    },
    methods:{
        changeActive(e){
           let type = e.target.getAttribute('data-type');
           this.kind = type
        },
        showDetail(){
          this.$router.push('/productDetail')
        }
    }
};
</script>


<style lang ="scss" scoped>
.wrapper {
  width: 100%;
  margin-top:20px;
}
.wrapper .top-side {
  width: 100%;
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  font-size: 14px;
  color: #fff;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: rgb(190, 164, 116);
  background-image: linear-gradient(
    to right,
    rgb(194, 176, 142) 3%,
    rgb(190, 164, 116) 100%
  );
}
.top-side dl{
    width:100%;
    height:100%;
    display:flex;
    justify-content: left;
}
.top-side dl dt{
    height: 100%;
    padding:0 15px;

}
.top-side dl dd{
    height:100%;
    margin:0 5px;
}
.top-side dl dd.active{
    position:relative;
}
.top-side dl dd.active::after{
    content:'';
    display:inline-block;
    position:absolute;
    bottom:0px;
    left:50%;
    transform: translate(-50%);
    width:0px;
    height:0px;
    border:10px solid #fff;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    
}


.ibody {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    width: 100%;
    padding: 11px 10px 10px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-sizing: border-box;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;

    >li {
      width: 33.3%;
      height: 314px;
      padding:5px 10px;
      box-sizing: border-box;
      float: left;
      background: #fff;
      transition: background-color .5s;
      height: 314px;

      .el-card {
        width: 100%;
        height: 100%;
        border: none;
        overflow: visible;
        background-color: transparent;
        img {
          max-width: 100%;
          width: 100%;
          height: 208px;
          margin-bottom: 11px;
          cursor: pointer;
        }

        .el-card__body {
          .cbody {
            list-style: none;
            text-align: left;
            .title {
              font-size: 16px;
              color: #222;
              height: 22px;
              line-height: 22px;
              margin-bottom: 8px;
              font-weight: 500;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              cursor: pointer;
            }
            .sub-title {
              font-size: 12px;
              color: #999;
              line-height: 18px;
              height: 18px;
              margin-bottom: 7px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .price-info {
              height: 27px;
              overflow: hidden;
              margin-bottom: 10px;
              .price-symbol {
                  font-size: 14px;
                  color: #BE9E4D;
                  font-weight: 500;
              }
              .current-price {
                  font-size: 22px;
                  color: #BE9E4D;
                  margin-right: 6px;
                  letter-spacing: -.8px;
                  cursor: pointer;
              }
              .old-price {
                  font-size: 12px;
                  color: #999;
                  text-decoration: line-through;
              }
              .sold {
                font-size: 12px;
                color: #999;
                float: right;
                margin-top: 10px;
              }
              .units {
                color: #BE9E4D;
                cursor: pointer;
                font-size: 12px;
              }
            }
            .pos {
              font-size: 12px;

              span {
                height: 18px;
                line-height: 18px;
                text-align: left;
                border: 1px solid #d8d8d8;
                border-radius: 2px;
                margin-right: 10px;
                margin-bottom: 5px;
                padding: 0 3px;
              }
            }

            .price {
              height: 27px;
              overflow: hidden;
              margin-bottom: 10px;
              font-size: 14px;
              color: #BE9E4D;
              font-weight: 500;

              em {
                font-size: 22px;
                color: #BE9E4D;
                margin-right: 6px;
                letter-spacing: -.8px;
                cursor: pointer;
                font-style: normal;
              }

              span {
                font-size: 12px;
                letter-spacing: -.6px;
              }
            }
          }
        }
      }

      &:hover {
        background: #F4F4F4;
        transition: background-color .5s;
        border-radius: 4px;
      }
    }
  }


</style>
