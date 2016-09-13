<template>
  <section id="filter" class="filter">
    <div class="clearfix tooltip">
      <span>装备</span>
      <span class="filter-button" @click.prevent="showFilters">筛选<i class="icon-filter"></i></span>
    </div>
    <div class="filter-wrap" v-show="showFilter" @click.prevent="showFilters"></div>
    <div class="items-block" :class="{'show': showFilter}">
      <div v-for="filterItems in datas" class="item-filter">
        <h2>{{filterItems.display}}</h2>
        <ul  class="clearfix">
          <li v-for="item in filterItems.choices" :class="{'active': $index==filterKey[filterItems.key]}" @click='addFilters(filterItems.key, item.id)'  >{{item.display}}</li>
        </ul>
      </div>
    </div>
    <div class="button-block" :class="{'show': showFilter}">
      <button @click="resetFilter" :disabled="posted">重置</button>
      <button class="confirm" @click="postFilter" :disabled="posted">确定</button>
    </div>
  </section>
</template>

<script>
  export default {
    replace: true,
    // props: ['showFilter', filterKey, datas],
    data () {
      console.log('data');
      return {
        showFilter: false,
        topic: this.$route.name,
        filterKey: {},
          // 'Category': 0,
          // 'level': 0
          //  筛选提交情况
        posted: false,
        datas:
          [{
            'key': 'Category',
            'display': '线路类型',
            'choices': [
              {'id': 0, 'display': '不限'},
              {'id': 1, 'display': 'kayak独木舟'},
              {'id': 2, 'display': 'canoe划艇'},
              {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'level',
            'display': '难度系数',
            'choices': [
              {'id': 0, 'display': '不限'},
              {'id': 1, 'display': '一星'},
              {'id': 2, 'display': '二星'},
              {'id': 3, 'display': '三星'},
              {'id': 4, 'display': '四星'},
              {'id': 5, 'display': '五星'}
            ]
          },
          {
            'key': 'level',
            'display': '难度系数',
            'choices': [
              {'id': 0, 'display': '不限'},
              {'id': 1, 'display': '一星'},
              {'id': 2, 'display': '二星'},
              {'id': 3, 'display': '三星'},
              {'id': 4, 'display': '四星'},
              {'id': 5, 'display': '五星'}
            ]
          },
          {
            'key': 'level',
            'display': '难度系数',
            'choices': [
              {'id': 0, 'display': '不限'},
              {'id': 1, 'display': '一星'},
              {'id': 2, 'display': '二星'},
              {'id': 3, 'display': '三星'},
              {'id': 4, 'display': '四星'},
              {'id': 5, 'display': '五星'}
            ]
          },
          {
            'key': 'level',
            'display': '难度系数',
            'choices': [
              {'id': 0, 'display': '不限'},
              {'id': 1, 'display': '一星'},
              {'id': 2, 'display': '二星'},
              {'id': 3, 'display': '三星'},
              {'id': 4, 'display': '四星'},
              {'id': 5, 'display': '五星'}
            ]
          },
          {
            'key': 'level',
            'display': '难度系数',
            'choices': [
              {'id': 0, 'display': '不限'},
              {'id': 1, 'display': '一星'},
              {'id': 2, 'display': '二星'},
              {'id': 3, 'display': '三星'},
              {'id': 4, 'display': '四星'},
              {'id': 5, 'display': '五星'}
            ]
          },
          {
            'key': 'level',
            'display': '难度系数',
            'choices': [
              {'id': 0, 'display': '不限'},
              {'id': 1, 'display': '一星'},
              {'id': 2, 'display': '二星'},
              {'id': 3, 'display': '三星'},
              {'id': 4, 'display': '四星'},
              {'id': 5, 'display': '五星'}
            ]
          },
          {
            'key': 'level',
            'display': '难度系数',
            'choices': [
              {'id': 0, 'display': '不限'},
              {'id': 1, 'display': '一星'},
              {'id': 2, 'display': '二星'},
              {'id': 3, 'display': '三星'},
              {'id': 4, 'display': '四星'},
              {'id': 5, 'display': '五星'}
            ]
          }
          ]
      };
    },

    // 设置 filterKey, 若 route.query 没有的话，设置每一项默认值都为 0
    activate: function (done) {
      console.log('activate function');
      let temp = {};
      if (Object.keys(this.$route.query).length === 0) {
        for (var data of this.datas) {
          let {key} = data;
          temp[key] = 0;
        };
      } else {
        temp = this.$route.query;
      }
      this.filterKey = temp;
      done();
    },

    methods: {
      showFilters () {
        this.showFilter = !this.showFilter;
      },

      addFilters (key, value) {
        if (!this.posted) {
          this.filterKey[key] = value;
        }
      },

      resetFilter () {
        for (var key in this.filterKey) {
          if (this.filterKey.hasOwnProperty(key)) {
            this.filterKey[key] = 0;
          };
        };
      },

      // 确定筛选选项，若每一项都是 0 则 to -> /{name}
      // 否则 to -> /{name}?{query}
      // 数据请求在主页上请求
      postFilter () {
        let filterDefalut = true;
        for (var key in this.filterKey) {
          if (this.filterKey.hasOwnProperty(key) && this.filterKey[key] !== 0) {
            filterDefalut = false;
            break;
          };
        };
        if (filterDefalut) {
          this.$route.router.go({
            name: this.topic
          });
        } else {
          this.$route.router.go({
            name: this.topic,
            query: this.filterKey
          });
        };
        this.posted = true;
        setTimeout(() => {
          this.showFilter = false;
        }, 3000);
      }
    }
  };
</script>

<style lang="scss" scoped >
  @import "../../assets/styles/variables.scss";

  .tooltip {
    height: px2rem( 35px );
    padding: px2rem( 10px );
    color: $color-text;
    font-size: $font-size-h3;

    .filter-button {
      float: right;
    }

    .icon-filter {
      margin-left: px2rem( 5px );
      font-size: $font-size-h3;
    }
  }

  .filter-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $color-bg-wrap;
    z-index: 5;
  }

  .items-block,
  .button-block {
    position: fixed;
    right: px2rem( -336px );
    bottom: px2rem( 48px + 1px );
    width: px2rem( 336px );
    transition: all .3s ease;

    &.show {
      transform: translateX( px2rem( -336px ) );
    }
  }

  .items-block {
    top: 0;
    right: px2rem( -336px );
    z-index: 9;
    // button-block 高度 -1 (border)
    padding-bottom: px2rem( 43px );
    overflow: auto;
    background-color: #fff;
  }

  .button-block {
    z-index: 10;
    color: $color-text;
    font-size: 0;

    button {
      display: inline-block;
      width: 50%;
      height: px2rem( 44px );
      font-size: $font-size-btn;

      border: 0;
      outline:none;
      -webkit-appearance: none;

      background-color: #fff;
      border-top: 1px solid #c8c8c8;

      &.confirm {
        color: #fff;
        background-color: $color-main;

        &:active {
          background-color: $color-main-active;
        }
      }
    }
  }

  .item-filter {
    margin: 0 px2rem( 10px );
    border-bottom: 1px solid #c8c8c8;

    h2 {
      padding: px2rem(20px) 0 px2rem(10px);
      font-size: px2rem(15px);
    }

    &>ul li {
      float: left;
      min-width: 25%;
      margin: px2rem( 10px ) 0;
      font-size: px2rem( 10px );
      line-height: 1;

      &.active {
        color: $color-main;
      }
    }
  }
</style>
