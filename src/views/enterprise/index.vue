<template>
  <div class="enterprise">
    <Mmenu></Mmenu>
       <router-view></router-view>
  </div>
</template>
<script>
import Mmenu from '@/components/menu'  

export default {
  name: 'enterprise',
  data(){
    return {
        
    }
  },
    components: {   
     Mmenu
  },
}
</script>
<style lang="scss" scoped>
   .enterprise{
     width: 500px;
     margin: 50px auto;
   }
</style>
