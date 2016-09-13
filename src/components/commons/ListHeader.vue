<template>
  <header class="list-header" :style="{ backgroundImage: 'url(http://fakeimg.pl/2000x800/ff6a6f/fff/)' }">
    <search-bar :callback="handleSearch"></search-bar>
    <div class="inner">
      <h1 class="title"><span>您好！</span><span>用户名称</span></h1>
      <p class="d">欢迎来到指向皮划艇</p>
    </div>
  </header>
</template>

<script>
  import SearchBar from './SearchBar';

  export default {
    components: {
      SearchBar
    },
    methods: {
      handleSearch (value) {
        console.log(value);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";

  .list-header {
    position: relative;
    width: 100%;
    height: px2rem(250px);
    background: $color-img-bg-default;
    background-position: center;
    background-size: cover;
    .inner {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .title {
      position: absolute;
      left: px2rem(10px);
      bottom: px2rem(48px);
      margin: 0;
      line-height: 1;
      font-size: $font-size-h1;
      font-weight: normal;
      color: #fff;
    }
    .d {
      position: absolute;
      bottom: px2rem(26px);
      left: px2rem(10px);
      margin: 0;
      line-height: 1;
      font-size: px2rem(14px);
      color: #fff;
    }
    .search-bar {
      position: absolute;
      top: px2rem(18px);
      right: px2rem(16px);
      z-index: 99;
    }
  }
</style>
