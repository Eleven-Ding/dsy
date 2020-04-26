<template>
  <!--这个是判断传过来的shopInfo是否为空 如果为空的话  渲染dom就会抛出错误-->
  <div v-if="Object.keys(shopInfo).length!==0" class="shopInfo">
    <!--在这里展示shopInfo信息-->
    <div class="shopTitle">
      <span class="shopLogo">
        <img :src="shopInfo.logo" alt="">
      </span>
      <span class="shopName">{{shopInfo.name}}</span>
    </div>

    <div class="shopMes">
      <div class="left">
        <div class="count">{{shopInfo.sell|showsell}}</div>
        <div class="text">总销量</div>
      </div>

      <div class="center"><!--在这里加一个有边框-->
        <div class="count">{{shopInfo.goodsCount}}</div>
        <div class="text">全部宝贝</div>
      </div>

      <div class="right">
        <div class="Info" v-for="item in shopInfo.score" :key="item.name">
          <span>{{item.name}}</span>
          <span :class="getClass1(item.isBetter)" >{{item.score}}</span><!--这里要动态的添加颜色-->
          <!--高低由isBetter决定-->
          <span :class="getClass2(item.isBetter)">{{item.isBetter?'高':'低'}}</span><!--这里要动态的添加颜色-->
        </div>
      </div>


    </div>
    <a :href="shopInfo.url"> <div class="entry" >进入店铺</div></a>


  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default: {}
      }
    },
    filters: {
      showsell(count) {
        return (count / 10000).toFixed(1) + '万'
      }
    },
    methods:{
      getClass1(is){
        return is?'active1':'active2'
      },
      getClass2(is){
        return is?'Active1':'Active2'
      }
    }
  }
</script>

<style scoped>
  .shopInfo {
    margin-top: 15px;
    padding: 0 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  /*对图片店铺名进行编辑*/
  .shopTitle {
    display: flex;
    margin: 15px 0;
  }
  .shopLogo img {
    border: 1px solid  #999999;;
    width: 50px;
    border-radius: 50%;
  }
  .shopName{
    font-size: 20px;
    color: #999999;
    margin-top: 15px;
    margin-left: 10px;
  }
    /*对下面的信息进行编辑*/
  .shopMes {
    display: flex; /*使用flex布局*/
    justify-content: space-around;
    align-items: center;
    height: 100px;
  }
  .left ,.center ,.right {
    text-align: center;
    padding: 0 10px;
  }
  .center{
    border-right: 1px solid rgba(191, 191, 191, 0.65);
  }
  .shopMes .count{
    font-size: 18px;
    margin-bottom: 5px;
    color: #454545;
  }
  .shopMes .text{
    font-size: 12px;
  }
  /*现在是右边的评价*/
  .Info{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 14px;

  }
  .right{
    margin-top: -10px;
  }
  .Info span{
    margin-left: 7px;
  }
  .Info .active1{
    color: #00b100;

  }
  .Info .active2{
    color: red;
  }
  .Info .Active1{
    background-color: #00b000;

    color: white;
  }
  .Info .Active2{
    background-color: #cd0000;
    color: #ffffff;
  }
  .entry{
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translate(-50%);
    padding: 6px 30px;
    background-color: #d9d9d9;
    color: rgb(255, 255, 255);
    border-radius: 6px;
  }
</style>