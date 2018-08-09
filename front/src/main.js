import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import store from './store'
import routes from './routes'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMap, faCog, faMotorcycle, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Router 
Vue.use(VueRouter)
const router = new VueRouter({
  routes
});

library.add(faMap)
library.add(faCog)
library.add(faMotorcycle)
library.add(faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
