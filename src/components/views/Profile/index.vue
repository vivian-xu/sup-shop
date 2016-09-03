<template>
  <div class="view-profile">
    Profile
  </div>
</template>

<script>
  export default {
    attached () {
      document.title = 'profile';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-profile {
  }
</style>
