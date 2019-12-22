<template>
  <div class="home">
    <div>
    </div>
   <el-form  ref="ruleForm" :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="登录类型">
    <el-select v-model="formInline.region" placeholder="登录类型">
      <el-option label="个人" value="1"></el-option>
      <el-option label="企业" value="2"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
  </el-form-item>
</el-form>
  </div>
</template>
<script>
 import { mapGetters } from "vuex";
import personRouter from '@/router/routers/person'
import staticRouter from '@/router/staticRouter'
import enterpriseRouter from '@/router/routers/enterprise'
export default {
  name: 'home',
  data(){
    return {
        formInline: {
          user: '',
          region: ''
        }
    }
  },
  components: {
  }, 
    computed: {
        ...mapGetters(['userInfo'])
      },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.changebgb()
          } else {
            return false;
          }
        });
      },
      changebgb(){
        let userInfo={  
          name:"真真棒",
          type:this.formInline.region,
          routers:personRouter
        }

      let addRouters = this.formInline.region==1?personRouter:enterpriseRouter;
      userInfo['routers']=addRouters;
      //存储store
      this.$store.dispatch("changeUserInfo",userInfo)
      // this.$store.dispatch("addRouters",addRouters)
      this.$router.push({name:"userCener"})
      }
    }
}
</script>
<style lang="scss" scoped>
   .home{
     width: 500px;
     margin: 50px auto;
   }
</style>
