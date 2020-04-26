<template>
  <div class="TabBar-item" @click="ItemClick">
    <div v-if="IsActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:!IsActive}">
      <slot name="item-text"></slot><!--这里的文字--></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: String//让父组件传进来你要跳到哪里
    },
    methods: {
      ItemClick() {//监听组件的
        this.$router.replace(this.link)
      }
    },
    computed: {
      IsActive() {
        return this.$route.path.indexOf(this.link)//这里如果
      }
    }
  }
</script>

<style scoped>
  .active {
    color: red;
  }

  .TabBar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
  }

  .TabBar-item img {
    height: 24px;
    width: 24px;
    margin-top: 2px;
    vertical-align: center;
  }
</style>
