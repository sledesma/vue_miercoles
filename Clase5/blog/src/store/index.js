import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// console.log(process.env.API_URL)
const API_URL = 'https://5fc8e95d2af77700165adf86.mockapi.io/blog';

export default new Vuex.Store({
  state: {
    posts: []
  },
  
  mutations: {
    setPosts(state, newPosts) {
      state.posts = newPosts
    }
  },

  actions: {
    loadPosts(store) {
      fetch(API_URL)
        .then(r => r.json())
        .then(data => store.commit('setPosts', data));
    }
  },

  getters: {
    getPosts: (state) => (filtro = false) => {
      switch(typeof filtro) {
        case 'boolean':
          return state.posts;

        case 'function':
          return state.posts.filter(filtro);

        case 'number':
          return state.posts[filtro];
      }
    }

  }
})
