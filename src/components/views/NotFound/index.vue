<template>
  <div class="view-notfound">
    <view-status :status="'404'"></view-status>
  </div>
</template>

<script>
  import ViewStatus from '../../commons/ViewStatus';

  export default {
    components: {
      ViewStatus
    },
    attached () {
      document.title = '这里空空如也';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-notfound {
    height: 100%;
  }
</style>
