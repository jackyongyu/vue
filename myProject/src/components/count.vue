<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minus">-</div>
    <div class="counter-show">
      <input type="text" v-model="number" @keyup="fixNumber">
    </div>
    <div class="counter-btn" @click="add">+</div>
  </div>
</template>

<script>
export default {
  name: "Count"
};
</script>

<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-bottom: 1px solid #e3e3e3;
  border-top: 1px solid #e3e3e3;
  width: 30px;
  height: 25px;
  line-height: 25px;
  outline: none;
  text-align: center;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  background: #4fc08d;
  border-color: #4fc08d;
  color: #fff;
}
</style>
