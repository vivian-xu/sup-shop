<template>
  <div class="bottom-bar">
    <div class="block"></div>
    <ul class="inner clearfix">
      <li>
        <a v-link="{ name: 'trips' }">
          <div class="icon icon-trip"></div>
          <div class="text">路线</div>
        </a>
      </li>
      <li>
        <a v-link="{ name: 'equipments' }">
          <div class="icon icon-ship"></div>
          <div class="text">装备</div>
        </a>
      </li>
      <li>
        <a v-link="{ name: 'trainings' }">
          <div class="icon icon-training"></div>
          <div class="text">培训</div>
        </a>
      </li>
      <li>
        <a v-link="{ name: 'cart' }">
          <div class="icon icon-cart"></div>
          <div class="text">购物车</div>
        </a>
      </li>
      <li>
        <a v-link="{ name: 'profile' }">
          <div class="icon icon-profile"></div>
          <div class="text">我的</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";

  .bottom-bar {
    width: 100%;
    height: px2rem(49px);
    .block {
      height: 100%;
      width: 100%;
    }
    .inner {
      position: fixed;
      width: 100%;
      height: px2rem(49px);
      bottom: 0;
      left: 0;
      background: #fff;
      border-top: 1px solid $color-text-second;
      li {
        float: left;
        width: 20%;
        text-align: center;
        a {
          display: block;
          color: $color-text;
          &.link-active {
            color: $color-main;
          }
        }
        .icon {
          margin: px2rem(6px) 0 px2rem(4px) 0;
          font-size: px2rem(24px);
        }
        .text {
          font-size: px2rem(12px);
          line-height: 1;
          transform: scale(0.8333);
        }
      }
    }
  }
</style>
