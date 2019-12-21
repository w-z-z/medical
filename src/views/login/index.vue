<template>
  <div class="home">
    <div>
      类型1：个人
      <br>
      类型2：企业
    </div>
   <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="类型" prop="usertype">
    <el-input type="number" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
  </el-form-item>
</el-form>
  </div>
</template>
<script>
 import { mapGetters } from "vuex";
export default {
  name: 'home',
  data(){
    return {
        ruleForm: {
          usertype: '',
        },
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
        this.$store.dispatch("changeUserInfo",{
          ji:5
        })
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
