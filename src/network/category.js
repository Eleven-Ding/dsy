import {request} from "./request";


export function getCategory() {
  return request({
    url: '/api/h8/category'
  })
}

  export function getSubcategory(maitKey) {
  return request({
    url: '/api/h8/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/api/h8/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
