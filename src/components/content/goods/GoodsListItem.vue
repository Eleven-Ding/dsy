<template>
  <div class='goodsList' @click="itemClick">
    <img  v-lazy="showImg" alt="" @load="imageLoad"><!--这个是监听图片是否加载完成的-->
    <div>{{goodsItem.title}}</div>
    <span class="price">{{price}}</span>
    <span class="collect"> ☆{{goodsItem.cfav}}</span>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return []
        }
      }
    },
    computed: {
      showImg() {
        return this.goodsItem.image || this.goodsItem.show.img
      },
      price() {
        return this.goodsItem.orgPrice || '￥' + this.goodsItem.price
      }
    },
    methods: {
      imageLoad() {
        // console.log(this.$route.path.indexOf('detail'));
        // console.log(this.$route.path.indexOf('home'));
        if (this.$route.path.indexOf('home')) {
          this.$bus.$emit('itemImageLoad');
        } else if (this.$route.path.indexOf('detail')) {
          this.$bus.$emit('detailLoad')
        }
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)/*这个id是父组件传过来的*/
      }
    }
  }
</script>

<style scoped>
  .goodsList {
    width: 50%;
    padding: 2px;
    text-align: center;
  }

  .goodsList img {
    width: 100%;
    padding: 2px;
  }

  /*这里给那个div加一个溢出*/
  .goodsList div {
    font-size: 14px;
    width: 100%;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .goodsList span {
    font-size: 13px;
    font-weight: 600;
  }

  .price {
    color: rgba(255, 0, 121, 0.78);

  }
</style>