<template>
  <div class="view-trips">
    Trips
    <span class="icon-训练"></span>
  </div>
</template>

<script>
  export default {
    attached () {
      document.title = 'Trips';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-trips {
    color: $color-main;
    font-size: px2em(16px);
  }
</style>
