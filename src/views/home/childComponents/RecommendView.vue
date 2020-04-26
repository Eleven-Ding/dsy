<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type:Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  padding: 5px 0px;
}
.recommend-item{
  flex: 1;
  text-align: center;
  box-shadow: 0px 5px 3px rgba(100,100,100,0.1);
  font-size: 12px;
}
.recommend-item img{
  width: 70px;
  margin-bottom: 5px;
 }
</style>