<template>
  <div id="app">
    <Catagory/>
    <NewsList/>
  </div>
</template>

<script>
import Catagory from '@/components/catagory.vue'
import NewsList from '@/components/new-list.vue'

export default {
  name: 'App',
  components: {
    Catagory,
    NewsList
  }
}
</script>
