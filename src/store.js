import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 避免在 mutations 中使用异步调用
  strict: true,
  state: {
    user: null
  },
  mutations: {
    user: (state, user) => {
      state.user = user;
    }
  },
  actions: {}
});
