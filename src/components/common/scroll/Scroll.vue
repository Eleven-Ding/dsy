<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot>  </slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      },

    },
    data(){
      return{
        scroll:null,
        y:0
      }
    },
    mounted() {
      this.scroll=new BScroll(this.$refs.wrapper, {
        probeType:this.probeType,//0 1都不实时侦测 3 才是实时侦测
        click:true,
        pullUpLoad: this.pullUpLoad
      })
      /*监听滚动*/
      this.scroll.on('scroll',position=>{
        this.y=position
        this.$emit('scroll',position)/*发射一个行为*/
      })
      /*监听上拉事件*/
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')/*传出去 让首页加载更多*/
        setTimeout(()=>{
          this.scroll.finishPullUp()
        },1000)

      })
    },
    methods:{
      refresh(){
        this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>