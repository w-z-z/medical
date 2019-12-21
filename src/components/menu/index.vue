<template>
  <div>
    <!-- <div v-for="item in router" :key="item.path">
        <div @click="ffg(item.path)">
 {{item.name}}
        </div>
       </div> -->
  </div>
</template>

<script>
 import { mapGetters } from "vuex";

export default {
  name: 'Mfooter',
  data () {
    return {
      data:[]
    }
  },
computed: {
        ...mapGetters(['router'])
      },
  methods: {
    ffg(r){
      this.$router.push(r)
    }
  },
  created () {
  },
  mounted () { },
  watch: {}
}
</script>

<style  scoped>
</style>
