<template>
  <div class="info-list">


      <info-list-item class="info-list-item" v-for="(item,index) in InfoList"
                      :key="index"
                      :goodsInfo="item"
      />
  </div>
</template>

<script>
  import InfoListItem from "./InfoListItem";

  export default {
    name: "InfoList",
    components: {
      InfoListItem,
    },
    props: {
      InfoList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .info-list {
    position: relative;
    margin-left: 20%;
    width: 80%;
    right: 0;
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - 93px);
    margin-top: 44px;
    overflow:scroll;/*这里可以用BSscroll来做*/
  }


</style>