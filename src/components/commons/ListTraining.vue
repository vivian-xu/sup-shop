<template>
  <div class="list-training">
    <item-card-training></item-card-training>
    <item-card-training></item-card-training>
    <item-card-training></item-card-training>
    <item-card-training></item-card-training>
  </div>
</template>

<script>
  import ItemCardTraining from './ItemCardTraining';

  export default {
    components: {
      ItemCardTraining
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";

 .list-training {
   width: 100%;
   padding: 0 px2rem(10px) 1px px2rem(10px);
 }
</style>
