import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import * as filters from "./filters";
import VueFetch, { $fetch } from "./plugins/fetch";

// 过滤器
for (const key in filters) {
  Vue.filter(key, filters[key]);
}

// API域名配置
Vue.use(VueFetch, {
  baseUrl: "http://localhost:3000"
});

function main() {
  // 启动应用
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
}

main();
