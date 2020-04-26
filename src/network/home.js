import {request} from "./request";
export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}
export function getHomeGoodsData(type,page) {
  return request({
    url:'/api/h8/home/data',
    params:{
      type,
      page/*
           * 这个是把数据加到url中的
           */
    }
  })
}