<template>
  <div class="view-trip-detail">
    <detail-header></detail-header>
  </div>
</template>

<script>
  import DetailHeader from '../../commons/DetailHeader';

  export default {
    components: {
      DetailHeader
    },
    attached () {
      document.title = 'TripDetail';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-trip-detail {
  }
</style>
