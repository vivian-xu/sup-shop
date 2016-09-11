<template>
  <div class="item-card-equipment">
    <div class="inner">
      <div class="cover" v-lazy:background-image="'http://qiutc.me/img/qtdc_avatar.jpg'"></div>
      <div class="box-info">
        <div class="name">Naish 护腕</div>
        <div class="price">
          ¥ 59
        </div>
        <div class="tag-color" :style="{ background: '#000' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";

  .item-card-equipment {
    width: 50%;
    float: left;
    padding: 0 px2rem(5px) px2rem(10px) px2rem(5px);
    .inner {
      background: #fff;
    }
    .cover {
      position: relative;
      height: px2rem(185px);
      width: 100%;
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
          content: '\e91e';
          position: absolute;
          display: block;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          line-height: px2rem(185px);
          text-align: center;
          font-family: 'icomoon' !important;
          speak: none;
          font-style: normal;
          font-weight: normal;
          font-variant: normal;
          text-transform: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-size: px2rem(60px);
        }
      }
    }
    .box-info {
      position: relative;
      padding-bottom: px2rem(10px);
    }
    .name {
      padding: px2rem(10px) 0;
      text-align: center;
      font-size: px2rem(12px);
      color: $color-text;
      line-height: 1;
    }
    .price {
      text-align: center;
      font-size: px2rem(15px);
      color: $color-price-tag;
      line-height: 1;
      padding-bottom: px2rem(20px);
    }
    .tag-color {
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: px2rem(-65px / 2);
      width: px2rem(65px);
      height: px2rem(10px);
    }
  }
</style>
