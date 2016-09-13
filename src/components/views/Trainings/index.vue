<template>
  <div class="view-trainings">
    <list-header></list-header>
    <list-top-bar :title="'培训'"></list-top-bar>
    <list-training></list-training>
  </div>
</template>

<script>
  import ListHeader from '../../commons/ListHeader';
  import ListTraining from '../../commons/ListTraining';
  import ListTopBar from '../../commons/ListTopBar';

  export default {
    components: {
      ListHeader,
      ListTraining,
      ListTopBar
    },
    attached () {
      document.title = '培训';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-trainings {
  }
</style>
