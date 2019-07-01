<script>
import { mapActions } from "vuex";

export default {
  mounted() {
    window.addEventListener("message", this.handleMessage);
  },
  beforeDestroy() {
    window.removeEventListener("message", this.handleMessage);
  },
  methods: {
    ...mapActions(["login"]),

    openGoogleSignin() {
      // 打开 Google 登录页弹框
      const url = "http://localhost:3000/auth/google";
      const name = "google_login";
      const specs = "width=500,height=500";
      window.open(url, name, specs);
    },
    handleMessage({ data, origin }) {
      // 检测消息来源是否正确
      if (origin !== "http://localhost:3000") {
        return;
      }

      if (data === "success") {
        this.login();
      }
    }
  }
};
</script>

<template>
  <!-- 登录页面，包含一个 Sign in with Google 按钮 -->
  <div class="welcome">
    <h1>Welcome</h1>

    <div class="actions">
      <button @click="openGoogleSignin">Sign in with Google</button>
    </div>
  </div>
</template>
