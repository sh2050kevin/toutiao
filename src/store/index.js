import Vue from 'vue'
import Vuex from 'vuex'
import catagory from './modules/catagory'
import newlist from './modules/newlist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    catagory: state => state.catagory.catagory,
    currentCatagory: state => state.catagory.currentCatagory,
    currentList: state => state.newlist.allData[state.catagory.currentCatagory]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    catagory,
    newlist
  }
})
