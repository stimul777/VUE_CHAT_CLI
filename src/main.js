import Vue from 'vue'
import App from './App.vue'

// Дебагер vue
// const { app } = require('electron')
// app.on('ready', () => {
//   // ...
//   if (process.env.NODE_ENV !== 'production') {
//     require('vue-devtools').install()
//   }
//   // ...
// })
// ///////

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
