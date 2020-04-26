<template>
  <div class="cart">
    <nav-bar class="nav">
      <div slot="middle">
        购物车({{length}})
      </div>
    </nav-bar>
    <!--展示列表  把cartList里面的东西展示出来-->
      <cart-list class="cart-list"></cart-list>
    <cart-bottom />
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childComponents/CartList";
  import {mapGetters} from 'vuex'
  import CartBottom from "./childComponents/CartBottom";

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartBottom
    },
    computed: {
      ...mapGetters({
        length: 'cartLength',/*把getters里面的转换成计算属性*/
        list: 'cartList'
      })
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
    width:100%;
  }

  .nav {
    background-color: var(--color-tint);
    color: white;
    font-weight: 500;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 2;
  }

  .cart-list {
    top: 44px;
    bottom: 49px;
  }
</style>
