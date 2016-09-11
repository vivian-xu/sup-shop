<template>
  <div class="swiper">
    <swipe :show-indicators="false" v-ref:swipe>
      <swipe-item v-for="item in imgs">
        <div class="swipe-item-inner" :style="{ backgroundImage: 'url(' + item + ')' }" alt="slide"></div>
      </swipe-item>
    </swipe>
    <div class="tip-index">
      {{ tipIndexText }}
    </div>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vue-swipe';

  export default {
    data () {
      return {
        imgs: [
          'http://fakeimg.pl/2000x800/ff6a6f/fff/?text=EVENT',
          'http://fakeimg.pl/2000x800/000000/fff/?text=EVENT',
          'http://fakeimg.pl/2000x800/cccccc/fff/?text=EVENT'
        ]
      };
    },
    components: {
      Swipe,
      SwipeItem
    },
    computed: {
      sIndex: function () {
        return this.$refs.swipe.index + 1;
      },
      tipIndexText: function () {
        return `${this.sIndex}/${this.imgs.length}`;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";
  @import "../../../node_modules/vue-swipe/dist/vue-swipe.css";

  .swiper {
    position: relative;
    width: 100%;
    height: px2rem(250px);
    .swipe {
      height: 100%;
    }
    .swipe-item .swipe-item-inner {
      width: 100%;
      height: 100%;
      position: relative;
      background: $color-img-bg-default;
      background-position: center;
      background-size: cover;
    }
    .tip-index {
      position: absolute;
      right: px2rem(10px);
      bottom: px2rem(25px);
      height: px2rem(17px);
      line-height: px2rem(17px);
      background: $color-icon-second;
      color: #fff;
      font-size: px2rem(10px);
      padding: 0 .6em;
      border-radius: px2rem(4px);
      letter-spacing: 1px;
    }
  }
</style>
