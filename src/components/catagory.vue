<template>
  <ul class="catagory">
      <li @click="$store.commit('catagory/updateCurrentCatagory',item.id)" :class="{select:currentCatagory===item.id}" v-for="item in catagory" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ToutiaoCatagory',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['catagory', 'currentCatagory'])
  },
  created () {
    this.$store.dispatch('catagory/getCatagory')
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
