<template>
  <div class="view-collections">
    <tab-bar title="我的收藏" :links="tabLinks"></tab-bar>
    <div class="content-list">
      <list-trip v-if="$route.params.type === 'trips'"></list-trip>
      <list-equipment v-if="$route.params.type === 'equipments'"></list-equipment>
      <list-training v-if="$route.params.type === 'trainings'"></list-training>
    </div>
  </div>
</template>

<script>
  import TabBar from '../../commons/TabBar';
  import ListTrip from '../../commons/ListTrip';
  import ListTraining from '../../commons/ListTraining';
  import ListEquipment from '../../commons/ListEquipment';

  export default {
    data () {
      return {
        tabLinks: [
          {
            link: {
              name: 'collections',
              params: {
                type: 'trips'
              }
            },
            text: '路线'
          },
          {
            link: {
              name: 'collections',
              params: {
                type: 'equipments'
              }
            },
            text: '装备'
          },
          {
            link: {
              name: 'collections',
              params: {
                type: 'trainings'
              }
            },
            text: '培训'
          }
        ]
      };
    },
    components: {
      TabBar,
      ListTrip,
      ListTraining,
      ListEquipment
    },
    attached () {
      document.title = '我的收藏';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-collections {
    .content-list {
      padding-top: px2rem(10px);
    }
  }
</style>
