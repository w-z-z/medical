<template>
  <div id='header'>
   header
   <button @click="fff('/login')">登录</button>
   <button @click="fff('/forgetPsd')">忘记密码</button>
   <button @click="fff('/NotFound')">404</button>
   <button @click="fff('/register')">注册</button>
   <button @click="loginOut">退出</button>
  </div>
</template>

<script>
import {createRouter} from '../../router/index'

export default {
  name: 'Mheader',
  data () {
    return {
    }
  },
  computed: {},
  methods: {
    fff(c){
     this.$router.push(c)
    },
    loginOut(){
      //清空数据
      this.$store.dispatch("changeUserInfo",{},)
      this.$router.hasAddRouter = false;
      this.$router.matcher = createRouter().matcher;
       this.$router.push({name:"login"})
    }
  },
  created () {
  },
  mounted () { },
  watch: {}
}
</script>

<style  lang='less' scoped>
  #header{
    width: 100%;
    height: 100px;
    background-color: aquamarine;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
