<template>
  <div id="detail">
    <!--导航-->
    <DetailNavBar @titleClick="titleClick" ref="detainav"></DetailNavBar>
    <scroll class="content"
            :probe-type="3"
            :pull-up-load="true" ref="scroll"
            @scroll="contentScroll">
      <detail-swiper :topImages="topImages"/><!--把数据传给轮播图组件-->
      <detail-base-info :goods="goods"></detail-base-info><!--把信息传过去 进行展示-->
      <detail-shop-info :shop-info="shop"></detail-shop-info><!--传入shop信息 利用子组件展示-->
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-params-info :shop-param-info="shopParamsInfo" ref="param"></detail-params-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <div class="for-you">为您推荐</div>
      <goods-list :goods="commendInfo" class="recommends" ref="goods"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="PositionY<-1000"></back-top><!--scroll组件发射了一个scroll行为 带着position数据-->
  </div>
</template>

<script>
  /*在这个组件里拿到iid*/
  import {getDetail, Goods, Shop, GoodsParams, getCommend} from "network/detail";
  import DetailNavBar from "./childcomponents/DetailNavBar";
  import DetailSwiper from "./childcomponents/DetailSwiper";
  import DetailBaseInfo from "./childcomponents/DetailBaseInfo";
  import DetailShopInfo from "./childcomponents/DetailShopInfo";
  import Scroll from "components/common/scroll/Scroll";
  import DetailGoodsInfo from "./childcomponents/DetailGoodsInfo";
  import BackTop from "components/content/backtop/BackTop";
  import DetailParamsInfo from "./childcomponents/DetailParamsInfo";
  import DetailCommentInfo from "./childcomponents/DetailCommentInfo";
  import GoodsList from "components/content/goods/GoodsList";
  import DetailBottomBar from "./childcomponents/DetailBottomBar";
  import {mapActions} from 'vuex'

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        PositionY: 0,
        ref: function () {
        },
        shopParamsInfo: {},
        commentInfo: {},
        commendInfo: [],
        themeTopYs: [],
        currentIndex: 0,
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      BackTop,
      DetailParamsInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
    },
    created() {
      this.iid = this.$route.params.id/*这里获取商品id*/
      getDetail(this.iid).then(res => {/*这个res是一个大数据 需要抽离出需要的数据*/
        //console.log(res)
        const data = res.result
        //1.获取顶部轮播数据
        this.topImages = res.result.itemInfo.topImages
        //2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //3.获取shopInfo
        this.shop = new Shop(data.shopInfo)
        //4.保存商品详情数据
        this.detailInfo = data.detailInfo
        //5.保存商品评论
        this.shopParamsInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)
        //6.保存商品评论信息
        if (data.rate.cRate !== 0)
          this.commentInfo = data.rate.list[0]
      })
      //7.保存推荐信息
      getCommend().then(res => {
        this.commendInfo = res.data.list
      })
      /*      this.$nextTick(()=>{//为什么我这个不行  里面还是没有值
              this.themeTopYs = []
              this.themeTopYs.push(0)
              this.themeTopYs.push(this.$refs.param.$el.offsetTop)
              this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
              this.themeTopYs.push(this.$refs.goods.$el.offsetTop - 30)
              console.log(this.themeTopYs);
            })/!*下一帧*!/*/
    },
    updated() {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop - 49)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 49)
      this.themeTopYs.push(this.$refs.goods.$el.offsetTop - 30 - 49)
    },
    mounted() {
      this.ref = this.debounce(this.$refs.scroll.refresh, 50)
      this.$bus.$on('detailLoad', () => {
        this.ref()
      })

    },
    methods: {
      ...mapActions(['addCart']),/*将vuex里的actions  映射到methods*/
      debounce(fun, delay) {
        let timer = null;
        return function (...args) {
          if (timer)//清除上一次的
            clearTimeout(timer)
          timer = setTimeout(() => {
            fun.apply(this, args)
          }, delay)
        }
      },
      imageLoad() {
        /*使用节流/防抖 提高效率*/
        this.ref()
      },
      addToCart() {
        /*获取购物车需要展示的信息*/
        /*这里要用vuex了*/
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.nowPrice
        product.iid = this.iid
        product.count = 1
        // console.log(product);
        /*将商品通过mutation添加到state*/
        // this.$store.commit('addCart',product)
        this.$store.dispatch('addCart', product).then(res => {
          this.$toast.show(res, 1200)
          // clearTimeout(end)
          // console.log(res);
          // this.show=true
          // this.message='添加购物车成功!'
          // let end=setTimeout(()=> {
          //   this.show = false
          //   this.message=''
          // },1000)
          /*在这里显示添加成功*/

        })

        // this.addCart(product).then(res=>{/*这里是使用 mapaction映射到methods*/
        //   console.log(res);
        // })
        /*这里添加每次 scroll都要刷新一次*/
      },
      contentScroll(position) {
        this.PositionY = position.y
        const y = this.PositionY
        let i
        if (this.currentIndex !== i)
          for (i = this.themeTopYs.length - 1; i >= 0; i--) {
            if (y <= -this.themeTopYs[i] - 44) {
              // console.log(i)
              this.currentIndex = i
              break
            }
          }
        this.$refs.detainav.currentIndex = i
        /*然后把currentindex传过去*/
        //console.log(this.PositionY);
      },
      backTop() {
        this.$refs.scroll.scroll.scrollTo(0, 0, 1000)
      },
      titleClick(index) {
        // switch (index) {
        //   case 0:
        //     this.$refs.scroll.scroll.scrollTo(0, 0, 300)
        //     break
        //   case 1:
        //     this.$refs.scroll.scroll.scrollTo(0, -this.$refs.param.$el.offsetTop, 300)
        //     break
        //   case 2:
        //     this.$refs.scroll.scroll.scrollTo(0, -this.$refs.comment.$el.offsetTop, 300)
        //     break
        //   case 3:
        //     this.$refs.scroll.scroll.scrollTo(0, (-this.$refs.goods.$el.offsetTop) + 32, 300)
        //     break
        // }
        this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index] - 44, 300)
        //console.log(index);
        /*想要点击哪个滚动道哪个位置 就需要获取那些组件的offsetTop*/
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: white;
    height: 100vh;
  }

  .content {
    position: relative;
    height: calc(100% - 44px);
    bottom: 49px;
    margin-top: 44px;
  }

  .recommends {
    margin-top: 7px;
  }

  .for-you {
    margin-top: 8px;
    margin-left: 10px;
    border-left: 5px double pink;
    padding-left: 4px;
    color: #ff03ad;

  }
</style>