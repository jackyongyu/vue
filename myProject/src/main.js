import Vue from 'vue'
import Layout from './components/Layout'
import ExhibitionList from './pages/index'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Detail from './pages/detail'
import Analysis from './pages/detail/analysis'
import Count from './pages/detail/count'
import Publish from './pages/detail/publish'
import Forecast from './pages/detail/forecast'
import OrderList from './pages/orderList'
import store from './store'

Vue.use(VueRouter)
Vue.use(VueResource)
let router=new VueRouter({
   mode:'history',
   routes:[
     {
       path:"/",
       component:ExhibitionList
     },
     {
       path:"/orderList",
       component:OrderList
     },
     {
      path:"/detail",
      component:Detail,
      redirect:"/detail/count",
      children:[
        {
          path:'analysis',
          component:Analysis
        },
        {
          path:'count',
          component:Count
        },
        {
          path:'publish',
          component:Publish
        },
        {
          path:'forecast',
          component:Forecast
        },
      ]
    }
    ]
})

new Vue({
  el:"#app",
  router,
  store,
  template:'<Layout/>',
  components:{Layout}
})

