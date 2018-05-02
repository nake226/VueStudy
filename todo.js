'use strict'

// todo-itemという子コンポーネント
Vue.component(
  // html側のタグと同名
  'todo-item',
  {
    // 下記の'定期を買う'などの親コンポーネントの情報を受け取るプロパティ
    // htmlの[v-bind:'']記述で親コンポーネントを参照できる
    props: ['todoParent'],
    template: '<li class="todoList_item">{{ todoParent.text }}</li>'
  }
)

// 親コンポーネント
const vm = new Vue({
  el: '#app',
  data: {
    todos: [
      {
        id: 1, text: '定期を買う'
      },
      {
        id: 2, text: '公共料金を支払う'
      },
      {
        id: 3, text: 'Reactの勉強を進める'
      },
    ]
  }
})