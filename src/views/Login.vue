<template lang="pug">
  div
    el-form.login-container(:model="form",:rules="rules",ref="loginForm",label-position="left",label-width="0")
      h2.title 商店管理
      el-form-item(prop="username")
        el-input(type="text",v-model="form.username",placeholder="用户名", maxlength="20")
      el-form-item(prop="password")
        el-input(type="password",v-model="form.password",auto-complete="off",placeholder="密码", maxlength="18")
      el-form-item
        el-button(type="primary",:loading="loading",@click.native.prevent="submitForm('loginForm')",style="width:100%;") 登录
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

// @Component 即使没有vue组件也不能忽略
@Component({})
export default class Login extends Vue {
  private loading: boolean = false;
  private form: any = {
    username: '',
    password: ''
  };
  private rules: object = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' }
    ]
  };
  private submitForm (ref: string): void {
    console.log(this.form)
    let el: any = this.$refs[ref]
    el.validate((valid: boolean) => {
      if (valid) {
        // 验证通过
        localStorage.setItem('username', this.form.username)
        this.$router.push('/home')
      } else {
        // 验证失败
      }
    })
  }
}
</script>

<style lang="scss" scoped>
    .login-container{
        background-color: #ffffff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        padding: 35px 35px 15px;
        margin: 180px auto;
        width: 350px;
        border-radius: 5px;

        .title{
            margin: 0px auto 30px;
            text-align: center;
            color: #505458;
        }
    }
</style>
