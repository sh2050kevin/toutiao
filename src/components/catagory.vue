<template>
  <ul class="catagory">
      <li :class="{select:currentCatagory===item.id}" v-for="item in catagory" :key="item.id">{{ item.name }}</li>
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
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
