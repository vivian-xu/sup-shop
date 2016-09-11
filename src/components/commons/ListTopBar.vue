<template>
  <div class="list-top-bar clearfix">
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
        default: {}
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";

  .list-top-bar {
    width: 100%;
    height: px2rem(35px);
    padding: 0 px2rem(10px);
    .title {
      float: left;
      font-size: $font-size-h3;
      color: $color-text;
      line-height: px2rem(35px);
    }
  }
</style>
