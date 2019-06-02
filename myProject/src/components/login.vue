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
      <div class="error">{{errorText}}</div>
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
      userpassword: "",
      errorText: "",
      enterTime: false,
      enterTimes: false
    };
  },
  //2.input值改变，v-model赋予的username变化，(属性监听)，返回新值
  //渲染过程，先是model后是view?errorText模拟计算属userErrorText报错
  computed: {
    //计算属性点击按钮计算一次，?
    // v-model放在外层if中，才能监听；
    //上条+正则判断中if条件判断内再判断又有else内容?
    //？解决:拿出单判断，放置上个判断之下，覆盖上个结果
    //？范围：适用于修改一次，不然与上个判断相同
    userError() {
      let status, userErrorText;
      if (!/@/g.test(this.username)) {
        userErrorText = "不包含@";
        status = false;
      } else {
        userErrorText = "";
        status = true;
      }
      if (!this.enterTime) {
        userErrorText = "";
        this.enterTime = true;
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
      if (!this.enterTimes) {
        passwordErrorText = "";
        this.enterTimes = true;
      }
      return { passwordErrorText, status };
    }
  },
  methods: {
    onsubmit() {
      let errorText;
      if (this.userError.status && this.passwordError.status) {
        this.errorText = "";
        this.$http.get("api/login").then(
          res => {
            console.log(res.data);
            
            this.$emit('has-login',res.data)
          },
          err => {
            console.log(err);
          }
        );
      } else {
        this.errorText = "验证失败";
      }
    }
  }
};
</script>
// 1.双向绑定
<style>
</style>
