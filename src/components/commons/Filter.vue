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
                {{choice.display}}
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
        default: () => []
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
</style>
