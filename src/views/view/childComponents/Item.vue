<template>
  <div class="item">
    <div class="listitem">
      <div>{{message.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: {
      message: {
        type: Object,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .listitem {
    color: white;

  }
</style>