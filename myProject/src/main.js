import Vue from 'vue'
import App from './App'


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
  template:'<App/>',
  components:{App}
})

// router.push({path:'/apple'})
