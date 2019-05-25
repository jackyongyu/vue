// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
let myHeaderChild={
  template:"<p>this is my myHeaderChild!</p>"   
}

let myHeader={
  template:'<p>this is my header!<my-header-child></my-header-child></p>',
  components:{
    "my-header-child":myHeaderChild
  }
}



new Vue({
  el:"#app",
  components:{
    "my-header":myHeader
  }
})
