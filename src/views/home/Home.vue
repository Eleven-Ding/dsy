<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="middle">{{title}}</div>
    </nav-bar>
    <tab-contrl :titles="['流行','新款','精选']" class="tab" @tabClick="tabClick" ref="tabControl1"
                v-show="IsTabFixed"
    ><!--在这里监听子组件发出的信息-->
    </tab-contrl>
    <scroll class="content" ref="scroll" 
            :probe-type="3" @scroll="contentScroll"
            :pull-up-load="true" @pullingUp="LoadMore">
      <home-swiper :banner="banner" @SwiperImageLoad="SwiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommend"></recommend-view>
      <Featrue></Featrue>
      <tab-contrl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"><!--在这里监听子组件发出的信息-->
      </tab-contrl>
      <goods-list :goods="goods[this.currentType].list"/>
    </scroll>
    <back-top @click.native="backTop" v-show="positionY<-1000"></back-top><!--组件是不能监听点击事件的 要加上.native-->
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultidata, getHomeGoodsData} from "network/home";
  import HomeSwiper from "./childComponents/HomeSwiper";
  import RecommendView from "./childComponents/RecommendView";
  import Featrue from "./childComponents/Featrue";
  import TabContrl from "components/content/tabcontrl/TabContrl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backtop/BackTop";

  export default {
    name: "Home",
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',

        positionY: 0,
        tabOffsetTop: 0,
        IsTabFixed: false,//默认不需要吸顶
        title: "憨憨购物",
        saveY: 0
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      Featrue,
      TabContrl,
      GoodsList,
      Scroll,
      BackTop
    },
    created() {
      //在这里发送网络请求
      //1.请求多个数据
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list//这里保存得到的数据
        this.recommend = res.data.recommend.list
      })//这是一个异步操作
      //2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

      //这里直接调用全部的第一页
      //监听图片加载完成 每一次都刷新

    },
    mounted() {
      const ref = this.debounce(this.$refs.scroll.refresh, 200)
      //可以减少调用次数 增加效率
      /*简称 防抖操作   debounce防抖/throttle节流*/
      this.$bus.$on('itemImageLoad', () => {/*每一次图片加载完成 都刷新一次scroll 防止bug*/
        // this.$refs.scroll.scroll.refresh()
        ref()
      })
    },
    methods: {
      debounce(fun, delay) {
        let timer = null
        return function (...args) {
          if (timer)//清除上一次的
            clearTimeout(timer)
          timer = setTimeout(() => {
            fun.apply(this, args)
          }, delay)
        }
      },
      //把这个封装好 方便三次调用
      //网络请求
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        this.goods[type].page++;
        getHomeGoodsData(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          //console.log(this.$refs.scroll.scroll);
          // this.$refs.scroll.scroll.refresh()
        })
      },
      //事件监听
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      backTop() {
        this.$refs.scroll.scroll.scrollTo(0, 0, 1000)/*这里直接访问scroll组件里的data*/
        /*第三个参数就是动画时间*/
      },
      contentScroll(position) {
        /*这里的position y如果小于了-1000就显示*/
        this.positionY = position.y
        this.IsTabFixed = (-position.y) > this.tabOffsetTop - 40
      },
      LoadMore() {
        /*给选中的加载更多*/
        this.getHomeGoods(this.currentType)
        //this.$refs.scroll.scroll.refresh()/*这个是加载一次就刷新一次这个scroll组件 防止bug*/
      },
      SwiperImageLoad() {
        //所有的组件都有一个$el属性用于获取组件中的元素
        // console.log(this.$refs.tabControl.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      }
    },
    activated() {
      this.$refs.scroll.scroll.refresh()
      this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0)
    },
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;
    font-weight: 500;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 2;
  }

  .tab {
    position: absolute;
    left: 0;
    right: 0;
    margin-top: 44px;
    z-index: 2;
    background-color: white;
  }

  .content {
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
    background-color: white;
  }
</style>
