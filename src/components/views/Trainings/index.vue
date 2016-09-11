<template>
  <div class="view-trainings">
    <list-top-bar :title="'培训'"></list-top-bar>
    <list-training></list-training>
  </div>
</template>

<script>
  import ListTraining from '../../commons/ListTraining';
  import ListTopBar from '../../commons/ListTopBar';

  export default {
    components: {
      ListTraining,
      ListTopBar
    },
    attached () {
      document.title = 'Trainings';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-trainings {
  }
</style>
