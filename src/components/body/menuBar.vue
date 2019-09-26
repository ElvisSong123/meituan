<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(item)">
                <i :class="item.type"></i>
                {{item.name}}
                <span class="arrow"></span>
            </dd>
        </dl>
        <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
            <template v-for="(item, index) in curDetail.children" >
                <h4 :key="index">{{item.title}}</h4>
                <span v-for="(v, i) in item.children" :key="v + '_'+ i">{{v}}</span>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            curDetail: null,
            menuList: [
                {
                    name:"美食",
                    type:'food',
                    children:[{
                        title:'美食',
                        children:['代金券','甜点','饮品','火锅','自助餐','小吃','快餐','日韩料理','西餐聚餐','宴请']

                    }]
                },
                {
                    name:"外卖",
                    type:'takeout',
                    children:[{
                        title:'外卖',
                        children:['美团外卖']

                    }]
                },
                {
                    name:"酒店",
                    type:'hotel',
                    children:[{
                        title:'酒店星级',
                        children:['代金券','甜点','饮品','火锅','自助餐','小吃','快餐','日韩料理','西餐聚餐','宴请']

                    }]
                }
            ]
        }
    },
    methods: {
        menuEnter(item) {
            console.log(item);
            this.curDetail = item;
        },
        menuLeave() {
            var self = this;
            this.timer = setTimeout(function () {
                self.curDetail = null;
            }, 200);

        },
        detailEnter() {
            clearTimeout(this.timer);
        },
        detailLeave() {
            this.curDetail = null;
        }
    }
}
</script>



<style lang="scss" scoped>
    .m-menu {
      dt {
        height: 50px;
        padding-top: 15px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 400;
        margin-left: 15px;
        margin-bottom: 10px;
      }

      dd {
        position: relative;
        box-sizing: border-box;
        padding: 2px 12px;
        height: 26px;
        cursor: pointer;

        &:hover{
          background: rgba(255, 255, 255, .2);
            &>i:after{
            opacity: 1;
          }
        }
      }
    
      .nav {
        font-size: 13px;
        dd>i {
          font-family: 'meituan';
          font-size: 16px;
          font-style: normal;
          opacity: 0.3;
          margin-right: 11px;

          &:before {
            width: 14px;
            height: 14px;
            display: inline-block;
          }
        }

        .food {
          &:before {
            content: "\e659";
          }
          &:hover{
              opacity: 1;
          }
        }
    
        .takeout {
          &:before {
            content: "\e625";
          }
        }

        .hotel {
          &:before {
            content: "\e60a";
          }
        }

        .homestay {
          &:before {
            content: "\e631";
          }
        }

        .movie {
          &:before {
            content: "\e62c";
            position: relative;
            left: -2px;
          }
        }

        .airport {
          &:before {
            content: "\e632";
          }
        }

        .ktv {
          &:before {
            content: "\e627";
          }
        }

        .life {
          &:before {
            content: "\e633";
          }
        }

        .hair {
          &:before {
            content: "\e626";
            transform: scale(0.7);
          }
        }

        .marry {
          &:before {
            content: "\e629";
          }
        }

        .offspring {
          &:before {
            content: "\e623";
          }
        }

        .sport {
          &:before {
            content: "\e62b";
          }
        }

        .furniture {
          &:before {
            content: "\e625";
          }
        }

        .study {
          &:before {
            content: "\e624";
          }
        }

        .health {
          &:before {
            content: "\e628";
          }
        }

        .bar {
          &:before {
            content: "\e621";
          }
        }

        .arrow {
          width: 4px;
          height: 4px;
          border-bottom: 1px solid #fff;
          border-right: 1px solid #fff;
          transform: rotate(-45deg);
          display: block;
          position: absolute;
          right: 13px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }

      .detail {
        padding: 0 30px;
        position: absolute;
        left: 220px;
        bottom: 0;
        width: 400px;
        height: 416px;
        background: #fff;
        z-index: 9999;

        h4 {
          font-size: 16px;
          font-weight: 500;
          margin-top: 24px;
          height: 22px;
          line-height: 22px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e5e5e5;
          color: #222;
        }

        span {
          color: #999;
          font-size: 12px;
          line-height: 15px;
          display: inline-block;
          margin-right: 16px;
          margin-top: 10px;
          cursor: pointer;

          &:hover {
            color: #31BBAC;
          }
        }
      }
    }
    .slide {
      height: 240px;
      // width: 540px;
      margin: 10px;

      img {
        height: 240px;
      }
    }


.m-header {
  .search-panel {
    padding-bottom: 35px;
  }
}
</style>

