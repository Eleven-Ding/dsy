<template>
  <div class="InfoListItem">
    <div class="Item">
      <a :href="goodsInfo.link">
        <img :src="goodsInfo.image" alt="">
      </a>
    </div>
    <div class="text">{{goodsInfo.title}}</div>
  </div>
</template>

<script>
  export default {
    name: "InfoListItem",
    props: {
      goodsInfo: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .InfoListItem {
    width: 50%;
    text-align: center;
    border: 1px solid #eeeeee;
  }

  .InfoListItem img {
    width: 90px;
  }
</style>