<template>
  <div>
    <!-- {{$route.params.color}} -->
    {{ msg }}
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