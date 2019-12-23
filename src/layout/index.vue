<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 13:42:14
 * @LastEditors  : Seven
 * @LastEditTime : 2019-12-23 16:50:21
 -->
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
  min-height: calc(100vh - 200px);
}
</style> 
