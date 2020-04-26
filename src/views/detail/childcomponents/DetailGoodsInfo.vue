<template>
  <div class="detailgoodsinfo" v-if="Object.keys(detailInfo).length !== 0">
    <div class="des">{{detailInfo.desc}}</div>
    <div class="result">
      <div class="key">{{detailInfo.detailImage[0].key}}~</div>
      <div class="photolist" v-for="item in detailInfo.detailImage[0].list">
        <img :src="item" alt="" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object
      }
    },
    data(){
      return {
        // counter:0,
        // imageLength:0
      }
    },
    methods:{
      imgLoad(){
        /*在这里发射出去*/
       // if(++this.counter===this.imageLength){/*这里是控制只发射一次*/
          //console.log(2333);
          this.$emit('imageLoad')/*在外面使scroll刷新*/
        //}

      }
    },
    // watch:{
    //   detailInfo(){
    //     this.imageLength=this.detailInfo.detailImage[0].list.length
    //   }
    // }
  }
</script>

<style scoped>
  .detailgoodsinfo {
    margin-top: 20px;
  }

  .photolist img {
    width: 100%;
  }
  .des{
    font-size: 14px;
    padding: 10px 3px;
  }
  .key{
    text-align: center;
  }
</style>