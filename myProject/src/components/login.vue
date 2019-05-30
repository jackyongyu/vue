<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" placeholder="请输入用户名" v-model="username">
        </div>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密 &nbsp;&nbsp;码：</span>
        <div class="g-form-input">
          <input type="password" placeholder="请输入密码" v-model="userpassword">
        </div>
      </div>
      <div class="g-for-line">
        <div class="g-form-btn">
          <a href="#" class="button" @click="onsubmit">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
        // 1.v-model的绑定，使得获取到input
      username: "",
      userpassword: ""
    };
  },
  methods:{
      onsubmit(){
          console.log(this.username,this.userpassword);
          
      }
  }
};
</script>
// 1.双向绑定
<style>
</style>
