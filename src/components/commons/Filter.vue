<template>
  <section class="filter">

    <button
      class="filter-button"
      @click.prevent="handleToggle"
    >
      筛选<i class="icon icon-filter"></i>
    </button>

    <div class="filter-wrap">
      <div class="mask" v-show="show" @click.prevent="handleToggle"></div>
      <div class="filter-inner" v-if="show" transition="show-filter">
        <div class="filter-content">
          <div v-for="item in datas" class="filter-item">
            <h2 class="filter-item-title">{{item.display}}</h2>
            <ul class="clearfix">
              <li
                v-for="choice in item.choices"
                @click='handleClickItem(item.key, choice.id)'
                :class="[querys[item.key] == choice.id ? 'active' : '']"
              >
                {{item.display}}
              </li>
            </ul>
          </div>
        </div>
        <div class="button-group clearfix">
          <button class="btn-reset" @click="handleReset" :disabled="posted">重置</button>
          <button class="btn-confirm" @click="handlePost" :disabled="posted">确定</button>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        changed: false,
        querys: {}
      };
    },

    props: {
      callback: {
        type: Function
      },
      filterKey: {
        type: Object,
        required: false,
        default: () => {}
      },
      datas: {
        type: Array,
        required: false,
        default: () => ([
          {
            'key': 'a',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'b',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'c',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'd',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'e',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'f',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'g',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'h',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'i',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          }
        ])
      }
    },

    attached () {
      this.querys = Object.assign({}, this.filterKey);
    },

    methods: {
      handleToggle () {
        this.show = !this.show;
      },

      handleClickItem (key, value) {
        if (!this.querys[key] || this.querys[key].toString() !== value.toString()) {
          this.changed = true;
        }
        this.querys = Object.assign({}, this.querys, {
          [key]: value
        });
      },

      handleReset () {
        this.changed = true;
        for (var key in this.querys) {
          if (this.querys.hasOwnProperty(key)) {
            this.querys[key] = 0;
          };
        };
      },

      handlePost () {
        if (!this.changed) {
          this.show = false;
          return false;
        }
        this.changed = false;
        this.callback && this.callback(this.querys);
        this.$nextTick(() => {
          this.show = false;
        });
        return true;
      }
    }
  };
</script>

<style lang="scss" scoped >
  @import "../../assets/styles/variables.scss";

  .filter {
    display: inline-block;
    position: relative;
    .filter-button {
      height: px2rem(35px);
      line-height: px2rem(35px);
      font-size: px2rem(15px);
      color: $color-text;
      .icon {
        position: relative;
        padding-left: px2rem(3px);
        top: 1px;
      }
    }
    .mask {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: px2rem(49px);
      z-index: 88;
    }
    .filter-inner {
      z-index: 99;
      position: fixed;
      width: px2rem(336px);
      padding-bottom: px2rem(44px);
      top: 0;
      right: 0;
      bottom: px2rem(49px);
      background: #fff;
      &.show-filter-transition {
        right: px2rem( -336px );
        transition: all .3s ease;
        transform: translateX( px2rem( -336px ) );
      }
      &.show-filter-enter,
      &.show-filter-leave {
        transform: translateX(0);
      }
    }

    .filter-content {
      width: 100%;
      height: 100%;
      padding: 0 px2rem(10px);
      overflow: auto;
      .filter-item {
        border-bottom: 1px solid $color-line;
        h2 {
          margin: 0;
          padding: px2rem(20px) 0 px2rem(10px) 0;
          line-height: 1;
          font-size: px2rem(15px);
          font-weight: normal;
        }
        & > ul li {
          float: left;
          min-width: 25%;
          padding: px2rem(10px) 0;
          font-size: px2rem(10px);
          line-height: 1;
          color: $color-text;
          &.active {
            color: $color-main;
          }
        }
      }
    }

    .button-group {
      position: absolute;
      width: 100%;
      bottom: 0;

      button {
        float: left;
        display: block;
        width: 50%;
        height: px2rem(44px);
        font-size: $font-size-btn;

        &.btn-confirm {
          color: #fff;
          background-color: $color-main;
          border-top: 1px solid $color-main;
          &:active {
            background-color: $color-main-active;
          }
        }
        &.btn-reset {
          border-top: 1px solid $color-line;
          background-color: #fff;
          color: $color-text;
          &:active {
            background-color: darken(#fff, 10%);
          }
        }
      }
    }
  }

  // .show-filter-transition {
  //   right: px2rem( -336px );
  //   transition: all .3s ease;
  //   transform: translateX( px2rem( -336px ) );
  // }
  //
  // .show-filter-enter,
  // .show-filter-leave {
  //   transform: translateX(0);
  // }
  //
  // .tooltip {
  //   height: px2rem( 35px );
  //   padding: px2rem( 10px );
  //   color: $color-text;
  //   font-size: $font-size-h3;
  //
  //   .filter-button {
  //     float: right;
  //   }
  //
  //   .icon-filter {
  //     margin-left: px2rem( 5px );
  //     font-size: $font-size-h3;
  //   }
  // }
  //
  // .filter-wrap {
  //   position: fixed;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   background-color: $color-bg-wrap;
  //   z-index: 5;
  // }
  //
  // .items-block,
  // .button-block {
  //   position: fixed;
  //   bottom: px2rem( 48px + 1px );
  //   width: px2rem( 336px );
  // }
  //
  // .items-block {
  //   top: 0;
  //   z-index: 9;
  //   // button-block 高度 -1 (border)
  //   padding-bottom: px2rem( 43px );
  //   overflow: auto;
  //   background-color: #fff;
  // }
  //
  // .button-block {
  //   z-index: 10;
  //   color: $color-text;
  //   font-size: 0;
  //
  //   button {
  //     display: inline-block;
  //     width: 50%;
  //     height: px2rem( 44px );
  //     font-size: $font-size-btn;
  //
  //     border: 0;
  //     outline:none;
  //     -webkit-appearance: none;
  //
  //     background-color: #fff;
  //     border-top: 1px solid #c8c8c8;
  //
  //     &.confirm {
  //       color: #fff;
  //       background-color: $color-main;
  //
  //       &:active {
  //         background-color: $color-main-active;
  //       }
  //     }
  //   }
  // }
  //
  // .item-filter {
  //   margin: 0 px2rem( 10px );
  //   border-bottom: 1px solid #c8c8c8;
  //
  //   h2 {
  //     padding: px2rem(20px) 0 px2rem(10px);
  //     font-size: px2rem(15px);
  //   }
  //
  //   &>ul li {
  //     float: left;
  //     min-width: 25%;
  //     margin: px2rem( 10px ) 0;
  //     font-size: px2rem( 10px );
  //     line-height: 1;
  //
  //     &.active {
  //       color: $color-main;
  //     }
  //   }
  // }
</style>
