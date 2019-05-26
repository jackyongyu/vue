<template>
  <div>
    {{$route.params.color}}
    {{ msg }}
    <button @click="getParam">get param</button>
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