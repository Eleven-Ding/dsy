<template>
  <div class="goods">
<!--往里面放一个个小的item-->
    <goods-list-item v-for="item in goods" :goods-item="item" >

    </goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    props:{
      goods:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    background-color: white;
  }
</style>