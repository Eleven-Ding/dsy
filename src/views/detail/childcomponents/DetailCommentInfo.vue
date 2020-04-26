<template>
  <!--用户评论 这个默认一个评论-->
  <div class="comment" v-if="Object.keys(commentInfo).length!==0">
    <div class="Info-header">
      <div class="header-title">用户评价</div>
      <div class="head-more">更多</div>
    </div>

    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>

    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created| showDate}} </span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img v-for="(item,index) in commentInfo.images" :src="item" alt="" :key="index">
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../../../common/utils";

  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object
      }
    },
    filters: {
      showDate: function (value) {
        let date = new Date(value * 1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .Info-header {
    display: flex;
    justify-content: space-between;
    padding: 18px 4px;
    box-shadow: 0px 2px 2px rgba(100, 100, 100, 0.1);
  }

  /*头像名字*/
  .info-user {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }

  .info-user img {
    width: 50px;
    border-radius: 50%;

  }

  .info-user span {
    margin-left: 10px;
  }

  /*评论信息*/
  .info-detail {
    margin-top: 10px;
    font-size: 13px;
  }

  .info-detail span {
    margin-top: 6px;
  }

  .info-detail p {
    color: #252525;
    margin-top: 6px;
    margin-bottom: 6px;
  }

  /*图片*/
  .info-imgs {
    display: flex;
    margin-top: 4px;
  }

  .info-imgs img {
    width: 60px;
    height: 60px;
    margin-left: 4px;
    margin-top: 6px;
  }

  .info-imgs img:nth-child(1) {
    margin-left: -4px;
  }

  .comment {
    box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.1);
  }
</style>