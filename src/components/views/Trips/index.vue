<template>
  <div class="view-trips">
    Trips
    <span class="icon-训练"></span>
    <list-trip></list-trip>
  </div>
</template>

<script>
  import ListTrip from '../../commons/ListTrip';

  export default {
    components: {
      ListTrip
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
