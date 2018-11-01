import Vue from 'vue';
import Vuex from 'vuex';

import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 'SAIIIM'
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})