<template>
  <div>
    <!-- {{$route.params.color}} -->
    <p id="appletext">{{ msg }}</p>
    <!-- <button @click="getParam">get param</button> -->
  </div>
</template>

<script>
export default {
  name: "redApple",
  data() {
    return {
      msg: "this is redapple"
    }
  },
//   methods: {
//     getParam() {
//       console.log(this.$route.params);
//     }
//   }
};
</script>

<style>
#appletext{
  font-size: 20px;
  color:#666;
}
</style>