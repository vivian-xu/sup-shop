<template>
  <div class="item-card-trip" v-link="{ name: 'tripDetail', params: { id: data.id } }">
    <div class="cover" v-lazy:background-image="data.cover"></div>
    <div class="name">{{ data.name }}</div>
    <div class="box-info clearfix">
      <div class="details clearfix">
        <div class="d-item start-date"><span class="icon icon-date"></span>{{ data.start }}</div>
        <div class="d-item duration"><span class="icon icon-time"></span>{{ data.duration }}</div>
        <div class="d-item available-count"><span class="icon icon-profile"></span>余{{ data.availableCount }}人</div>
      </div>
      <div class="price">
        ¥ {{ data.price }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        defalut: {}
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";

  .item-card-trip {
    width: 100%;
    background: #fff;
    margin-bottom: px2rem(10px);
    .cover {
      position: relative;
      height: px2rem(126px);
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
          line-height: px2rem(126px);
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
    .name {
      font-size: $font-size-h3;
      color: $color-text;
      line-height: 1;
      padding: px2rem(10px) 0 0 px2rem(10px);
    }
    .box-info {
      .details {
        float: left;
        color: $color-icon-second;
        margin: px2rem(10px) 0 px2rem(10px) px2rem(5px);
        .d-item {
          float: left;
          margin-right: px2rem(2px);
          line-height: 1;
          font-size: px2rem(12px);
          transform: scale(0.8333);
          .icon {
            position: relative;
            top: 1px;
            margin-right: px2rem(4px);
          }
          .icon-date {
            top: 0;
          }
        }
      }
      .price {
        float: right;
        position: relative;
        top: px2rem(4px);
        margin: 0 px2rem(10px) 0 0;
        font-size: px2rem(20px);
        color: $color-price-tag;
      }
    }
  }
</style>
