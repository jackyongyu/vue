<template>
  <div>
    <p v-html="hello"></p>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item.name}} -- {{item.price}}</li>
    </ul>
    <a v-if="isPart">partA</a>
    <a v-else>no data</a>
    <button @click="addItem">addItem</button>
    <select v-model="selection">
         <option value="1">1</option>
         <option value="2">2</option>
      </select>  
    {{selection}}
    <component-a @my-emit="onCompmyEvent"></component-a>
  </div>
</template>

<script>
import Vue from "vue";
import ComponentA from "./components/ComponentA";
export default {
  name: "App",
  components: {
    "component-a": ComponentA
  },
  data() {
    return {
      selection:null,
      mybox: [],
      hello: "<span>world!</span>",
      link: "http://www.baidu.com",
      addClass: ["font-red", "font-orange", "font-right"],
      classA: "font-classA",
      hasError: false,
      styleClass: {
        "font-size": "18px",
        color: "red"
      },
      isPart: "ture",
      list: [
        {
          name: "apple",
          price: "10r"
        },
        {
          name: "banana",
          price: "5r"
        }
      ],
      listObject: {
        name: "orange",
        price: "5r",
        color: "yellow",
        size: "4cm"
      }
    };
  },
  methods: {
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
