<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButtom :IsChecked="product.checked" @click.native="checkClick"/>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">商品描述: {{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{product.price}}</div>
        <div class="item-count right">
        <button  @click="sub" class="sub" :disabled="product.count<=1"> - </button>
          x{{product.count}}
        <button  @click="add" class="add"> +</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButtom from "components/content/checkbottom/CheckButtom";

  export default {
    name: "CartListItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    data(){
      return {
        IsDisabled:false
      }
    },
    components: {
      CheckButtom
    },
    methods: {
      checkClick() {
        this.product.checked = !this.product.checked
        this.$store.commit('changeState')/*在这里判断全部的是不是都选中了*/
      },
      sub(){
        /*这里减少那个count*/
        this.$store.commit('Sub',this.product)
      },
      add(){
       // console.log(233);
        this.$store.commit('Add',this.product)
       // console.log(this.product.count);
        /*这里增加那个count*/
      }
    }
  }
</script>

<style scoped>
  .sub,.add{
    width: 20px;
    background-color: #ff8198;
    border: none;
    color:white;
  }
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
</style>