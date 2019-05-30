<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" placeholder="请输入用户名" v-model="username">
          <span class="error">{{userError.userErrorText}}</span>
        </div>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密 &nbsp;&nbsp;码：</span>
        <div class="g-form-input">
          <input type="password" placeholder="请输入密码" v-model="userpassword">
          <span class="error">{{passwordError.passwordErrorText}}</span>
        </div>
      </div>
      <div class="g-for-line">
        <div class="g-form-btn">
          <a href="#" class="button" @click="onsubmit">登录</a>
        </div>
      </div>
      <div class="error">{{}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
  // 1.v-model的绑定，使得获取到input值
      username: "",
      userpassword: ""
    };
  },
  //2.input值改变，v-model绑定的username变化，(属性监听)，返回新值
  computed: {
    userError() {
      let status, userErrorText;
      if (!/@/g.test(this.username)) {
        userErrorText = "不包含@";
        status = false;
      } else {
        userErrorText = "";
        status = true;
      }
      return { userErrorText, status };
    },
    passwordError() {
      let status, passwordErrorText;
      if (!/^\w{1,6}$/g.test(this.userpassword)) {
        passwordErrorText = "超出6位";
        status = false;
      } else {
        passwordErrorText = "";
        status = true;
      }
      return { passwordErrorText, status };
    }
  },
  methods: {
    onsubmit() {
       if(this.passwordError.status||this.passwordError.status){
            
       }else{

       }
    }
  }
};
</script>
// 1.双向绑定
<style>
</style>
