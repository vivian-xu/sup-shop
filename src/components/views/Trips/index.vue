<template>
  <div class="view-trips" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <list-header></list-header>
    <list-top-bar :title="'路线'"></list-top-bar>
    <list-trip></list-trip>
  </div>
</template>

<script>
  import ListHeader from '../../commons/ListHeader';
  import ListTrip from '../../commons/ListTrip';
  import ListTopBar from '../../commons/ListTopBar';

  export default {
    data () {
      return {
        busy: false
      };
    },
    components: {
      ListHeader,
      ListTrip,
      ListTopBar
    },
    attached () {
      document.title = '路线';
    },
    methods: {
      loadMore () {
        this.busy = true;
        setTimeout(() => {
          console.log('kakakakak');
          this.busy = false;
        }, 2000);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-trips {
  }
</style>
