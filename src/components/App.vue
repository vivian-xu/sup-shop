<template>

  <div id="app" class="app">

    <!-- router components -->
    <router-view
      :class="['view']"
      transition="view"
      transition-mode="out-in"
      keep-alive>
    </router-view>

    <!-- bottom-bar -->
    <bottom-bar
      v-if="
        $route.name === 'trips' ||
        $route.name === 'equipments' ||
        $route.name === 'trainings' ||
        $route.name === 'cart' ||
        $route.name === 'profile'
      "
    >
    </bottom-bar>

  </div>

</template>

<script>
import BottomBar from './commons/BottomBar';

export default {
  components: {
    BottomBar
  },
  ready () {}
};
</script>

<style lang="scss">
  @import "../assets/styles/main";
  .view {
    position: relative;
    background: $color-bg;
  }
  // .view-transition {
  //   transition: opacity .1s ease;
  // }
  // .view-enter, .view-leave {
  //   opacity: 1;
  // }
</style>
