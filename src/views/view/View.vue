<template>
  <div class="view">
    <item-list :info-list="leftNav" @changeIndex="changeIndex"></item-list>
      <info-list :info-list="goodsList"/>
  </div>

</template>

<script>
  import {getCategory,getSubcategory} from "network/category";
  import ItemList from "./childComponents/ItemList";
  import InfoList from "./childComponents/InfoList";
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "Rview",
    data(){
      return{
        leftNav:[],
        goodsList:[]
      }
    },
    components:{
      ItemList,
      InfoList,
      Scroll
    },
    mounted() {
      /*在这里保存分类左边的信息*/
      getCategory().then(res=>{
        /*保存左侧数据*/
        this.leftNav=res.data.category.list
        getSubcategory(this.leftNav[0].maitKey).then(res=>{
          this.goodsList=res.data.list/*把这个goodlist传下去*/
        })
      })
/*      getSubcategory(594).then(res=>{
       this.goodsInfo
      })*/
    },
    methods:{
      changeIndex(maitKey){
        getSubcategory(maitKey).then(res=>{
          this.goodsList=res.data.list/*把这个goodlist传下去*/
          console.log(res.data.list);
        })

      }
    }

  }
</script>

<style scoped>

</style>
