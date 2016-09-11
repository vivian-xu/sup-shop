<template>
  <div class="view-trips">
    <list-top-bar :title="'路线'"></list-top-bar>
    <list-trip></list-trip>
  </div>
</template>

<script>
  import ListTrip from '../../commons/ListTrip';
  import ListTopBar from '../../commons/ListTopBar';

  export default {
    components: {
      ListTrip,
      ListTopBar
    },
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
