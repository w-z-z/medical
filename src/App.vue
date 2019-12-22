<template>
  <div id="app">
    <!-- <layout></layout> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import layout from '@/layout/index.vue'

export default {
  name: 'medical',
    components: {
    // layout
  },
  methods:{
  },
  created(){
   console.log(this.token)
  }
}
</script>

<style scoped>
/* CSS */
</style>