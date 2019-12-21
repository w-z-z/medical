<template>
  <div>
    <Mheader></Mheader>
    <!-- 内容 -->
    <router-view></router-view>
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
  padding-top: 110px;
  max-width: 500px;
  margin: 0 auto;
  background-color: darkkhaki;
}
</style> 
