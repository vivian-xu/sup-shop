<template>
  <div class="view-routes">
    Routes
  </div>
</template>

<script>
  export default {
    attached () {
      document.title = 'Routes';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-routes {
    color: $color-main;
    font-size: px2em(16px);
  }
</style>
