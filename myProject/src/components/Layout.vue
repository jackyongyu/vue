<template>
  <div>
    <div class="app-head">
      <div class="app-head-innner">
        <img src="../assets/logo.png" alt>
        <div class="head-nav">
          <ul class="nav-list">
            <li @click="openLogDialog">登陆</li>
            <li>|</li>
            <li @click="openRegDialog">注册</li>
            <li>|</li>
            <li @click="openAboutDialog">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>©2019 yy code</p>
    </div>
    <myDialog :isShow="isShowLogdiolag" @closetoDialog="closeDialog('isShowLogdiolag')">
      <Login></Login>
    </myDialog>
    <myDialog :isShow="isShowResdiolag" @closetoDialog="closeDialog('isShowResdiolag')">
      <Register></Register>
    </myDialog>
    <myDialog :isShow="isShowAboutdiolag" @closetoDialog="closeDialog('isShowAboutdiolag')">
      <p>
        着时代的发展，越来越多的有钱人选择别墅作为家居住宅的首选。
        别墅因为面积和格局于普通家居不同，在装修设计的方式上也有所区别。
        那么别墅装修应该怎么做呢?关于别墅装修方法你知道哪些呢才
      </p>
    </myDialog>
  </div>
</template>

<script>
import Dialog from "./dialog";
import Login from "./login";
import Register from "./register";
export default {
  name: "Layout",
  components: {
    myDialog: Dialog,
    Login,
    Register
  },
  data() {
    return {
      isShowLogdiolag: false,
      isShowResdiolag: false,
      isShowAboutdiolag: false
    };
  },
  methods: {
    onChange() {},
    openLogDialog() {
      this.isShowLogdiolag = true;
    },
    openRegDialog() {
      this.isShowResdiolag = true;
    },
    openAboutDialog() {
      this.isShowAboutdiolag = true;
    },
    closeDialog(attr) {
      this[attr] = false;
    }
  }
};
</script>

<style>
/* 清除内外边距 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
pre, /* text formatting elements 文本格式元素 */
fieldset, lengend, button, input, textarea, /* form elements 表单元素 */
th, td {
  /* table elements 表格元素 */
  margin: 0;
  padding: 0;
}
body {
  margin: 0 !important;
}
/* 设置默认字体 */
body,
button,
input,
select,
textarea {
  /* for ie */
  /*font: 12px/1 Tahoma, Helvetica, Arial, "宋体", sans-serif;*/
  font: 12px/1 Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif; /* 用 ascii 字符表示，使得在任何编码下都无问题 */
}

h1 {
  font-size: 18px; /* 18px / 12px = 1.5 */
}
h2 {
  font-size: 16px;
}
h3 {
  font-size: 14px;
}
h4,
h5,
h6 {
  font-size: 100%;
}

/* 重置列表元素 */
ul,
ol {
  list-style: none;
}

/* 重置文本格式元素 */
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

/* 编辑导航和footer的属性 */
body {
  font-size: 14px;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90;
  width: 100%;
}
.app-head-innner {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.app-head-innner img {
  width: 70px;
  height: 70px;
  margin-top: 10px;
}
.head-nav {
  height: 90px;
  line-height: 90px;
}
.nav-list {
  display: flex;
}
.nav-list li {
  margin-right: 10px;
  cursor: pointer;
}
.app-foot {
  text-align: center;
  height: 80px;
  line-height: 80px;
  background: #e3e4e8;
}
.app-content {
  background: #f4f2f2;
  padding-top: 10px;
  padding-bottom: 10px;
}
/* form表单样式 */
.g-form-line {
  padding: 15px 0;
}
.g-frm-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-button {
  padding-left: 100px;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button :hover {
  background: #4fc08d;
}
.error{
  color:red;
}
</style>













