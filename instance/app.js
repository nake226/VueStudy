'use strict'

// Vueインスタンスの作成
var app1 = new Vue({
  el: '#app-1',
  data: {
    price: 800,
    quantity: 100
  }
})
// データとメソッド
var product = {
  name: '夏エール',
  price: 550,
  quantity: 100
};
// dataが参照するproductを凍結
//Object.freeze(product);
var app2 = new Vue({
  el: '#app-2',
  data: product
})
// インスタンスライフサイクルフック
var app3 = new Vue({
  el: '#app-3',
  data: {
    price: 1000
  },
  // インスタンスの生成後に実行
  created() {
    this.price *= 1.08;
  }
})