import Vue from 'vue'
import Layout from './components/Layout'
import ExhibitionList from './pages/index'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Detail from './pages/detail'
import Analysis from './pages/detail/analysis'
import Court from './pages/detail/court'
import Publish from './pages/detail/publish'
import Forecast from './pages/detail/forecast'

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
      path:"/detail",
      component:Detail,
      redirect:"/detail/analysis",
      children:[
        {
          path:'analysis',
          component:Analysis
        },
        {
          path:'court',
          component:Court
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
  template:'<Layout/>',
  components:{Layout}
})

