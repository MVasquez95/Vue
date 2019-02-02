import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes }from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.root = 'https://vuejs-http-cc3ee.firebaseio.com/usuarios.json';

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
