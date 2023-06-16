import axios from 'axios'

export default {
  namespaced: true,
  state: {
    allData: {}
  },
  mutations: {
    updateList (state, { currentCatagory, list }) {
      state.allData = { ...state.allData, [currentCatagory]: list }
    }
  },
  actions: {
    async getNewList (context, cataId) {
      const { data: { data: { results } } } = await axios.get(`http://toutiao.itheima.net/v1_0/articles?channel_id=${cataId}&timestamp=${new Date().getTime()}&with_top=1`)
      context.commit('updateList', { currentCatagory: cataId, list: results })
    }
  }
}
