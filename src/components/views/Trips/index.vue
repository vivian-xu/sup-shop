<template>
  <div class="view-trips" v-infinite-scroll="loadMore()" infinite-scroll-disabled="!needLoad" infinite-scroll-distance="10">

    <template v-if="listData">
      <list-header></list-header>
      <list-top-bar :title="'路线'"></list-top-bar>
      <list-trip :data="listData"></list-trip>
      <loading-bar :load-all="loadAll"></loading-bar>
    </template>

    <view-status v-if="!listData" :status="this.error || 'loading'"></view-status>

  </div>
</template>

<script>
  import ListHeader from '../../commons/ListHeader';
  import ListTrip from '../../commons/ListTrip';
  import ListTopBar from '../../commons/ListTopBar';
  import LoadingBar from '../../commons/LoadingBar';
  import ViewStatus from '../../commons/ViewStatus';

  import { getListTrips } from '../../../resource';

  export default {
    data () {
      return {
        error: false,
        needLoad: true,
        loadAll: false,
        listData: null,
        limit: 2,
        offset: 0
      };
    },
    components: {
      ListHeader,
      ListTrip,
      ListTopBar,
      LoadingBar,
      ViewStatus
    },
    attached () {
      document.title = '路线';
      this.getData();
    },
    methods: {
      getData () {
        this.needLoad = false;
        getListTrips.bind(this)(
          (data) => {
            if (this.limit <= data.length) {
              this.needLoad = true;
            } else {
              this.loadAll = true;
            }
            if (this.listData === null) {
              this.listData = data;
            } else {
              this.listData = this.listData.concat(data);
            }
          },
          () => {
            this.error = true;
          }
        );
      },
      loadMore () {
        this.getData();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-trips {
  }
</style>
