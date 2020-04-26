<template>
  <div>

    <tab-bar>
      <tab-bar-item link="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.png" /><!--但这个图片不可以写死-->
        <img slot="item-icon-active" src="~assets/img/tabbar/home(1).png" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/view" >
        <img src="~assets/img/tabbar/view.png" slot="item-icon" /><!--但这个图片不可以写死-->
        <img slot="item-icon-active" src="~assets/img/tabbar/view(1).png" />
        <div slot="item-text">发现</div>
      </tab-bar-item>
      <tab-bar-item  link="/cart">
        <img src="~assets/img/tabbar/cart.png" slot="item-icon" /><!--但这个图片不可以写死-->
        <img slot="item-icon-active" src="~assets/img/tabbar/cart(1).png" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img src="~assets/img/tabbar/profile.png" slot="item-icon" /><!--但这个图片不可以写死-->
        <img slot="item-icon-active" src="~assets/img/tabbar/profile(1).png" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBarItem from "components/common/tabBar/TabBarItem";
  import TabBar from "../../common/tabBar/TabBar";

  export default {
    name: "MainTabBar",
    components:{
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>

</style>