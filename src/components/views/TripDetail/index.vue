<template>
  <div class="view-trip-detail">
    <swiper></swiper>
  </div>
</template>

<script>
  import Swiper from '../../commons/Swiper';

  export default {
    components: {
      Swiper
    },
    attached () {
      document.title = 'TripDetail';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-trip-detail {
    color: $color-main;
    font-size: px2em(16px);
  }
</style>
