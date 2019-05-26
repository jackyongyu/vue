// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import redApple from './components/apple/red'
import Apple from './components/Apple'
import Banana from './components/Banana'

let router=new VRouter({
   mode:'history',
   routes:[
     {
       path:"/apple",
       component:Apple,
       children:[
         {
           path:'red',
           component:redApple,
         }
       ]
     },
     {
      path:"/banana",
      component:Banana,
    },
    ]
})

Vue.use(VRouter)
new Vue({
  el:"#app",
  router,
  template:'<App/>',
  components:{App}
})

// router.push({path:'/apple'})
