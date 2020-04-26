<template>
  <div class="user-info">
    <div class="user">
      <img src="~assets/img/profile/user.svg" class="picture" alt="">
      <div class="login">
        <div>登录/注册</div>
        <div class="bold">
          <img src="~assets/img/profile/phone.svg">
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="go">
        <img src="~assets/img/profile/arrow_right.svg" alt="">
      </div>
    </div>

    <div class="info">
      <div>
        <span class="count">0.00</span>
        <span>元</span>
        <div class="text">我的余额</div>
      </div>
      <div>
        <span class="count">0</span>
        <span>个</span>
        <div class="text">我的优惠</div>
      </div>
      <div>
        <span class="count">0</span>
        <span>分</span>
        <div class="text">我的积分</div>
      </div>
    </div>

    <div class="middle">
      <div>
        <img src="~assets/img/profile/email.png" alt="">
        <span>我的消息</span>
      </div>
      <div>
        <img src="~assets/img/profile/tickt.png" alt="">
        <span>积分商城</span>
      </div>
      <div>
        <img src="~assets/img/profile/vip.png" alt="">
        <span>会员卡</span>
      </div>
    </div>

    <div class="foot">
      <div @click="goCart">
        <img src="~assets/img/profile/cart.png" alt="">
        <span>我的购物车</span>
      </div>
      <div>
        <img src="~assets/img/profile/download.png" alt="">
        <span>下载购物app</span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    methods: {
      goCart() {
        this.$router.push('/cart')
      }
    }
  }
</script>

<style scoped>
  * {
    font-size: 16px;
  }

  .user {
    background-color: var(--color-tint);
    display: flex;
    align-items: center;
    padding: 10px 15px;
  }

  .picture {
    width: 55px;
    background-color: #f2f2f2;
    border-radius: 50%;
  }

  .login {
    flex: 2;
    margin-left: 15px;
    color: #efefef;
  }

  .login div:nth-child(1) {
    font-size: 18px;
  }

  .login div:nth-child(2) {
    font-size: 14px;
    margin-top: 4px;
  }

  .go {
    flex: 1;
    text-align: right;
  }

  .go img {
    width: 35px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    border-bottom: 13px solid #ececec;
  }

  .info div {
    text-align: center;
  }

  .middle div:last-child {
    border-bottom: none;
  }

  .info .count {
    color: orange;
    font-size: 20px;
    font-weight: 700;
  }

  .info .text {
    margin-top: 5px;
  }

  .middle img {
    width: 20px;
    margin-right: 6px;
  }

  .middle div {
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #e4e4e4;
    padding: 0 15px;
  }

  .middle {
    border-bottom: 13px solid #ececec;
  }

  .foot img {
    width: 20px;
    margin-right: 6px;
  }

  .foot div {
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #e4e4e4;
    padding: 0 15px;
  }

  .foot div:last-child {
    border-bottom: none;
  }
  .bold{
    display: flex;
  }
  .bold img{
    width: 15px;
  }
</style>