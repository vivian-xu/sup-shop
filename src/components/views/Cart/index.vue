<template>
  <div class="view-cart">
    Cart
      <filter :callback="handleFilter" :filter-key="filterKey"></filter>
      <comment-list min="3" max="99" :datas="commentsDatas"></comment-list>
  </div>
</template>

<script>
  import Filter from '../../commons/Filter';
  import CommentList from '../../commons/CommentList';

  export default {
    components: {
      Filter,
      CommentList
    },
    attached () {
      document.title = 'cart';
    },
    data () {
      return {
        topic: this.$route.name,
        filterKey: this.$route.query,
        filterDatas: [
          {
            'key': 'a',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'b',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'c',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'd',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'e',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'f',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'g',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'h',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          },
          {
            'key': 'i',
            'display': '线路类型',
            'choices': [
                {'id': 0, 'display': '不限'},
                {'id': 1, 'display': 'kayak独木舟'},
                {'id': 2, 'display': 'canoe划艇'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'},
                {'id': 3, 'display': 'sup桨板'}
            ]
          }
        ],
        commentsDatas: [
          {
            'id': 1,
            'user_name': '我是游客',
            'avatar_url': 'http://qiutc.me/img/qtc_avatar.jpg',
            'content': '很棒的一次活动',
            'photos': [
              {
                'url': 'http://qiutc.me/img/qtc_avatar.jpg'
              },
              {
                'url': 'http://qiutc.me/img/qtc_avatar.jpg'
              }
            ]
          },
          {
            'id': 2,
            'user_name': '我是游客2',
            'avatar_url': 'http://qiutc.me/img/qtc_avatar.jpg',
            'content': '玩的非常开心，安排的非常赞！玩的非常开心，安排的非常赞！玩的非常开心，安排的非常赞！玩的非常开心，安排的非常赞！',
            'photos': [
              {
                'url': 'http://qiutc.me/img/qtc_avatar.jpg'
              },
              {
                'url': 'http://qiutc.me/img/qtc_avatar.jpg'
              }
            ]
          },
          {
            'id': 3,
            'user_name': '我是游客3',
            'avatar_url': 'http://qiutc.me/img/qtc_avatar.jpg',
            'content': '很棒的一次活动',
            'photos': [
              {
                'url': 'http://qiutc.me/img/qtc_avatar.jpg'
              },
              {
                'url': 'http://qiutc.me/img/qtc_avatar.jpg'
              }
            ]
          },
          {
            'id': 4,
            'user_name': '我是游客4',
            'avatar_url': 'http://qiutc.me/img/qtc_avatar.jpg',
            'content': '很棒的一次活动',
            'photos': [
              {
                'url': 'http://qiutc.me/img/qtc_avatar.jpg'
              },
              {
                'url': 'http://qiutc.me/img/qtc_avatar.jpg'
              }
            ]
          }
        ]
      };
    },

    methods: {
      handleFilter (query) {
        console.log(query);
        let filterDefalut = true;
        for (var key in query) {
          if (query.hasOwnProperty(key) && query[key] !== 0) {
            filterDefalut = false;
            break;
          };
        };
        if (filterDefalut) {
          this.$route.router.go({
            name: this.topic
          });
        } else {
          this.$route.router.go({
            name: this.topic,
            query: query
          });
        };
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/variables.scss";

  .view-cart {
  }
</style>
