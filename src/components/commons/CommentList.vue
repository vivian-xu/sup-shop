<template>

  <section class="comment-list">
    <h2>游客点评</h2>
    <ul class="comment-list-block"

      v-cloak>
      <li class="comment-item" transition="fade"
      transition-mode="out-in" v-for="item in datas | limitBy limit">
        <div class="author">
          <img :src="item.avatar_url" alt="avatar">
          </img>
          <span class="name">
          {{item.user_name}}
          </span>
        </div>
        <div class="content">
          <p>
            {{item.content}}
          </p>
          <div class="img-list">
            <ul class="clearfix">
              <li v-for="photo in item.photos">
                <img :src="photo.url" alt="picture">
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <div class="unfold-block">
      <span @click.prevent="handleUnfold">
        <i class="icon icon-unflod" :class="unfold ? 'icon-unfold-transition' : ''"></i>
        {{unfold ? '收回' : '查看所有评论'}}
      </span>
    </div>
    <button @click.prevent="" class="comment-btn">
      我要评论
    </button>
  </section>

</template>

<script>
  export default {
    data () {
      return {
        unfold: false
      };
    },
    props: {
      max: {
        type: [String, Number],
        required: false,
        coerce: (val) => parseInt(val),
        default: () => 99
      },
      min: {
        type: [String, Number],
        required: false,
        coerce: (val) => parseInt(val),
        default: () => 3
      },
      datas: {
        type: Array,
        required: true,
        default: () => {}
      }
    },
    computed: {
      limit: function () {
        return this.unfold ? this.max : this.min;
      }
    },
    methods: {
      handleUnfold () {
        this.unfold = !this.unfold;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";

  .comment-list {
    padding: 0 px2rem(10px);
    text-align: center;

    .fade-transition {
      transition: opacity .3s ease;
    }

    .fade-enter,
    .fade-leave {
      opacity: 0;
    }

    h2 {
      padding: px2rem(20px) 0;
      font-size: $font-size-h3;
      line-height: 1;
    }

    .comment-item {
      text-align: left;

      .author {
        & > img {
          width: px2rem(25px);
          height: px2rem(25px);
          vertical-align: middle;
          border: 0;
          border-radius: 50%;
          background-color: #447ADA;
        }

        .name {
          margin-right: px2rem(10px);
          font-size: $font-size-h3;
          font-weight: bold;
          vertical-align: middle;
        }
      }
    }

    .content {
        margin: px2rem(15px) 0;

      & > p {
        margin: 0 0 px2rem(15px) 0;
        color: $color-text;
        font-size: $font-size-text;
        line-height: 1.2;
        letter-spacing: 1px;
      }
    }

    .img-list {
      li {
        float: left;
        width: px2rem(84px);
        height: px2rem(80px);

        &:not(:last-child) {
          margin-right: px2rem(6px);
        }
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .unfold-block {
      margin-bottom: px2rem(20px);
      font-size: $font-size-small;
      text-align: center;
      -webkit-tap-highlight-color: transparent;

      & > span{
        display: inline-block;
        color: $color-main;

        i {
          display: block;
          transition: all .3 ease;

          &.icon-unfold-transition {
            transform: rotateX(180deg);
          }
        }
      }
    }

    button {
      color: $color-main;
      width: px2rem(140px);
      height: px2rem(33px);
      margin-bottom: px2rem(20px);
      font-size: $font-size-unfold;
      border: 2px solid currentColor;
      border-radius: px2rem(5px);
      -webkit-tap-highlight-color: transparent;
    }

    [v-cloak] {
      display: none;
    }
  }
</style>
