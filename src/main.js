import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import toast from 'components/common/toast/index'
import VueLazyload from "vue-lazyload";
import FastClick from 'fastclick'
Vue.prototype.$bus = new Vue()/*Vue 实例可以作为事件总线*/
Vue.config.productionTip = false
/*安装toast插件*/
Vue.use(toast)
/*在这里会自动调用插件的install方法*/

/*使用懒加载*/
Vue.use(VueLazyload,{
  loading:require('./assets/img/common/dsy.png')/*占位图片*/
})

/*解决移动端300ms延迟*/
FastClick.attach(document.body)/*附加道body上*/
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
