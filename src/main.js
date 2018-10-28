import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import store from './store'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
// Registering all Vue components inside a folder using WebPack
const req = require.context('./components/', true, /\.(js|vue)$/i);
req.keys().map(key => {
  const name = key.match(/\w+/)[0];
  return Vue.component(name, req(key).default)
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
