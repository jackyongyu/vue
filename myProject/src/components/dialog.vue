<template>
  <div>
    <div class="diolag-wrap" v-if="isShow.type">
      <div class="diolag-cover"></div>
      <div class="diolag-content">
        <p class="diolag-close">x</p>
        this's text of diolag
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props:{
      isShow:{
          type:Boolean,
          default:false
      }
  },
  data() {
    return {
       
    };
  },

};
</script>

<style>
.diolag-wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
}
.diolag-cover {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #000;
  opacity: 0.3;
}
.diolag-content {
  width:50%;
  max-height:50%;
  position: absolute;
  left: 25%;
  margin-top:20%;
  background: #fff;
  border: 1px solid #404684;
  padding:20px;
}
.diolag-close{
   position: absolute;
   top:0;
   right:5px;
}
</style>
