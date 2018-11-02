import Vue from 'vue';
import Vuex from 'vuex';
const Sqlite = require("nativescript-sqlite");

import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    database: null,
    data: [],
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    init(state, data) {
      state.database = data.database;
    },
    load(state, data) {
      state.data = [];
      for (var i = 0; i < data.data.length; i++) {
        state.data.push({
          firstname: data.data[i][0],
          lastname: data.data[i][1]
        });
      }
    },
    save(state, data) {
      state.data.push({
        firstname: data.data.firstname,
        lastname: data.data.lastname
      });
    },
  },
  actions: {
    init({ commit }) {
      (new Sqlite("my.db")).then(db => {
        db.execSQL("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)").then(id => {
          commit("init", { database: db });
        }, error => {
          console.log("CREATE TABLE ERROR", error);
        });
      }, error => {
        console.log("OPEN DB ERROR", error);
      });
    },
    insert({state, commit}, data) {
      state.database.execSQL("INSERT INTO people (firstname, lastname) VALUES (?, ?)", [data.firstname, data.lastname]).then(id => {
        commit("save", { data: data });
      }, error => {
        console.log("INSERT ERROR", error);
      });
    },
    query({state, commit}) {
      state.database.all("SELECT firstname, lastname FROM people", []).then(result => {
        commit("load", { data: result });
      }, error => {
        console.log("SELECT ERROR", error);
      });
    }
  }
})

store.dispatch("init");