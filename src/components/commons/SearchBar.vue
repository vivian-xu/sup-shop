<template>
  <div class="search-bar">
    <button class="search-btn" @click="handleShow">
      <i class="icon icon-search"></i>
    </button>
    <div class="search-wrap" v-show="show">
      <div class="mask"></div>
      <div class="search-inner">
        <div class="search-ipt-wrap">
          <input
            type="text"
            name="keyword"
            v-model="value"
            @keyup.enter="handleSubmit"
            autofocus
            v-el:search-input
          >
          <button type="button" @click="handleSubmit"><i class="icon icon-search"></i></button>
        </div>
        <button class="btn-cancel" @click="handleHide">
          取消
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: '',
        show: false
      };
    },
    props: {
      callback: {
        type: Function
      }
    },
    methods: {
      handleShow () {
        this.show = true;
        console.log();
        this.$nextTick(() => {
          this.$els.searchInput.focus();
        });
      },
      handleHide () {
        this.show = false;
      },
      handleSubmit () {
        this.callback && this.callback(this.value);
        this.handleHide();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";

  .search-bar {
    .search-btn {
      width: px2rem(45px);
      height: px2rem(45px);
      line-height: px2rem(45px);
      border-radius: px2rem(45px);
      text-align: center;
      font-size: px2rem(24px);
      color: #fff;
      background: $color-main;
      box-shadow: 0 1px 1px darken($color-main, 10%);
      i {
        position: relative;
        top: px2rem(2px);
      }
    }
    .search-wrap {
      // display: none;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #f2f2f2;
      }
      .search-inner {
        position: relative;
        width: 100%;
        height: px2rem(44px);
        background: #fff;
        padding: px2rem(7px) px2rem(80px) px2rem(7px) px2rem(10px);
        .search-ipt-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          input {
            width: 100%;
            height: 100%;
            background: $color-bg-search-input;
            outline: none;
            border: 0;
            box-shadow: 0;
            border-radius: px2rem(4px);
            padding: 0 px2rem(36px) 0 px2rem(10px);
          }
          button {
            width: px2rem(24px);
            height: px2rem(24px);
            font-size: px2rem(24px);
            position: absolute;
            top: px2rem(3px);
            right: px2rem(6px);
            color: $color-icon;
          }
        }
        .btn-cancel {
          position: absolute;
          top: px2rem(7px);
          right: px2rem(20px);
          font-size: px2rem(15px);
          line-height: px2rem(30px);
          color: $color-text;
        }
      }
    }
  }
</style>
