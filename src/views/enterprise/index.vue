<template>
  <div class="person">
   <button @click="fff('setUserInfo')">设置个人信息</button>
   <button @click="fff('messageList')">消息列表</button>
   <button @click="fff('staff')">员工列表</button>
     <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'person',
  data(){
    return {
        
    }
  },
  methods: {
    fff(c){
     this.$router.push({
       name:c
     })
    }
  },
}
</script>
<style lang="scss" scoped>
   .home{
     width: 500px;
     margin: 50px auto;
   }
</style>
