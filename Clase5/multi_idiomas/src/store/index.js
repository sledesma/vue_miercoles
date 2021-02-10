import Vue from "vue";
import Vuex from "vuex";

import dict from './dict';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idiomaActual: 'en'
  },

  getters: {
    getWord: function(state) {
      return function(palabra) {
        return dict[state.idiomaActual][palabra];
      }
    }
  },

  mutations: {
    cambiarIdiomaActual(state, nuevoIdioma) {
      state.idiomaActual = nuevoIdioma;
    }
  },
  /*
  actions: {
    setESLang(store) {
      store.commit('cambiarIdiomaActual', 'es');
    },

    setENLang(store) {
      store.commit('cambiarIdiomaActual', 'en');
    }
  }
  */
});
