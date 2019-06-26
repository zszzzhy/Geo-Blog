import Vue from "vue";
import Router from "vue-router";

import Login from "./views/Login.vue";
import GeoBlog from "./views/GeoBlog.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

const routers = [
  { path: "/", name: "home", component: GeoBlog, meta: { private: true } },
  { path: "/login", name: "login", component: Login },
  { path: "*", component: NotFound }
];

const router = new Router({
  routers,
  mode: "history",
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    // 如果有滚动位置，可以恢复该滚动位置
    if (savedPosition) {
      return savedPosition;
    }
    // 路由是否有模仿浏览器行为的散列值
    if (to.hash) {
      return { selector: to.hash };
    }
    // 路由改变时滚动到页面的顶部
    return { x: 0, y: 0 };
  }
});

// 路由守卫
// TODO

export default router;
