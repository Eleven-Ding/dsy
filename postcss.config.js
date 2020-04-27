module.exports={
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth: 375,/*对应设计稿的宽度*/
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['ignore','tab-bar','tab-bar-item'],/*这里的ignore是类名*/
      minPixelValue: 1,
      mediaQuery: false
    }
  }
}