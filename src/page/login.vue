<template>
  <div class="login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入用户名称"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" placeholder="请输入用户密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped lang="less">
  .login {
    height: 300px;
    width: 400px;
    padding: 20px;
    border: 1px solid gainsboro;
    margin: 200px auto 0 auto;
    border-radius: 10px;
    display: flex;
    background: ghostwhite;
  }

  .el-form {
    justify-items: center;
    align-self: center;
  }
</style>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          pass: ''
        },
        rules: {
          name: [
            {required: true, message: '用户名称不能为空', trigger: 'blur'},
//            {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
          ],
          pass: [
            {required: true, message: '用户密码不能为空', trigger: 'blur'},
//            {min: 8, max: 15, message: '长度在 8 到 15 个字符', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
          const _this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '恭喜你，登录成功',
              type: 'success'
            });
            localStorage['username'] = _this.ruleForm.name;
            localStorage['password'] = _this.ruleForm.pass;
            _this.$router.push({path:'/'})
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
