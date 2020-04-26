import Toast from "./Toast";
const obj={

}
obj.install=function (Vue ){/*默认传过来vue*/
  //console.log('执行install',vue);
  //document.body.append(Toast.$el)
  //1,创建组件构造器
  const toastConstructor=Vue.extend(Toast)
  //2.根据new的方式 创建一个组件对象
  const toast=new toastConstructor()
  //3.将组件对象手动挂载$mount
  toast.$mount()
  //4.toast.$el就是那个div了
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast=toast
}
export default obj