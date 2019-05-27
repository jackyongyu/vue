import Vue from 'vue'
import Layout from './components/Layout'


// let router=new VRouter({
//    mode:'history',
//    routes:[
//      {
//        path:"/",
//        redirect:"/apple"
//      },
//      {
//        path:"/apple",
//        component:Apple,
//        children:[
//          {
//            path:'red',
//            component:redApple,
//          }
//        ]
//      },
//      {
//       path:"/banana",
//       component:Banana,
//     },
//     ]
// })

// Vue.use(VRouter)
new Vue({
  el:"#app",
  // router,
  template:'<Layout/>',
  components:{Layout}
})

// router.push({path:'/apple'})
