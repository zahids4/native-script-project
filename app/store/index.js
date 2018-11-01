import Vue from 'vue';
import Vuex from 'vuex';

import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 13
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    increment (state) {
      state.count++
    }
  }
})