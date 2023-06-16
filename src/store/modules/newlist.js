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
      const results = await axios.get(`http://api-toutiao-web.itheima.net/app/v1_1/articles?channel_id=${cataId}&timestamp=${new Date().getTime()}&with_top=1`)
      // const { data: { data: { results } } } = await axios.get(`http://api-toutiao-web.itheima.net/app/v1_1/articles?channel_id=${cataId}&timestamp=${new Date().getTime()}&with_top=1`)
      console.log(results)
      context.commit('updateList', { currentCatagory: cataId, list: results })
    }
  }
}
