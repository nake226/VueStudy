'use strict'

var app1 = new Vue({
  el: '#app-1',
  data: {
    hasErr: true,
    isApp: true
  },
  methods: {
    changeErrStatus() {
      if (this.hasErr) {
        this.hasErr = false
      } else {
        this.hasErr = true
      }
    }
  }
})