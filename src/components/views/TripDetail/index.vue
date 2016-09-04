<template>
  <div class="view-trip-detail">
    TripDetail
  </div>
</template>

<script>
  export default {
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
