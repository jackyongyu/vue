import Vue from 'vue'
import Layout from './components/Layout'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let router=new VueRouter({
   mode:'history',
   routes:[
     {
       path:"/",
       redirect:"/PageIndex"
     },
    
    ]
})

new Vue({
  el:"#app",
  router,
  template:'<Layout/>',
  components:{Layout}
})

// router.push({path:'/apple'})
