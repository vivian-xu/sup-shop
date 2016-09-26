<template>
  <div class="list-equipment clearfix">
    <item-card-equipment v-for="item in data" :data="item"></item-card-equipment>
  </div>
</template>

<script>
  import ItemCardEquipment from './ItemCardEquipment';

  export default {
    props: {
      data: {
        type: Array,
        defalut: []
      }
    },
    components: {
      ItemCardEquipment
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";

 .list-equipment {
   width: 100%;
   padding: 0 px2rem(5px);
 }
</style>
