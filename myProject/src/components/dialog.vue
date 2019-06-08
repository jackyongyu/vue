<template>
  <div>
    <div class="diolag-wrap">
      <div class="diolag-cover" @click="closemyDialog" v-if="isShow"></div>
      <transition name="drop">
        <div class="diolag-content" v-if="isShow">
          <p class="diolag-close" @click="closemyDialog">x</p>
          <slot>empty</slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    closemyDialog() {
      this.$emit("closetoDialog");
    }
  }
};
</script>

<style scoped>
.diolag-wrap {
  width: 100%;
  height: 100%;
  position: fixed;
}
.diolag-cover {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #000;
  opacity: 0.3;
  top: 0;
  left: 0;
  z-index: 5;
}
.diolag-content {
  width: 50%;
  max-height: 50%;
  position: fixed;
  left: 25%;
  top: 20%;
  background: #fff;
  border: 1px solid #404684;
  padding: 20px;
  z-index: 10;
  overflow: auto;
}
.diolag-close {
  position: absolute;
  top: 0;
  right: 5px;
}
/* 动画 */
.drop-enter-active {
  transition: all 0.5s ease;
}
.drop-leave-active {
  transition: all 0.3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}
</style>
