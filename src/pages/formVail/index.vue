<template>
  <div class="form-container">
    <van-nav-bar title="表单校验扩展组件"   left-text="返回"   left-arrow
                 @click-left="back"  />
    <vantForm ref="vanForm" :rules="rules" inputVail="true">
      <template slot="items">
        <van-field error-message="请输入正确的用户名~"  rule="userName"
                   label="用户名" placeholder="请输入用户名"  v-model="reqParam.userName"/>
        <van-field error-message="请输入正确的手机号~"  rule="phone"
                   label="手机号码" placeholder="请输入手机号码"  v-model="reqParam.phone"/>
        <van-field error-message="请输入6~20位密码~" rule="pwd"
                   type="password" label="密码" placeholder="请输入密码"  v-model="reqParam.pwd"/>
        <van-field error-message="两次输入密码不一致~"  rule="confirmPwd"
                   type="password" label="再次输入" placeholder="再次输入" v-model="reqParam.confirmPwd" />
      </template>
    </vantForm>
    <van-button class="submit-btn" type="primary" @click="submitForm">提交</van-button>
  </div>
</template>

<script>
import VantForm from '@/components/vant-ui-extend/form';
import { Toast } from 'vant';

export default {
  name: 'formVail',
  data() {
    return {
      reqParam: {
        userName: '',
        phone: '',
        pwd: '',
        confirmPwd: ''
      },
      rules: {
        'userName': {required: true},
        'phone': {regExp: /^(1\d{10})$/, required: true},
        'pwd': { regExp: /^(\w){6,20}$/, required: true},
        'confirmPwd': { required: true
          ,handleVailFun:val => { return val === this.reqParam.pwd; }
        }
      }
    }
  },
  created() {
  },
  methods: {
    back() {
      this.$router.back();
    },
    submitForm() {
      this.$refs['vanForm'].allVail()?Toast.success('校验通过'): Toast.fail('提交失败');
    }
  },
  components: {
    VantForm
  }
}
</script>

<style scoped  lang="scss">
  .form-container{
    .submit-btn{
      width:100%;
    }
  }
</style>
