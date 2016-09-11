<template>
  <div class="view-equipment-detail">
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
      document.title = 'equipment-detail';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-equipment-detail {
  }
</style>
