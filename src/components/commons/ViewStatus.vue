<template>
  <div class="view-status">
    <div :class="['inner', 'inner-' + type]">
      <div :class="['icon', icon]"></div>
      <div class="text">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {};
    },
    props: {
      status: {
        type: String,
        required: true,
        default: 'loading'
      }
    },
    computed: {
      type: function () {
        if (this.status === 'loading') {
          return 'loading';
        }
        return 'error';
      },
      icon: function () {
        if (this.status === 'loading') {
          return 'icon-loading';
        }
        return 'icon-load-error';
      },
      text: function () {
        if (this.status === 'loading') {
          return '加载中...';
        }
        if (this.status === 'empty') {
          return '这里空空如也';
        }
        if (this.status === '404' || this.status === '500') {
          return '貌似出了一点问题......';
        }
        return '貌似出了一点问题......';
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";

  .view-status {
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    // height: 100%;
    position: fixed;
    .inner {
      position: absolute;
      width: 100%;
      height: auto;
      top: 50%;
      left: 0;
      text-align: center;
      color: $color-main;
    }
    .inner-loading {
      margin-top: px2rem(-140px);
      .icon-loading {
        font-size: px2rem(180px);
        margin-bottom: px2rem(0);
      }
      .text {
        line-height: 1;
        font-size: px2rem(20px);
        position: relative;
        top: px2rem(-20px);
      }
    }
    .inner-error {
      margin-top: px2rem(-80px);
      .icon-load-error {
        font-size: px2rem(78px);
        margin-bottom: px2rem(36px);
      }
      .text {
        font-size: px2rem(20px);
        line-height: 1;
      }
    }
  }
</style>
