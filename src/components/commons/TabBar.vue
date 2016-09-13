<template>
  <div class="tab-bar">
    <h3 class="title">{{ title }}</h3>
    <ul class="clearfix">
      <li v-for="item in links" :style="{ width: 100 / links.length + '%' }"><a v-link="item.link">{{ item.text }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    links: {
      type: Array,
      required: true,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";

  .tab-bar {
    width: 100%;
    background: #fff;
    .title {
      padding: px2rem(20px) px2rem(10px);
      margin: 0;
      border-bottom: 1px solid $color-line;
      line-height: 1;
      font-size: $font-size-h3;
      text-align: center;
      color: #000;
    }
    ul {
      width: 100%;
      li {
        float: left;
        width: 33.333%;
        height: px2rem(44px);
        a {
          text-align: center;
          display: block;
          font-size: 15px;
          color: $color-text;
          line-height: px2rem(36px);
          border-top: px2rem(4px) solid #fff;
          border-bottom: px2rem(4px) solid #fff;
          &.link-active, &.active {
            color: $color-main;
            border-bottom: px2rem(4px) solid $color-main;
          }
        }
        &.active {
          a {
            color: $color-main;
            border-bottom: px2rem(4px) solid $color-main;
          }
        }
      }
    }
  }
</style>
