import Vue from "vue";
import Vuex from "vuex";
import { $fetch } from "./plugins/fetch";
import router from "./router";

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
    async login({ commit }) {
      try {
        const user = $fetch("user");
        commit("user", user);

        if (user) {
          // 重定向到对应的路由，或返回首页
          router.replace(
            router.currentRoute.params.wantedRoute || {
              name: "home"
            }
          );
        }
      } catch (err) {
        console.warn(err);
      }
    },

    logout({ commit }) {
      commit("user", null);

      $fetch("logout");

      // 如果这个路由是私有的
      // 我们跳转到登录页面
      if (router.currentRoute.matched.some(r => r.meta.private)) {
        router.replace({
          name: "login",
          params: {
            wantedRoute: router.currentRoute.fullPath
          }
        });
      }
    }
  }
});
