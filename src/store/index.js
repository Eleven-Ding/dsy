import Vue from "vue";
import Vuex from "vuex"
/*1.安装插件*/
Vue.use(Vuex)
/*2.创建store对象*/
const store = new Vuex.Store({
  state: {
    cartList: [],/*这里面是 商品一 商品2 商品3*/
    IsSelectAll: true,
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++
    },
    addCart(state, payload) {
      payload.checked = true
      state.cartList.push(payload)
    },
    changeState(state) {
      /*在这里判断全部的是不是都选中了*/
      for (let item in state.cartList) {
        if (!state.cartList[item].checked) {
          state.IsSelectAll = false
          return
        }
      }
      state.IsSelectAll = true
    },
    changeIsSelectAll(state) {
      state.IsSelectAll = !state.IsSelectAll
      for (let item in state.cartList) {
        if (state.IsSelectAll) {
          state.cartList[item].checked = true
        } else {
          state.cartList[item].checked = false
        }
      }
    },
    Add(state, payload) {
      const product = state.cartList.find(item =>
        item.iid === payload.iid
      )
      product.count++
    },
    Sub(state, payload) {
      const product = state.cartList.find(item =>
        item.iid === payload.iid
      )
      product.count--
    },
  },
  actions: {
    addCart(context, payload) {
      /*查找是否有*/
      return new Promise((resolve, reject) => {
        /*查找商品*/
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        /*分发任务*/
        if (oldProduct) {
          context.commit('addCounter', oldProduct)
          resolve('当前商品数量+1')
        } else {
          context.commit('addCart', payload)
          resolve('添加购物车成功!')
        }
      })
    },
    checkLeast(context) {
      let flag = false
      return new Promise((resolve, reject) => {
        for (let item in context.state.cartList) {
          if (context.state.cartList[item].checked) {
            flag = true
            break
          }
        }
        /*在这里判断flag的值*/
        if(flag){
          resolve('结算成功!')
          context.state.cartList=[]
        }else {
          resolve('请至少选择一件商品!')
        }
      })
    }
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    },
    IsSelectAll(state) {
      return state.IsSelectAll
    },
    checkedCount(state) {
      let i = 0
      for (let item in state.cartList) {
        if (state.cartList[item].checked)
          i += state.cartList[item].count
      }
      return i
    },
    allPrice(state) {
      /*笨方法 应该可以用reduce*/
      let sum = 0
      for (let item in state.cartList) {
        if (state.cartList[item].checked) {
          sum += state.cartList[item].count * parseFloat(state.cartList[item].price)
        }
      }
      return sum
    }
  }
})
/*3.挂载到Dom实例*/
export default store