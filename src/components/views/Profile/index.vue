<template>
  <div class="view-profile">
    <div class="box-info">
      <div class="avatar"><div class="inner" v-lazy:background-image="'http://qiutc.me/img/qtc_avatar.jpg'"></div></div>
      <div class="name">用户名称</div>
    </div>
    <div class="box-entry">
      <h3 class="title">我的收藏</h3>
      <ul>
        <li>
          <a v-link="#">
            <div class="text">路线</div>
            <div class="dot-tip"></div>
            <div class="icon icon-unflod"></div>
            <div class="num">11</div>
          </a>
        </li>
        <li>
          <a v-link="#">
            <div class="text">装备</div>
            <div class="icon icon-unflod"></div>
            <div class="num">11</div>
          </a>
        </li>
        <li>
          <a v-link="#">
            <div class="text">训练</div>
            <div class="icon icon-unflod"></div>
            <div class="num">11</div>
          </a>
        </li>
      </ul>
    </div>
    <div class="box-entry">
      <h3 class="title">订单</h3>
      <ul>
        <li>
          <a v-link="#">
            <div class="text">全部订单</div>
            <div class="dot-tip"></div>
            <div class="icon icon-unflod"></div>
            <div class="num">11</div>
          </a>
        </li>
        <li>
          <a v-link="#">
            <div class="text">未付款订单</div>
            <div class="icon icon-unflod"></div>
            <div class="num">11</div>
          </a>
        </li>
        <li>
          <a v-link="#">
            <div class="text">已付款订单</div>
            <div class="icon icon-unflod"></div>
            <div class="num">11</div>
          </a>
        </li>
        <li>
          <a v-link="#">
            <div class="text">待收货订单</div>
            <div class="icon icon-unflod"></div>
            <div class="num">11</div>
          </a>
        </li>
        <li>
          <a v-link="#">
            <div class="text">已完成订单</div>
            <div class="icon icon-unflod"></div>
            <div class="num">11</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    attached () {
      document.title = 'profile';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-profile {
    .box-info {
      width: 100%;
      height: px2rem(110px);
      background: #fff;
      padding-top: px2rem(22px);
      .avatar {
        float: left;
        width: px2rem(66px);
        height: px2rem(66px);
        margin: 0 px2rem(25px) 0 px2rem(10px);
        border-radius: px2rem(35px);
        overflow: hidden;
        background: $color-img-bg-default;
        .inner {
          position: relative;
          width: 100%;
          height: 100%;
          background: $color-img-bg-default;
          background-position: center;
          background-size: cover;
          &[lazy=loading] {
            background: $color-img-bg-default !important;
          }
          &[lazy=error] {
            background: $color-img-bg-error !important;
            color: $color-img-text-error;
            &:after {
              content: '\e920';
              position: absolute;
              display: block;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              line-height: px2rem(66px);
              text-align: center;
              font-family: 'icomoon' !important;
              speak: none;
              font-style: normal;
              font-weight: normal;
              font-variant: normal;
              text-transform: none;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              font-size: px2rem(27px);
            }
          }
        }
      }
      .name {
        float: left;
        font-size: px2rem(20px);
        font-weight: bold;
        color: $color-text;
        margin-top: px2rem(23px);
      }
    }
    .box-entry {
      width: 100%;
      .title {
        font-weight: normal;
        height: px2rem(35px);
        line-height: px2rem(35px);
        font-size: $font-size-h3;
        color: $color-text;
        padding-left: px2rem(12px);
      }
      ul {
        li {
          width: 100%;
          height: px2rem(47px);
          line-height: px2rem(47px);
          padding: 0 px2rem(14px) 0 px2rem(11px);
          background: #fff;
          a {
            display: block;
            width: 100%;
            height: 100%;
            border-bottom: 1px solid $color-line;
          }
          .text {
            float: left;
            color: $color-text;
            font-size: px2rem(16px);
          }
          .dot-tip {
            float: left;
            margin: px2rem(20px) 0 0 px2rem(8px);
            width: px2rem(6px);
            height: px2rem(6px);
            border-radius: px2rem(10px);
            background: red;
          }
          .icon {
            float: right;
            margin: px2rem(15px) px2rem(2px) 0 0;
            color: $color-icon-second;
            font-size: px2rem(18px);
            font-weight: bold;
            transform: rotate(270deg);
          }
          .num {
            float: right;
            color: $color-text-second;
            font-size: px2rem(12px);
            margin-right: px2rem(18px);
          }
          &:last-child {
            a {
              border-bottom: 0;
            }
          }
        }
      }
    }
  }
</style>
