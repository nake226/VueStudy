const app = new Vue({
  el: '#app',
  data: {
    greet: 'Hello World!'
  }
})

const app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
  }
})

const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
