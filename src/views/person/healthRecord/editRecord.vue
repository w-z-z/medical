<template>
  <div class="editRecord">
    editRecord
    <BDfrom></BDfrom>
  </div>
</template>
<script>
import  BDfrom  from '@/components/BD_from/demo';

export default {
  name: 'editRecord',
  data(){
    return {
        
    }
  },
  components:{
    BDfrom
  }
}
</script>
<style lang="scss" scoped>
   .editRecord{
     width: 500px;
     margin: 50px auto;
   }
</style>
