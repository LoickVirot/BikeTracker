import Vue from 'vue';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMap, faCog, faMotorcycle, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import store from './store';
import routes from './routes';

// Router
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  next();
  if (store.state.auth.user.username == null) {
    if (from.fullPath !== '/login') { // Prevent infinite loops 
      next({
        path: '/login',
      });
    }
  }
  else {
    // Try to access to login page
    if (to.fullPath == '/login') {
      next({
        path: '/'
      });
    }
  }
  next();
});

library.add(faMap);
library.add(faCog);
library.add(faMotorcycle);
library.add(faArrowLeft);
library.add(faArrowRight);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
