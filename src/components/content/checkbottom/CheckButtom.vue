<template>
    <div class="check-button" :class="{checked:IsChecked}" >
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
  export default {
    name: "CheckButtom",
    props:{
      IsChecked:{
        type:Boolean,
        default:true
      }
    },
  }
</script>

<style scoped>
.check-button{
  border-radius: 50%;
  border: 2px solid rgba(188, 188, 188, 0.29);
  transform: scaleX(1.2) scaleY(1.2);
}
  .checked{
    background-color: #ff6574;
    border: 2px solid white;
  }
</style>