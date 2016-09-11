<template>
  <div class="view-equipments">
    <list-top-bar :title="'装备'"></list-top-bar>
    <list-equipment></list-equipment>
  </div>
</template>

<script>
  import ListEquipment from '../../commons/ListEquipment';
  import ListTopBar from '../../commons/ListTopBar';

  export default {
    components: {
      ListEquipment,
      ListTopBar
    },
    attached () {
      document.title = 'equipments';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-equipments {
  }
</style>
