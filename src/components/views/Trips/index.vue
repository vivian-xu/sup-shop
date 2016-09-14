<template>
  <div class="view-trips" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <template v-if="listData">
      <list-header></list-header>
      <list-top-bar :title="'路线'"></list-top-bar>
      <list-trip :data="listData"></list-trip>
    </template>

    <view-status v-if="!listData" :status="this.error || 'loading'"></view-status>
  </div>
</template>

<script>
  import ListHeader from '../../commons/ListHeader';
  import ListTrip from '../../commons/ListTrip';
  import ListTopBar from '../../commons/ListTopBar';

  import ViewStatus from '../../commons/ViewStatus';

  import { getListTrips } from '../../../resource';

  export default {
    data () {
      return {
        error: false,
        busy: false,
        listData: null
      };
    },
    components: {
      ListHeader,
      ListTrip,
      ListTopBar,
      ViewStatus
    },
    attached () {
      document.title = '路线';

      getListTrips.bind(this)(
        (data) => {
          this.listData = data;
        },
        () => {
          this.error = true;
        }
      );
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
