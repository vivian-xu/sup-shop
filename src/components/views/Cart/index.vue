<template>
  <div class="view-cart">
    Cart
      <filter></filter>
  </div>
</template>

<script>
  import Filter from '../../commons/Filter';

  export default {
    components: {
      Filter
    },
    attached () {
      document.title = 'cart';
    }

  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-cart {
  }
</style>
