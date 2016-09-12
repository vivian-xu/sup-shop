<template>
  <div class="list-trip">
    <item-card-trip></item-card-trip>
    <item-card-trip></item-card-trip>
    <item-card-trip></item-card-trip>
    <item-card-trip></item-card-trip>
  </div>
</template>

<script>
  import ItemCardTrip from './ItemCardTrip';

  export default {
    components: {
      ItemCardTrip
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";

 .list-trip {
   width: 100%;
   padding: 0 px2rem(10px) 1px px2rem(10px);
 }
</style>
