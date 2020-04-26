<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :product="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import CartListItem from "./CartListItem";
  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "CartList",
    computed: {
      ...mapGetters(['cartList'])/*把cartlist展示出来*/
    },
    components: {
      CartListItem,
      Scroll
    },
    activated() {
      //console.log('---');
      this.$refs.scroll.scroll.refresh()/*这每次进来得时候都刷新一下*/
    },
  }
</script>

<style scoped>
  .content {
    height: calc(100% - 123px);
    overflow: hidden;
    position: relative;
    margin-top: 44px;
  }

  .cart-list {
    height: 100vh;
  }
</style>