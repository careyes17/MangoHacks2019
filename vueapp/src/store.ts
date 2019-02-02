import Vue from 'vue';
import Vuex from 'vuex';

import AllPatientsModule from './store/AllPatientsModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  
  actions: {

  },
  modules: {
    allPatients: AllPatientsModule
  }
});
