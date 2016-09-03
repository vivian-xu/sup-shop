<template>

  <div id="app" class="app">

    <!-- router components -->
    <router-view
      :class="['view']"
      transition="view"
      transition-mode="out-in"
      keep-alive>
    </router-view>

  </div>

</template>

<script>
export default {
  ready () {}
};
</script>

<style lang="scss">
  @import "../assets/styles/main";
  .view {
    position: relative;
    min-height: 100%;
  }
  .view-transition {
    transition: opacity .1s ease;
  }
  .view-enter, .view-leave {
    opacity: 1;
  }
</style>
