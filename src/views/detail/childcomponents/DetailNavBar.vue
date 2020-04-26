<template>
  <div id="detailNav">
    <nav-bar>
      <div slot="left" class="back" @click="BackHome">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="middle" class="title">
        <div v-for="(item,index) in titles" :class="{active:currentIndex==index}"
             class="titleItem" @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick',index)
      },
      BackHome(){
        this.$router.push('/home')
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;
  }

  .titleItem {
    flex: 1;
  }

  .active {
    color: red;
  }
  .back{
    margin-top: 6px;
  }
  #detailNav{
    position: relative;
    background-color: white;
    z-index: 9;
  }
</style>