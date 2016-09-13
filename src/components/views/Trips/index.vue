<template>
  <div class="view-trips">
    <list-header></list-header>
    <list-top-bar :title="'路线'"></list-top-bar>
    <list-trip></list-trip>
  </div>
</template>

<script>
  import ListHeader from '../../commons/ListHeader';
  import ListTrip from '../../commons/ListTrip';
  import ListTopBar from '../../commons/ListTopBar';

  export default {
    components: {
      ListHeader,
      ListTrip,
      ListTopBar
    },
    attached () {
      document.title = '路线';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-trips {
  }
</style>
