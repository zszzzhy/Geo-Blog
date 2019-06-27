import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 避免在 mutations 中使用异步调用
  strict: true,

  state: {
    user: null
  },

  getters: {
    user: state => state.user,
    userPicture: () => null
  },

  mutations: {
    user: (state, user) => {
      state.user = user;
    }
  },
  actions: {
    login({ commit }) {
      const userData = {
        profile: {
          displayName: "Mr Car"
        }
      };
      commit("user", userData);
    },

    logout({ commit }) {
      commit("user", null);
    }
  }
});
