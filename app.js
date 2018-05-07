//  宣言的レンダリング(1)
const app = new Vue({
  el: '#app',
  data: {
    greet: 'Hello World!'
  }
})
// 宣言的レンダリング(2)
const app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
  }
})
// 条件分岐とループ(1)
const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
// 条件分岐とループ(2)
const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: 'walk'},
      {text: 'run'},
      {text: 'stop'},
    ],
  }
})
// ユーザー入力の制御(1)
const app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'こんにちは、こんにちは、いい天気ですね。'
  },
  methods: {
    reverseMessage(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})
// ユーザー入力の制御(2)
const app6 = new Vue({
  el: '#app-6',
  data: {
    fruits: 'りんご'
  },
})
// コンポーネントによる構成
Vue.component(
  // = html側のタグ名
  'todo-item',
  {
    // props: 親コンポーネントとテンプレートを結びつけるフックのようなもの
    // -> 名前は何でも良いが、'hogeFuga'はhtmlでは'hoge-fuga'と書く
    props: ['todo'],
    template: '<li class="todoList_item">{{ todo.text }}</li>'
  }
)
// 親コンポーネント
const vm = new Vue({
  el: '#app-7',
  data: {
    todos: [
      {id: 1, text: '定期を買う'},
      {id: 2, text: '公共料金を支払う'},
      {id: 3, text: 'Reactの勉強を進める'},
    ]
  }
})