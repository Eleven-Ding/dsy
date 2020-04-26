<template>
  <div id="HomeSwiper">
    <Swiper>
      <swiper-item v-for="item in banner"><!--这里没有数据 所以要传过来-->
        <!--从banner里面取出数据望这个插槽里面放-->
        <!--这个是可以点击的 所以包装一个a标签-->
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";

  export default {
    name: "HomeSwiper",
    props: {
      banner: {
        type: Array,
        default() {//数组的默认类型必须是一个函数
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad() {
        //console.log(233);
        if (!this.isLoad) {
          this.$emit('SwiperImageLoad')
          this.isLoad=true
        }
      }
    }
  }
</script>

<style scoped>
  #HomeSwiper {
    padding-top: 44px;
  }
</style>