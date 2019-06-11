import Vue from 'vue'
const state={
    orderList:[],
    parames:{}
}

const getters={
    getOrderList:(state)=> state.orderList
}

const actions={
     fetchOrderList({commit,state}){
          Vue.http.post('/api/getOrderList',state.parames)
          .then(
              res=>{
                  commit('updateOrderList',res.data.list)
              },
              err=>{

              }
          )
     }
}

const mutations={
      updateOrderList(state,orderList){
          state.orderList=orderList
      },
      updateParames(state,{key,val}){
           state.parames[key]=val
      }
}

export default{
    state,
    getters,
    actions,
    mutations
}
