<template>
  <div class='profile'>
    <nav-bar class='nav'>
      <div slot="middle"> 我的档案</div>
    </nav-bar>
    <user-info class="user-info" />
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import UserInfo from "./childComponents/UserInfo";
  export default {
    name: "Profile",
    components: {
      NavBar,
      UserInfo
    }
  }
</script>

<style scoped>
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
  .user-info{
    margin-top: 44px;
  }
</style>
