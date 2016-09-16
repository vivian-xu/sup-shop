<template>
  <div class="list-top-bar clearfix">
    <div class="title">
      {{ title }}
    </div>
    <filter :callback="handleDoFilter" :filter-key="$route.query" :datas="filterData"></filter>
  </div>
</template>

<script>
  import Filter from './Filter';

  export default {
    components: {
      Filter
    },
    props: {
      title: {
        type: String,
        required: true,
        default: ''
      },
      handleFilter: {
        type: Function
      },
      filterData: {
        type: Array
      }
    },
    methods: {
      handleDoFilter (query) {
        this.$route.router.go({
          name: this.$route.name,
          query: query
        });
        this.handleFilter && this.handleFilter(query);
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
    .filter {
      float: right;
    }
  }
</style>
