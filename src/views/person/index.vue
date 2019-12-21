<template>
  <div class="person">
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
  
}
</script>
<style lang="scss" scoped>
   .home{
     width: 500px;
     margin: 50px auto;
   }
</style>
