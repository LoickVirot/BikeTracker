import Vue from 'vue';
import Vuex from 'vuex';
import bike from './modules/bike';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bike: bike,
    auth: auth,
  },
  strict: false,
});
