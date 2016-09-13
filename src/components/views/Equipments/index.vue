<template>
  <div class="view-equipments">
    <list-header></list-header>
    <list-top-bar :title="'装备'"></list-top-bar>
    <list-equipment></list-equipment>
  </div>
</template>

<script>
  import ListHeader from '../../commons/ListHeader';
  import ListEquipment from '../../commons/ListEquipment';
  import ListTopBar from '../../commons/ListTopBar';

  export default {
    components: {
      ListHeader,
      ListEquipment,
      ListTopBar
    },
    attached () {
      document.title = '装备';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-equipments {
  }
</style>
