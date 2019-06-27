<template>
  <!-- 登录页面，包含一个 Sign in with Google 按钮 -->
  <div class="welcome">
    <h1>Welcome</h1>

    <div class="actions">
      <button @click="openGoogleSignin">Sign in with Google</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openGoogleSignin() {
      // TODO
      const url = "http://localhost:3000/auth/google";
      const name = "google_login";
      const specs = "width=500,height=500";
      window.open(url, name, specs);
    }
  }
};
</script>
