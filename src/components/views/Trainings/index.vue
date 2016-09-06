<template>
  <div class="view-trainings">
    Trainings
  <list-training></list-training>
  </div>
</template>

<script>
  import ListTraining from '../../commons/ListTraining';

  export default {
    components: {
      ListTraining
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
