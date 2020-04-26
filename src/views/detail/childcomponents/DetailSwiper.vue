<template>
    <swiper class="swiper-item">
      <swiper-item v-for="item in topImages" >
          <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>
<script>
  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.swiper-item{
  height: 300px;
  overflow: hidden;
}
</style>