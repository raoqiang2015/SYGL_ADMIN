// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iView from 'iview';
import VueI18n from 'vue-i18n';
import 'iview/dist/styles/iview.css';
import App from './App';
import { router } from './router';

Vue.use(VueI18n);
Vue.use(iView);
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
