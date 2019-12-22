<template>
  <div class="MedicalReports">
    123MedicalReports
    <BDtable></BDtable>
  </div>
</template>
<script>
import  BDtable  from '@/components/BD_table/demo';
export default {
  name: 'MedicalReports',
  data(){
    return {
        
    }
  },
  components:{
    BDtable
  }
  
}
</script>
<style lang="scss" scoped>
   .MedicalReports{
     width: 500px;
     margin: 50px auto;
   }
</style>
