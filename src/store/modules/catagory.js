export default {
  namespaced: true,
  state: {
    catagory: [],
    currentCatagory: ''
  },
  mutations: {
    updateCatagory (state, payload) {
      state.catagory = payload
    },
    updateCurrentCatagory (state, payload) {
      state.currentCatagory = payload
    }
  },
  actions: {
  }
}
