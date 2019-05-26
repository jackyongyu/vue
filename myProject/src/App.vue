<template>
  <div id="app">
   <img src="./assets/logo.png">
    <!-- <router-view></router-view>
    <router-link to="/apple">to apple</router-link>
    <router-link to="/banana">to banana</router-link> -->
    <!-- <router-link :to="{path:'apple/red'}">to redApple</router-link> -->
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "App",
  data() {
    return {
      myValue: "",
      myList: [
        {
          name: "apple",
          price: "10r"
        },
        {
          name: "banana",
          price: "5r"
        }
      ]
    };
  },
  watch: {
    myValue: function(data, oldData) {
      console.log(data, oldData);
    },
    myList: function() {
      this.tellUser();
    }
  },
  computed: {
    myValueWithoutNumber() {
      return this.myValue.replace(/\d/g, "");
    }
  },
  methods: {
    tellUser() {
      console.log("this is message of changing list");
    },
    changeList() {
      Vue.set(this.myList, 1, {
        name: "durian",
        price: "15r"
      });
    },
    getmyValueWithoutNumb() {
      return this.myValue.replace(/\d/g, "");
    },
    addItem() {
      Vue.set(this.list, 1, {
        name: "durian",
        price: "10y"
      });
    },
    toggle() {
      this.isPart = !this.isPart;
    },
    onKeydown() {
      console.log("on key down");
    },
    onCompmyEvent(prameCompA) {
      console.log("CompmyEvent" + prameCompA);
    }
  }
};
</script>






<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
