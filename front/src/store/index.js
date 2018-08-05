import Vue from 'vue'
import Vuex from 'vuex';
import bike from './modules/bike.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bike: bike,
  },
  strict: false
})