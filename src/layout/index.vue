<template>
  <div>
    <Mheader></Mheader>
    <!-- 内容 -->
    <section id="content">
    <router-view></router-view>
    </section>
    <Mfooter></Mfooter>
  </div>
</template>

<script>
import Mheader from './model/Mheader'
import Mfooter from './model/Mfooter'
export default {
  name: '',
  components: {   
     Mfooter, Mheader
  },
  data () {
    return {
    }
  },
  computed: {},
  methods: {
    
  },
  created () {
  },
  mounted () { },
  watch: {}
}
</script>

<style lang="less">
#content{
  background-color: rgb(233, 233, 233);
  min-height: calc(100vh - 200px);
  padding-top: 100px;
}
</style> 
