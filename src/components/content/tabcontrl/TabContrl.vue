<template>
  <div class="tab-ctrl">
    <!--只是文字不一样的时候 就没必要搞插槽了-->
    <div v-for="(item,index) in titles" class="tab-ctrl-item"
         :class="{active:(index===currentIndex)}" @click="changeIndex(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabContrl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      changeIndex(index) {
        this.currentIndex = index;
        this.$emit('tabClick',index)/*这个是传到外面去*/
      }
    }
  }
</script>

<style scoped>
  .tab-ctrl {
    display: flex;

  }

  .tab-ctrl-item {
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
  }
  .tab-ctrl-item span{
    padding:0px  10px;
  }
  .active  span{
    border-bottom: 2px solid red;
  }
</style>