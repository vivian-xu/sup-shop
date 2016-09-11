<template>
  <div class="detail-header">
    <swiper :imgs="imgs"></swiper>
    <div class="tag-price">
      ¥ {{ price }}
    </div>
  </div>
</template>

<script>
  import Swiper from './Swiper';

  export default {
    data () {
      return {
        imgs: [
          'http://fakeimg.pl/2000x800/ff6a6f/fff/?text=EVENT',
          'http://fakeimg.pl/2000x800/000000/fff/?text=EVENT',
          'http://fakeimg.pl/2000x800/cccccc/fff/?text=EVENT'
        ],
        price: 59
      };
    },
    components: {
      Swiper
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";

  .detail-header {
    width: 100%;
    position: relative;
    height: px2rem(250px);
    .tag-price {
      position: absolute;
      padding: 0 px2rem(14px);
      bottom: px2rem(25px);
      left: 0;
      height: px2rem(35px);
      line-height: px2rem(35px);
      background: rgba(0, 0, 0, .6);
      font-size: $font-size-h2;
      color: #fff;
    }
  }
</style>
