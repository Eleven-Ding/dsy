<template>
  <div v-if="Object.keys(shopParamInfo).length!==0">
    <!--这里展示tables里面的信息-->
    <div class="table">
      <table  cellspacing="0" class="table1">
        <tr v-for="(item,index) in shopParamInfo.tables" :key="index" class="tr">
          <td v-for="itemInfo in item">{{itemInfo}}</td>
        </tr>
      </table>
    </div>
    <div class="des">
      {{shopParamInfo.desc}}
    </div>
    <!--这里展示set里面的信息-->
    <div class="set">
      <table class="table2" cellspacing="0">
        <tr v-for="(item,index) in shopParamInfo.set" class="tr" :key="index">
          <td class="key">{{item.key}}</td>
          <td class="value">{{item.value}}</td>
        </tr>
      </table>
    </div>

    <div class="disclaimer">
      {{shopParamInfo.disclaimer}}
    </div>
    <div class="info-img" v-if="shopParamInfo.image.length !== 0">
      <img :src="shopParamInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamsInfo",
    props: {
      shopParamInfo: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  .table1 {
    width: 100%;
    font-size: 14px;
  }

  .table {
    padding: 10px 0;

  }
  .table .tr td{
    border-bottom : 1px solid #939393;;
  }
  .table1 td {
    text-align: center;
    height: 40px;
    line-height: 40px;
  }

  .des, .disclaimer {
    font-size: 12px;
    padding: 0 2px;
    color: #999999;
    box-shadow: 0px 2px 2px rgba(100,100,100,0.1);
  }

  .table2 {
    width: 100%;
    margin-top: 10px;
  }

  .table2 .tr td {
    height: 25px;
    border-bottom: 1px solid #b4b4b4;
  }

  .table2 .tr td:nth-child(1) {
    width: 70px;
    padding-left: 8px;
  }

  .table2 .tr td:nth-child(2) {
    color: rgba(255, 94, 84, 0.96);
    padding: 5px 0;
  }

  .info-img img {
    width: 100%;

  }

</style>