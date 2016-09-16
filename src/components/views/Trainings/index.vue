<template>
  <div class="view-trainings" v-infinite-scroll="getData()" infinite-scroll-disabled="!needLoad" :infinite-scroll-distance="10">

    <template v-if="listData && listData.length">
      <list-header :handle-search="() => getData(true)"></list-header>
      <list-top-bar :title="'培训'" :handle-filter="() => getData(true)"></list-top-bar>
      <list-training :data="listData"></list-training>
      <loading-bar :load-all="loadAll"></loading-bar>
    </template>

    <view-status v-else :status="status"></view-status>

  </div>
</template>

<script>
  import ListHeader from '../../commons/ListHeader';
  import ListTraining from '../../commons/ListTraining';
  import ListTopBar from '../../commons/ListTopBar';
  import LoadingBar from '../../commons/LoadingBar';
  import ViewStatus from '../../commons/ViewStatus';

  import { getListTrainings } from '../../../resource';

  export default {
    data () {
      return {
        error: false,
        needLoad: true,
        loadAll: false,
        listData: null,
        limit: 9,
        offset: 0
      };
    },
    components: {
      ListHeader,
      ListTraining,
      ListTopBar,
      LoadingBar,
      ViewStatus
    },
    attached () {
      document.title = '培训';
      this.needLoad = true;
      this.getData();
    },
    detached () {
      this.needLoad = false;
    },
    computed: {
      status: function () {
        if (this.listData && this.listData.length === 0) {
          return 'empty';
        }
        return this.error || 'loading';
      }
    },
    methods: {
      getData (reset) {
        if (!this._isAttached) {
          return false;
        }
        reset && this.reset();
        this.needLoad = false;
        getListTrainings.bind(this)(
          (data) => {
            if (this.limit <= data.length) {
              this.needLoad = true;
            } else {
              this.loadAll = true;
            }
            if (this.listData === null || reset) {
              this.listData = data;
            } else {
              this.listData = this.listData.concat(data);
            }
            this.offset = this.offset + this.limit;
          },
          () => {
            this.error = true;
          },
          {
            query: this.$route.query,
            offset: this.offset,
            limit: this.limit
          }
        );
      },
      reset () {
        this.error = false;
        this.loadAll = false;
        this.offset = 0;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-trainings {
  }
</style>
