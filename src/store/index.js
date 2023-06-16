import Vue from 'vue'
import Vuex from 'vuex'
import catagory from './modules/catagory'
import newlist from './modules/newlist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
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
