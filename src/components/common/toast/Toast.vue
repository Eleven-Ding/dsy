<template>
  <div class="toast" v-show="IsShow">
    <div>
      {{message}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        IsShow: false
      }
    },
    methods: {
      show(message = '默认文字', duration = 1200) {

        this.IsShow = true
        this.message = message
        setTimeout(() => {
          this.IsShow = false
          this.message = ''
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .8);
    padding: 10px 15px;
    width: 80%;
    text-align: center;
    color: white;
    z-index: 1000;
  }
</style>