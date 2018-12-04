'use strict'

var app1 = new Vue({
  el: '#app-1',
  data: {
    error: true,
    isApp: true
  },
  computed: {
    errorMaker: function(){
      return this.error? 'エラーを消す' : 'エラーを起こす';
    }
  },
  methods: {
    changeErrStatus() {
      this.error = !this.error;
    }
  }
})