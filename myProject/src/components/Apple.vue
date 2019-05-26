<template>
  <div>
    {{$route.params.color}}
    <p id="appletext">{{ msg }}</p>
    <button @click="getParam">get param</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Apple",
  data() {
    return {
      msg: "this is apple"
    };
  },
  methods: {
    getParam() {
      console.log(this.$route.params);
    }
  }
};
</script>

<style>
#appletext{
  font-size: 20px;
  color:#666;
}
</style>