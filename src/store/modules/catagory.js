import axios from 'axios'

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
    async getCatagory (context) {
      const { data: { data: { channels } } } = await axios.get('http://api-toutiao-web.itheima.net/app/v1_0/user/channels')
      context.commit('updateCatagory', channels)
      context.commit('updateCurrentCatagory', channels[0].id)
    }
  }
}
