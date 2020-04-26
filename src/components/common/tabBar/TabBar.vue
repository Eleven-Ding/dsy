<template>
  <div id="TabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #TabBar {
    display: flex;
    background-color: #f6f6f6;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /*搞一个小阴影*/
    box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
    vertical-align: center;
  }


</style>
