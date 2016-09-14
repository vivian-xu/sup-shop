<template>
  <div class="list-trip">
    <item-card-trip v-for="item in data" :data="item"></item-card-trip>
  </div>
</template>

<script>
  import ItemCardTrip from './ItemCardTrip';

  export default {
    props: {
      data: {
        type: Array,
        defalut: []
      }
    },
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
