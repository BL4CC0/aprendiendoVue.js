import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {nombre:"Pera", cantidad:0},
      {nombre:"Manzana", cantidad:0},
      {nombre:"Durazno", cantidad:0}
    ]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++
    },
    resetear(state){

        state.frutas.forEach(elem => {
          elem.cantidad = 0
        })

        // o  

        // state.frutas.forEach(function(elem){
          
        //   return elem.cantidad = 0 

        // }) 

    }
  },
  actions: {
  },
  modules: {
  }
})
