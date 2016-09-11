<template>
  <div class="view-equipments">
    Equipments
    <list-equipment></list-equipment>
  </div>
</template>

<script>
  import ListEquipment from '../../commons/ListEquipment';

  export default {
    components: {
      ListEquipment
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
