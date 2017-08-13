// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { store } from './store/store'
import VueLazyload from 'vue-lazyload'
export const eventBus = new Vue()

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // loading: '/Users/hendrikcammann/Documents/Development/web/portfolio_vue/src/assets/Spinner.svg',
  loading: require('./assets/Spinner.svg'),
  attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: [ 'scroll' ]
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
