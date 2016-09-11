<template>
  <div class="view-training-detail">
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
      document.title = 'TrainingDetail';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-training-detail {
  }
</style>
