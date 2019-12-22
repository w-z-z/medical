<template>
  <div>
    messageList
        <button @click="fff('messageDetail')">消息详情</button>

  </div>
</template>

<script>

export default {
  name: 'messageList',
  created(){
  },
  data () {
    return {
    }
  },
   methods: {
    fff(c){
     this.$router.push({name:c})
    }
  },
}
</script>

<style  scoped>
</style>
