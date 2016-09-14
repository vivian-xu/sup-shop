<template>
  <div class="loading-bar">
    <span v-if="loadAll">加载完全部数据</span>
    <span v-if="!loadAll">加载中...</span>
  </div>
</template>

<script>
  export default {
    props: {
      loadAll: {
        type: Boolean
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";

  .loading-bar {
    width: 100%;
    height: px2rem(30px);
    line-height: 1;
    text-align: center;
    font-size: px2rem(14px);
    color: $color-main;
  }
</style>
