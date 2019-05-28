import Vue from 'vue'
import Layout from './components/Layout'
import ExhibitionList from './pages/index'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let router=new VueRouter({
   mode:'history',
   routes:[
     {
       path:"/",
       redirect:"/PageIndex"
     },
     {
       path:'/exhibitionList',
       component:ExhibitionList
     }
    
    ]
})

new Vue({
  el:"#app",
  router,
  template:'<Layout/>',
  components:{Layout}
})

