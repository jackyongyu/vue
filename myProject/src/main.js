import Vue from 'vue'
import Layout from './components/Layout'
import ExhibitionList from './pages/index'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
let router=new VueRouter({
   mode:'history',
   routes:[
     {
       path:"/",
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

